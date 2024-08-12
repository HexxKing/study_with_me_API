'use strict'; // Enforces strict mode, which helps catch common coding errors and unsafe actions

// Imports
require('dotenv').config(); // Loads environment variables from a .env file into process.env
const express = require('express'); // Imports the Express framework for building web apps
const cors = require('cors'); // Imports the CORS middleware for enabling Cross-Origin Resource Sharing

// Create an instance of an Express app 
const app = express();

// Middleware
app.use(cors()); // Use the CORS middleware to allow cross-origin requests

// Define the port to listen on, either from the environment variables or default to 3002
const PORT = process.env.PORT || 3002;

// A test route to check if the server is running
app.get('/test', (request, response) => {
  response.send('testing testing...is this thing on?'); // Respond with a simple message
});

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`listening on ${PORT}`)); // Log a message to confirm the server is running
