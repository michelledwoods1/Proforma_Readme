// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'github',
      message: 'What is your github username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is your project name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project',
    },
    {
      type: 'list',
      message: 'What kind of license should your project have?',
      name: 'license',
      choices: ['Apache 2.0', 'Boost 1.0', 'BSD 3.0', 'BSD 2.0', 'None'],
    },
    {
      type: 'input',
      name: 'install',
      message: 'What command should be run to install dependancies?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What command should be run to run tests?',
      choices: ['npm i'],
    },
    {
      type: 'input',
      name: 'using',
      message: 'What does the user need to know about using the repo?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What does the user need to know about contributing to the repo?',
    },
  ])
  .then((data) =>
    console.log(`# ${data.title}
    ## Description
    ${data.description}
    ## Table of Contents
    ### Installation
    ${data.install}
    ### Usage
    ${data.usage}
    ### License
    ${data.license}
    ### Contributing
    ${data.contributing}
    ### Tests
    ${data.tests}
    ### Questions
    ${data.email}
  `)
  .then((data) => {
    const markdownPageContent = generateMarkdown(data);
   // TODO: Create a function to write README file
  
    fs.writeFile('README.md', markdownPageContent, (err) =>
    err ? console.log(err) : console.log('Sucessfully created README.nd'))
  }));
  
