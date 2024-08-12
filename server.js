'use strict'; // Enforces strict mode, which helps catch common coding errors and unsafe actions

// Imports
require('dotenv').config(); // Loads environment variables from a .env file into process.env
const express = require('express'); // Imports the Express framework for building web apps
const cors = require('cors'); // Imports the CORS middleware for enabling Cross-Origin Resource Sharing
const Handler = require('./modules/handlers');

// Create an instance of an Express app 
const app = express();

// Middleware
app.use(cors()); // Use the CORS middleware to allow cross-origin requests
app.use(express.json()); // Without this line of code, the request.body will come in as undefined

// Define the port to listen on, either from the environment variables or default to 3002
const PORT = process.env.PORT || 3002;

// Mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', _ => {
  console.log('We\'re connected! to Mongo Atlas!');
});

// Test route to check if the server is running
app.get('/test', (request, response) => {
  response.send('testing testing...is this thing on?'); // Respond with a simple message
});

// Routes
app.get('/subject', Handler.getSubject); // Get the Subject (Question & Answer) from the database 

// Not Found
app.get('*', (request, response) => {
  response.status(404).send('Sorry, that page does not exist. Try again.');
});

// error handling middleware must be the last app.use()
app.use( (error, request, response, next ) => {
  response.status(500).send(`My Bad! Error occured in the server! Email this error to me at hexxking13@gmail.com with this error message: ${error.customMessage} ${error.message}`);
});

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`listening on ${PORT}`)); // Log a message to confirm the server is running
