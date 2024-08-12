require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);

const Subject = require('./models/subject.js');

async function seedProgrammingQandAs() {
  console.log('Seeding programming questions and answers...');
  
  // Define the questions and answers for the "Programming" subject
  const programmingQandAs = [
    { question: 'What is a variable?', answer: 'A variable is a storage location identified by a name that holds data.', image: "https://via.placeholder.com/700x500"},
    { question: 'What is a function?', answer: 'A function is a block of code that performs a specific task and can be reused.', image: "https://via.placeholder.com/700x500" },
    { question: 'What is an array?', answer: 'An array is a data structure that holds a collection of items.', image: "https://via.placeholder.com/700x500" },
    { question: 'What is an object in JavaScript?', answer: 'An object is a data structure that represents real-world entities with key-value pairs.', image: "https://via.placeholder.com/700x500" },
  ];
  
  // Create the "Programming" subject with the questions and answers
  await Subject.create({
    title: 'Programming',
    description: 'A subject covering fundamental programming concepts.',
    questionAndAnswers: programmingQandAs
  });
  
  console.log('Done seeding programming!');
  
  // Disconnect from the database
  mongoose.disconnect();
}

async function seedhardwareAndPCModificationsQandAs() {
  console.log('Seeding hardwareAndPCModifications questions and answers...');

  const hardwareAndPCModifications = new Subject({
    title: 'Hardware and PC Modifications',
    description: 'Core Components like the CPU, Motherboard, RAM, and GPU; and peripherals like monitors, keyboards and mice, printers and sound systems; as well as case modifications like liquid cooling.',
    questionAndAnswers: [
      {
        question: 'What is the function of a CPU in a computer?',
        answer: 'The CPU, or Central Processing Unit, is the brain of the computer, responsible for executing instructions and processing data from programs.',
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: 'What are the key differences between RAM and storage?',
        answer: 'RAM (Random Access Memory) is temporary storage used by the CPU to store data that is being actively used, while storage (like an SSD or HDD) is used for long-term data storage.',
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: 'What is the purpose of a GPU in a gaming PC?',
        answer: 'The GPU, or Graphics Processing Unit, is responsible for rendering images, videos, and animations, making it crucial for gaming and graphics-intensive tasks.',
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: 'How does liquid cooling work in a PC?',
        answer: 'Liquid cooling uses a liquid coolant to absorb heat from the CPU or GPU, transferring it to a radiator where it is dissipated, providing more efficient cooling than air cooling.',
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: 'What are the benefits of using a mechanical keyboard over a membrane keyboard?',
        answer: 'Mechanical keyboards offer tactile feedback, durability, and customizability, making them preferred by gamers and typists for a more responsive and comfortable experience.',
        image: "https://via.placeholder.com/700x500",
      }
    ]
  });

  await hardwareAndPCModifications.save();

  console.log('Done seeding hardwareAndPCModifications!');

  mongoose.disconnect();
}

async function seedITcomputerNetworkingQandAs() {
  console.log('seeding ITcomputerNetworking questions and answers...');

  await Subject.create({
    title: "IT and Computer Networking",
    description: "Operating Systems, Network Concepts, and Security Threats and Vulnerabilities, and Scripting",
    questionAndAnswers: [
      {
        question: "What is the role of an operating system in a computer?",
        answer: "An operating system acts as an intermediary between the user and the computer hardware. It manages hardware resources, facilitates user interaction, and runs applications.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What is the difference between TCP and UDP?",
        answer: "TCP (Transmission Control Protocol) is connection-oriented and ensures data delivery in the correct order, while UDP (User Datagram Protocol) is connectionless, faster, but does not guarantee delivery.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What are some common network security threats?",
        answer: "Common network security threats include malware, phishing, man-in-the-middle attacks, denial of service (DoS) attacks, and SQL injection.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What is the purpose of subnetting in networking?",
        answer: "Subnetting is used to divide a large network into smaller, more efficient subnetworks, improving routing efficiency and network security.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What are some basic scripting languages used in IT automation?",
        answer: "Common scripting languages include Python, Bash, PowerShell, and Perl, often used for automating tasks, managing systems, and processing data.",
        image: "https://via.placeholder.com/700x500",
      }
    ]
  });

  console.log('done seeding ITcomputerNetworking!');
  mongoose.disconnect();
}

