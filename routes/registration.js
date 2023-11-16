const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { Pool } = require('pg');

const app = express();
app.use(bodyParser.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'login',
  password: '1111',
  port: 5432,
});

// Registration route

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      // Check if the email is already registered
      const emailCheckQuery = 'SELECT * FROM registration WHERE email = $1';      
      const emailCheckValues = [email];
      const existingUser = await pool.query(emailCheckQuery, emailCheckValues);
  
      if (existingUser.rows.length > 0) {
        return res.status(400).json({ error: 'Email already registered' });
      }
  
      // Hash the password before storing it in the database
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Insert user data into the database
      const insertUserQuery = 'INSERT INTO registration (username, email, password) VALUES ($1, $2, $3)';
      const values = [username, email, hashedPassword];
  
      await pool.query(insertUserQuery, values);
      res.json({ message: 'Registration successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Registration failed' });
    }
  });

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Retrieve user data from the database
    const selectUserQuery = 'SELECT * FROM registration WHERE email = $1'; // Corrected table name here
    const values = [email];
    const result = await pool.query(selectUserQuery, values);
    const user = result.rows[0];

    if (user && (await bcrypt.compare(password, user.password))) {
        // User authentication successful
        res.json({ message: 'Login successful' });
      } else {
        // User authentication failed
        res.status(401).json({ error: 'Login failed' });
      }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Login failed' });
  }
});

// Express.js server is running on port 3001
const port = 3001;
app.listen(port, () => {
  console.log(`Express.js server is running on port ${port}`);
});