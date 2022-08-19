// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your gitHub user name?',
    name: 'gitHubUser',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
  {
    type: 'input',
    message: "What is your project's title?",
    name: 'title',
  },
  {
    type: 'input',
    message: 'Share a brief description of your project: ',
    name: 'description',        
  },
  {
    type: 'input',
    message: 'What command should be run to install dependencies? ',
    name: 'installCmd',        
  },  
  {
    type: 'input',
    message: 'Description on the usage of the project: ',
    name: 'usageDesc',        
  },          
  {
    type: 'list',
    message: 'What kind of license should your project have?',
    name: 'license',
    choices: ['MIT', 'Apache 2.0', 'GPL v3', 'ISC', 'None'],
  },
  {
    type: 'list',
    message: 'Is your project open to contributions?',
    name: 'contributionDesc', 
    choices: ['Yes', 'No'],       
  }, 
  {
    type: 'input',
    message: 'What command should be run to run tests? ',
    name: 'testCommand',        
  }  
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err? console.log(err) : console.log("New proREADME.md file was successfully created!"));
}

// function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((data) => {
    console.log(data);
    const readmeContent = generateMarkdown(data);
    writeToFile('proREADME.md', readmeContent);
  });    
}

// Function call to initialize app
init();