async function seedCybersecurityQandAs() {
  console.log('seeding Cybersecurity questions...');

  await Subject.create({
    title: 'Cybersecurity',
    description: 'Threats, Attacks, and Vulnerabilities, Security Tools and Technologies, Cryptography, Authentication and Authorization, Risk Management, Compliance and Governance, and Incident Response Procedures',
    questionAndAnswers: [
      {
        question: 'What are the different types of cybersecurity threats?',
        answer: 'Cybersecurity threats include malware, phishing, man-in-the-middle attacks, denial-of-service attacks, and SQL injection.',
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: 'What tools are commonly used in cybersecurity?',
        answer: 'Common cybersecurity tools include firewalls, antivirus software, intrusion detection systems (IDS), and encryption tools.',
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: 'How does cryptography enhance cybersecurity?',
        answer: 'Cryptography ensures secure communication by encrypting data, making it accessible only to authorized parties.',
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: 'What is the importance of authentication and authorization?',
        answer: 'Authentication verifies the identity of a user, while authorization determines their access level to resources.',
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: 'What are key steps in an incident response procedure?',
        answer: 'Key steps include preparation, identification, containment, eradication, recovery, and lessons learned.',
        image: "https://via.placeholder.com/700x500",
      },
    ],
  });

  console.log('done seeding Cybersecurity!');

  mongoose.disconnect();
}

async function seedDSAQandAs() {
  console.log('seeding DSA questions and answers...');

  await Subject.create({
    title: "Data Structures and Algorithms",
    description: "Arrays, Linked Lists, Stacks, Queues, Hash Tables, Trees, Graphs, Tries, Sorting Algorithms, Space and Time Complexity",
    questionAndAnswers: [
      {
        question: "What is the difference between an array and a linked list?",
        answer: "An array is a collection of elements stored in contiguous memory locations, allowing random access. A linked list is a collection of elements where each element points to the next, allowing dynamic memory allocation.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "How does a stack differ from a queue?",
        answer: "A stack is a LIFO (Last In, First Out) data structure where the last element added is the first to be removed. A queue is a FIFO (First In, First Out) data structure where the first element added is the first to be removed.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What is a hash table and how does it work?",
        answer: "A hash table is a data structure that stores key-value pairs. It uses a hash function to map keys to indices in an array, allowing for efficient data retrieval.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What is the time complexity of binary search?",
        answer: "The time complexity of binary search is O(log n), where n is the number of elements in the sorted array. This is because binary search divides the search space in half with each step.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What is the difference between a tree and a graph?",
        answer: "A tree is a hierarchical data structure with a single root and no cycles, where each node has at most one parent. A graph is a more general structure that can have cycles, multiple roots, and nodes with multiple parents.",
        image: "https://via.placeholder.com/700x500",
      }
    ]
  });

  console.log('done seeding DSA!');
  mongoose.disconnect();
}

async function seedDatabasesQandAs() {
  console.log('seeding Databases questions and answers...');

  await Subject.create({
    title: "Databases",
    description: "Relational, Non-Relational, Database Design, Queries, NoSQL vs. SQL, Keys and Constraints",
    questionAndAnswers: [
      {
        question: "What is the difference between relational and non-relational databases?",
        answer: "Relational databases store data in tables with predefined schemas and use SQL for querying. Non-relational databases, also known as NoSQL, store data in various formats such as key-value pairs, documents, or graphs, and are schema-less.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What are primary keys and foreign keys in database design?",
        answer: "A primary key is a unique identifier for a record in a table. A foreign key is a field in one table that links to the primary key in another table, establishing a relationship between the two tables.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "When would you choose NoSQL over SQL databases?",
        answer: "NoSQL databases are preferred when dealing with large volumes of unstructured data, requiring high scalability, or when the data model is flexible and may change over time. SQL databases are preferred for structured data with complex queries and transactions.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What is database normalization?",
        answer: "Database normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It involves dividing a database into tables and establishing relationships between them according to normal forms.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What are some common constraints used in SQL databases?",
        answer: "Common constraints in SQL databases include NOT NULL (ensures a field cannot have a NULL value), UNIQUE (ensures all values in a column are unique), CHECK (ensures that all values in a column satisfy a specific condition), and FOREIGN KEY (ensures referential integrity between tables).",
        image: "https://via.placeholder.com/700x500",
      }
    ]
  });

  console.log('done seeding Databases!');
  mongoose.disconnect();
}

