'use strict';

const mongoose = require('mongoose');

// Define the schema for a single question and its corresponding answer
const questionAnswerSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

// Define the schema for the subject, which includes an array of questions and answers
const subjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  questionAndAnswers: { type: [questionAnswerSchema], required: true }, // Array of question and answer objects
});

const subjectModel = mongoose.model('subject', subjectSchema);

module.exports = subjectModel;