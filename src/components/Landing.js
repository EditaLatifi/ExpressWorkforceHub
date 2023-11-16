import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-green-400 to-indigo-700">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-screen-sm text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Welcome to Management Web App
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Log in or register to get started
        </p>
        <Link to="/login" className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md text-center mb-4">
          Log In
        </Link>
        <Link to="/register" className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md text-center">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Landing;