async function seedCloudQandAs() {
  console.log('seeding Cloud questions and answers...');

  const cloudSubject = {
    title: "Cloud",
    description: "Cloud Service Models, Cloud Deployment Models, Virtualization, Elasticity and Scalability, Identity and Access Management (IAM), Virtual Private Cloud (VPC), Load Balancing, Content Delivery Networks (CDNs), Cloud Migration",
    questionAndAnswers: [
      {
        question: "What are the three primary cloud service models?",
        answer: "The three primary cloud service models are Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What are the key differences between public, private, and hybrid cloud deployment models?",
        answer: "Public clouds are operated by third-party providers, private clouds are operated by a single organization, and hybrid clouds combine both public and private clouds to leverage the benefits of both.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "How does virtualization enable cloud computing?",
        answer: "Virtualization allows for the creation of virtual instances of hardware or software, enabling multiple operating systems to run on a single physical machine, which is a key enabler of cloud computing.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What is the importance of Identity and Access Management (IAM) in cloud security?",
        answer: "IAM ensures that the right individuals have access to the right resources at the right times for the right reasons, which is crucial for maintaining security in cloud environments.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "How do Content Delivery Networks (CDNs) improve cloud service performance?",
        answer: "CDNs distribute content across various servers worldwide, reducing latency and improving load times for users by delivering content from the closest server to the user.",
        image: "https://via.placeholder.com/700x500",
      }
    ]
  };

  await Subject.create(cloudSubject);

  console.log('done seeding Cloud!');
  
  mongoose.disconnect();
}

async function seedWeb3QandAs() {
  console.log('seeding Web3 questions and answers...');

  await Subject.create({
    title: "Web 3",
    description: "Decentralization, Cryptocurrencies, Smart Contracts, Decentralized Finance, Decentralized Applications, Non-Fungible Tokens, Decentralized Autonomous Organizations, Interoperability, Privacy and Security, Scalability Solutions, Web 3 Browsers and Infrastructure, Tokenomics",
    questionAndAnswers: [
      {
        question: "What is decentralization in the context of Web 3?",
        answer: "Decentralization refers to the distribution of power and control away from centralized entities, enabling peer-to-peer interactions directly on a network, often facilitated by blockchain technology.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "How do smart contracts work?",
        answer: "Smart contracts are self-executing contracts with the terms of the agreement directly written into code. They automatically execute and enforce agreements without the need for intermediaries.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What is Decentralized Finance (DeFi)?",
        answer: "Decentralized Finance (DeFi) is a financial system built on blockchain technology that offers financial products and services without traditional intermediaries like banks, enabling peer-to-peer transactions.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What are Non-Fungible Tokens (NFTs) and how are they used?",
        answer: "Non-Fungible Tokens (NFTs) are unique digital assets stored on a blockchain, often representing ownership of digital art, music, or other creative works, and are used to prove authenticity and ownership.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What role do Decentralized Autonomous Organizations (DAOs) play in Web 3?",
        answer: "DAOs are organizations governed by smart contracts and run by the collective decisions of their members, often without centralized leadership, promoting transparency and decentralized decision-making.",
        image: "https://via.placeholder.com/700x500",
      }
    ]
  });

  console.log('done seeding Web3!');
  mongoose.disconnect();
}

