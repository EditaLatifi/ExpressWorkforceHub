const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { Pool } = require('pg');
const jsonServer = require("json-server");
const cors = require('cors');


// Initialize Express.js for user registration and login
const app = express();
app.use(bodyParser.json());

// Configure CORS to allow requests from your front-end
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with the actual origin of your front-end app
};
app.use(cors(corsOptions));

// Create a PostgreSQL connection pool for user authentication
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'login', // Your PostgreSQL database
  password: '1111',
  port: 5432, // PostgreSQL port
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
    const selectUserQuery = 'SELECT * FROM registration WHERE email = $1';
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
// Start Express.js server on port 3001
const port = 3001;
app.listen(port, () => {
  console.log(`Express.js server is running on port ${port}`);
});
