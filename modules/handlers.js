'use strict';

const Subject = require('../models/subject');

const Handler = {};

Handler.getAllSubjects = async (request, response, next) => {
  try {
    const subject = await Subject.find({});
    response.status(200).send(subject);

    // ERROR HANDLING TESTING PURPOSES ONLY: This shoud cause an error that'll end up in the catch() below and then sent to the middleware in the server.js
    // let dataThatDoesntExist = require('./this-data-does-not-exist.js');
    // response.send(dataThatDoesntExist);

  } catch (error) {
    error.customMessage = 'Something went wrong when getting that subject';
    console.error(error.customMessage + error);

    // next can be used to pass an error to express for the error middleware to handle
    next(error);

    // THIS is an anti-pattern. DO NOT handle errors inline, this is not the Express way
    // response.status(400).send('Could not find any books');
  }
};

Handler.getSubject = async (request, response, next) => {
  try {
    console.log("Request.query.subject:", request.query.subject)
    const subject = await Subject.find({title: request.query.subject});
    console.log("Subject from Mongo: ", subject);
    response.status(200).send(subject);

    // ERROR HANDLING TESTING PURPOSES ONLY: This shoud cause an error that'll end up in the catch() below and then sent to the middleware in the server.js
    // let dataThatDoesntExist = require('./this-data-does-not-exist.js');
    // response.send(dataThatDoesntExist);

  } catch (error) {
    error.customMessage = 'Something went wrong when getting that subject';
    console.error(error.customMessage + error);

    // next can be used to pass an error to express for the error middleware to handle
    next(error);

    // THIS is an anti-pattern. DO NOT handle errors inline, this is not the Express way
    // response.status(400).send('Could not find any books');
  }
};

module.exports = Handler;