async function seedBlockchainQandAs() {
  console.log('seeding Blockchain questions and answers...');

  await Subject.create({
    title: "Blockchain",
    description: "Hash Functions, Public and Private Keys, Smart Contracts, Blockchain Types, Cryptocurrencies, Blockchain Use Cases and Applications",
    questionAndAnswers: [
      {
        question: "What is a hash function and how is it used in blockchain?",
        answer: "A hash function converts input data into a fixed-size string of characters, which is typically a hash code. In blockchain, hash functions ensure data integrity and secure the data blocks.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What is the difference between public and private keys in blockchain?",
        answer: "Public keys are used to encrypt data and are shared openly, while private keys are used to decrypt data and must be kept secret. Together, they enable secure transactions and identity verification.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What are smart contracts and how do they work on a blockchain?",
        answer: "Smart contracts are self-executing contracts with the terms of the agreement directly written into code. They automatically execute and enforce contractual terms without intermediaries when predefined conditions are met.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What are the different types of blockchains?",
        answer: "Blockchains can be categorized as public (e.g., Bitcoin), private (e.g., Hyperledger), and consortium (e.g., R3 Corda) blockchains, each with varying levels of access control and transparency.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What are some common use cases for blockchain technology?",
        answer: "Common use cases include financial transactions (cryptocurrencies), supply chain management, voting systems, healthcare records, and digital identity verification.",
        image: "https://via.placeholder.com/700x500",
      }
    ]
  });

  console.log('done seeding Blockchain!');
  mongoose.disconnect();
}

async function seedTrigonometryQandAs() {
  console.log('seeding Trigonometry questions and answers...');

  await Subject.create({
    title: "Trigonometry",
    description: "Basic Definitions and Concepts, Trigonometric Functions, Right Triangle Trigonometry, Trigonometric Identities, Law of Sines and Law of Cosines, and Trigonometric Transformations",
    questionAndAnswers: [
      {
        question: "What is the definition of a trigonometric function?",
        answer: "A trigonometric function relates the angles of a triangle to the lengths of its sides. The primary functions are sine, cosine, and tangent.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What is the Pythagorean Theorem in trigonometry?",
        answer: "The Pythagorean Theorem states that in a right triangle, the square of the length of the hypotenuse is equal to the sum of the squares of the lengths of the other two sides: \(a^2 + b^2 = c^2\).",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "How is the Law of Sines used in trigonometry?",
        answer: "The Law of Sines states that the ratio of the length of a side of a triangle to the sine of its opposite angle is constant for all three sides and angles in the triangle: \(\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}\).",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What is a trigonometric identity?",
        answer: "A trigonometric identity is an equation involving trigonometric functions that is true for all values of the variable where both sides of the equation are defined. Common identities include the Pythagorean identities and angle sum formulas.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "How do you apply the Law of Cosines in trigonometry?",
        answer: "The Law of Cosines generalizes the Pythagorean Theorem for any triangle, stating that \(c^2 = a^2 + b^2 - 2ab \cdot \cos(C)\), where \(c\) is the side opposite angle \(C\).",
        image: "https://via.placeholder.com/700x500",
      }
    ]
  });

  console.log('done seeding Trigonometry!');
  mongoose.disconnect();
}

async function seedAlgebraQandAs() {
  console.log('seeding Algebra questions and answers...');
  
  await Subject.create({
    title: "Algebra",
    description: "Order of Operations, Linear Algebra, Polynomials, Quadratic Equations, Rational Expressions, Exponents and Radicals, Inequalities, Complex Numbers, Sequences and Series, and Logarithms",
    questionAndAnswers: [
      {
        question: "What is the correct order of operations in algebra?",
        answer: "The correct order of operations is Parentheses, Exponents, Multiplication and Division (from left to right), Addition and Subtraction (from left to right). This is often remembered by the acronym PEMDAS.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What is a polynomial?",
        answer: "A polynomial is a mathematical expression involving a sum of powers in one or more variables multiplied by coefficients. Examples include \(3x^2 + 2x - 5\) and \(4y^3 - y + 7\).",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "How do you solve a quadratic equation?",
        answer: "A quadratic equation can be solved using the quadratic formula \(x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}\), where \(a\), \(b\), and \(c\) are coefficients in the equation \(ax^2 + bx + c = 0\).",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What is a complex number?",
        answer: "A complex number is a number of the form \(a + bi\), where \(a\) and \(b\) are real numbers and \(i\) is the imaginary unit with the property \(i^2 = -1\).",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What is the difference between rational and irrational expressions?",
        answer: "Rational expressions are fractions where the numerator and denominator are polynomials. Irrational expressions involve roots that cannot be simplified into rational numbers, such as \(\sqrt{2}\) or \(\sqrt{5}\).",
        image: "https://via.placeholder.com/700x500",
      }
    ],
  });

  console.log('done seeding Algebra!');
  mongoose.disconnect();
}

