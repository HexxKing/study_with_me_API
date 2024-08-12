'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);

const Subject = require('./models/subject.js');

async function clear() {
  try {
    await Subject.deleteMany({});
    console.log('All Subjects deleted!');
  } catch(error) {
    console.error('something went wrong when clearing the DB: ', error);
  } finally {
    mongoose.disconnect(); 
  }
}

clear();
