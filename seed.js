require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);

const Subject = require('./models/subject.js');

// async function seedSubjectQandAs() {
//   console.log('Seeding subject questions and answers...');
  
//   // Define the questions and answers for the "Programming" subject
//   const programmingQandAs = [
//     { question: 'What is a variable?', answer: 'A variable is a storage location identified by a name that holds data.' },
//     { question: 'What is a function?', answer: 'A function is a block of code that performs a specific task and can be reused.' },
//     { question: 'What is an array?', answer: 'An array is a data structure that holds a collection of items.' },
//     { question: 'What is an object in JavaScript?', answer: 'An object is a data structure that represents real-world entities with key-value pairs.' },
//   ];
  
//   // Create the "Programming" subject with the questions and answers
//   await Subject.create({
//     title: 'Programming',
//     description: 'A subject covering fundamental programming concepts.',
//     questionAndAnswers: programmingQandAs
//   });
  
//   console.log('Done seeding!');
  
//   // Disconnect from the database
//   mongoose.disconnect();
// }

async function seedSubjectQandAs() {
  console.log('Seeding subject questions and answers...');

  const hardwareAndPCModifications = new Subject({
    title: 'Hardware and PC Modifications',
    description: 'Core Components like the CPU, Motherboard, RAM, and GPU; and peripherals like monitors, keyboards and mice, printers and sound systems; as well as case modifications like liquid cooling.',
    questionAndAnswers: [
      {
        question: 'What is the function of a CPU in a computer?',
        answer: 'The CPU, or Central Processing Unit, is the brain of the computer, responsible for executing instructions and processing data from programs.'
      },
      {
        question: 'What are the key differences between RAM and storage?',
        answer: 'RAM (Random Access Memory) is temporary storage used by the CPU to store data that is being actively used, while storage (like an SSD or HDD) is used for long-term data storage.'
      },
      {
        question: 'What is the purpose of a GPU in a gaming PC?',
        answer: 'The GPU, or Graphics Processing Unit, is responsible for rendering images, videos, and animations, making it crucial for gaming and graphics-intensive tasks.'
      },
      {
        question: 'How does liquid cooling work in a PC?',
        answer: 'Liquid cooling uses a liquid coolant to absorb heat from the CPU or GPU, transferring it to a radiator where it is dissipated, providing more efficient cooling than air cooling.'
      },
      {
        question: 'What are the benefits of using a mechanical keyboard over a membrane keyboard?',
        answer: 'Mechanical keyboards offer tactile feedback, durability, and customizability, making them preferred by gamers and typists for a more responsive and comfortable experience.'
      }
    ]
  });

  await hardwareAndPCModifications.save();

  console.log('Done seeding!');

  mongoose.disconnect();
}

seedSubjectQandAs();