async function seedCalculusQandAs() {
  console.log('seeding Calculus questions and answers...');

  await Subject.create({
    title: "Calculus",
    description: "Limits, Derivatives, Differential Equations, Integrals, and Improper Integrals",
    questionAndAnswers: [
      {
        question: "What is a limit in calculus?",
        answer: "A limit is the value that a function approaches as the input approaches some value. It is a fundamental concept in calculus used to define derivatives and integrals.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What is the derivative of a function?",
        answer: "The derivative of a function measures the rate at which the function's value changes with respect to changes in its input. It is the slope of the tangent line to the function's graph at a given point.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What is a differential equation?",
        answer: "A differential equation is an equation involving derivatives of a function. It describes the relationship between the function and its rate of change, often used to model dynamic systems.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What is the integral of a function?",
        answer: "The integral of a function represents the area under the curve of the function on a given interval. It is the reverse operation of differentiation and is used to find accumulated quantities.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What are improper integrals?",
        answer: "Improper integrals involve integrals with infinite limits of integration or integrands that approach infinity within the integration range. They are evaluated using limits to handle these singularities.",
        image: "https://via.placeholder.com/700x500",
      }
    ]
  });

  console.log('done seeding Calculus!');
  mongoose.disconnect();
}

async function seedBiologyQandAs() {
  console.log('seeding Biology questions and answers...');

  await Subject.create({
    title: "Biology",
    description: "Cell Biology, Genetics, Evolution, Ecology, Physiology, Microbiology, Biochemistry, Developmental Biology, Behavioral Biology, Biotechnology, and Environmental Biology",
    questionAndAnswers: [
      {
        question: "What is the basic unit of life in cell biology?",
        answer: "The cell is the basic unit of life. It is the smallest structural and functional unit of an organism.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What is the central dogma of molecular biology?",
        answer: "The central dogma of molecular biology is the process by which genetic information flows from DNA to RNA to protein.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "How does natural selection drive evolution?",
        answer: "Natural selection drives evolution by favoring individuals with advantageous traits that are better suited for their environment, leading to those traits becoming more common in the population over time.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What is the significance of photosynthesis in ecology?",
        answer: "Photosynthesis is crucial in ecology as it is the process by which plants and other organisms convert light energy into chemical energy, producing oxygen and organic compounds that form the basis of the food chain.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What is the role of biotechnology in modern science?",
        answer: "Biotechnology involves using biological systems and organisms to develop or create products and technologies for various applications, including medicine, agriculture, and environmental management.",
        image: "https://via.placeholder.com/700x500",
      }
    ]
  });

  console.log('done seeding Biology!');
  mongoose.disconnect();
}

async function seedChemistryQandAs() {
  console.log('seeding Chemistry questions and answers...');

  await Subject.create({
    title: "Chemistry",
    description: "Atomic Structure, Periodic Table, Chemical Bonding, Chemical Reactions, and Energy",
    questionAndAnswers: [
      {
        question: "What are the main subatomic particles in an atom?",
        answer: "The main subatomic particles in an atom are protons, neutrons, and electrons.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "How is the periodic table organized?",
        answer: "The periodic table is organized by increasing atomic number and by grouping elements with similar chemical properties into columns called groups.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What is a covalent bond?",
        answer: "A covalent bond is a type of chemical bond where two atoms share one or more pairs of electrons to achieve a full outer electron shell.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What happens during a chemical reaction?",
        answer: "During a chemical reaction, bonds between atoms are broken and new bonds are formed, resulting in the creation of new substances with different properties.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What is the law of conservation of energy?",
        answer: "The law of conservation of energy states that energy cannot be created or destroyed in a closed system; it can only be transformed from one form to another.",
        image: "https://via.placeholder.com/700x500",
      }
    ]
  });

  console.log('done seeding Chemistry!');
  mongoose.disconnect();
}

async function seedPhysicsQandAs() {
  console.log('seeding Physics questions and answers...');

  await Subject.create({
    title: "Physics",
    description: "Mechanics, Thermodynamics, Electromagnetism, Optics, Relativity, Nuclear Physics, Particle Physics, Astrophysics and Cosmology",
    questionAndAnswers: [
      {
        question: "What is Newton's first law of motion?",
        answer: "Newton's first law states that an object at rest will remain at rest, and an object in motion will remain in motion with the same speed and direction unless acted upon by an external force.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What is the difference between heat and temperature?",
        answer: "Heat is the energy transferred between systems due to a temperature difference, while temperature is a measure of the average kinetic energy of the particles in a substance.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What is Faraday's law of electromagnetic induction?",
        answer: "Faraday's law states that a change in the magnetic field within a closed loop induces an electromotive force (EMF) in the loop, which can produce an electric current.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What causes the bending of light in optics?",
        answer: "The bending of light, or refraction, occurs when light passes from one medium to another with a different density, causing a change in its speed and direction.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What is the principle of relativity?",
        answer: "The principle of relativity, formulated by Albert Einstein, states that the laws of physics are the same for all observers, regardless of their relative motion, and that the speed of light is constant in a vacuum.",
        image: "https://via.placeholder.com/700x500",
      }
    ]
  });

  console.log('done seeding Physics!');
  mongoose.disconnect();
}

async function seedEngineeringQandAs() {
  console.log('seeding Engineering questions and answers...');

  await Subject.create({
    title: "Engineering",
    description: "Unit Conversions, Civil Engineering, Mechanical Engineering, Electrical Engineering, Chemical Engineering, Computer Engineering, Aerospace Engineering, Industrial Engineering, Environmental Engineering, Biomedical Engineering, and Systems Engineering",
    questionAndAnswers: [
      {
        question: "What is unit conversion and why is it important in engineering?",
        answer: "Unit conversion is the process of converting a quantity from one unit of measurement to another. It is crucial in engineering to ensure consistency and accuracy across different systems of measurement.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What are the main disciplines within Civil Engineering?",
        answer: "Civil Engineering encompasses various disciplines including structural engineering, geotechnical engineering, transportation engineering, environmental engineering, and water resources engineering.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What is the difference between mechanical engineering and aerospace engineering?",
        answer: "Mechanical engineering focuses on the design, analysis, and manufacturing of mechanical systems, while aerospace engineering is specifically concerned with the development of aircraft and spacecraft.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "How does Electrical Engineering differ from Electronics Engineering?",
        answer: "Electrical engineering deals with the generation and distribution of electrical power, whereas electronics engineering focuses on designing and working with electronic circuits and devices.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What are the primary concerns of Environmental Engineering?",
        answer: "Environmental Engineering addresses issues related to environmental protection, including waste management, pollution control, water treatment, and sustainable development.",
        image: "https://via.placeholder.com/700x500",
      }
    ]
  });

  console.log('done seeding Physics!');
  mongoose.disconnect();
}

async function seedHistoricPeopleQandAs() {
  console.log('seeding Historic People questions and answers...');

  await Subject.create({
    title: "Historic People",
    description: "Famous figures from history across various cultures and eras.",
    questionAndAnswers: [
      {
        question: "Who was Julius Caesar?",
        answer: "Julius Caesar was a Roman general and statesman who played a critical role in the events that led to the demise of the Roman Republic and the rise of the Roman Empire.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What contributions did Leonardo da Vinci make to art and science?",
        answer: "Leonardo da Vinci was a polymath who made significant contributions to art with works like the Mona Lisa, and to science with his studies of anatomy, engineering, and flight.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "Who was Nelson Mandela?",
        answer: "Nelson Mandela was a South African anti-apartheid revolutionary and political leader who became the first Black president of South Africa and was awarded the Nobel Peace Prize.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What was the significance of Mahatma Gandhi's leadership?",
        answer: "Mahatma Gandhi led the Indian independence movement through non-violent civil disobedience and played a crucial role in ending British rule in India.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "Who was Marie Curie and what is she known for?",
        answer: "Marie Curie was a physicist and chemist who conducted pioneering research on radioactivity and was the first woman to win a Nobel Prize.",
        image: "https://via.placeholder.com/700x500",
      }
    ]
  });

  console.log('done seeding Historic People!');
  mongoose.disconnect();
}

async function seedHistoricEventsQandAs() {
  console.log('seeding Historic Events questions and answers...');

  // Create subject for Historic Events
  await Subject.create({
    title: "Historic Events",
    description: "Key events that shaped history and their impact on the world.",
    questionAndAnswers: [
      {
        question: "What was the significance of the Fall of the Berlin Wall?",
        answer: "The Fall of the Berlin Wall in 1989 marked the end of the Cold War and the beginning of the reunification of East and West Germany.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What caused the American Civil War?",
        answer: "The American Civil War was primarily caused by conflicts over slavery and states' rights between the Northern and Southern states.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What was the impact of the French Revolution?",
        answer: "The French Revolution led to the end of the monarchy, the rise of radical political ideologies, and significant social and political changes in France.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What was the outcome of the Treaty of Versailles?",
        answer: "The Treaty of Versailles ended World War I and imposed heavy reparations and territorial losses on Germany, which contributed to political instability in Europe.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What was the significance of the Moon landing in 1969?",
        answer: "The Moon landing in 1969 was a major achievement in space exploration, marking the first time humans landed on the Moon and returned safely to Earth.",
        image: "https://via.placeholder.com/700x500",
      }
    ]
  });

  console.log('done seeding Historic Events!');
  mongoose.disconnect();
}

async function seedHistoricPlacesQandAs() {
  console.log('seeding Historic Places questions and answers...');

  // Create subject for Historic Places
  await Subject.create({
    title: "Historic Places",
    description: "Famous landmarks and locations of historical significance.",
    questionAndAnswers: [
      {
        question: "What is the significance of the Great Wall of China?",
        answer: "The Great Wall of China was built to protect Chinese states from invasions and raids and is an iconic symbol of China's historical strength and engineering prowess.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "Why is the Colosseum in Rome important?",
        answer: "The Colosseum is a monumental amphitheater in Rome and a symbol of ancient Roman engineering and gladiatorial games.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What is the significance of the Pyramids of Giza?",
        answer: "The Pyramids of Giza are ancient Egyptian tombs and are among the Seven Wonders of the Ancient World, showcasing the architectural and engineering skills of ancient Egypt.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What historical events took place at the Alhambra?",
        answer: "The Alhambra is a palace and fortress in Granada, Spain, which was the seat of the Nasrid dynasty and a significant site during the Reconquista.",
        image: "https://via.placeholder.com/700x500",
      },
      {
        question: "What is the significance of the Parthenon in Athens?",
        answer: "The Parthenon is a temple dedicated to the goddess Athena and is a symbol of ancient Greek culture and democracy, as well as a masterpiece of classical architecture.",
        image: "https://via.placeholder.com/700x500",
      }
    ]
  });

  console.log('done seeding Historic Places!');
  mongoose.disconnect();
}


// seedProgrammingQandAs()
// seedhardwareAndPCModificationsQandAs()
// seedITcomputerNetworkingQandAs()
// seedCybersecurityQandAs()
// seedDSAQandAs()
// seedDatabasesQandAs()
// seedDatabasesQandAs()
// seedCloudQandAs()
// seedWeb3QandAs()
// seedBlockchainQandAs()
// seedEngineeringQandAs()
// seedTrigonometryQandAs()
// seedAlgebraQandAs()
// seedCalculusQandAs()
// seedBiologyQandAs()
// seedChemistryQandAs()
// seedPhysicsQandAs()
// seedHistoricPeopleQandAs()
// seedHistoricEventsQandAs()
// seedHistoricPlacesQandAs()
