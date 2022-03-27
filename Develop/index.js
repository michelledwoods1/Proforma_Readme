// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { generateMarkdown } = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      name: "github",
      message: "What is your github username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
     },
    {
      type: "input",
      name: "title",
      message: "What is your project name?",
    },
    {
      type: "input",
      name: "description",
      message: "Please write a short description of your project",
    },
    {
      type: "list",
      message: "What kind of license should your project have?",
      name: "license",
      choices: ["Apache 2.0", "Boost 1.0", "BSD 3.0", "BSD 2.0", "None"],
    },
    {
      type: "input",
      name: "installing",
      message: "What command should be run to install dependancies?",
         default () {
           return 'npm i';
         }
    },
    {
      type: "input",
      name: "testing",
      message: "What command should be run to run tests?",
         default() {
         return 'npm tests';
         }
    },
    {
      type: "input",
      name: "using",
      message: "What does the user need to know about using the repo?",
    },
    {
      type: "input",
      name: "contributing",
      message:
        "What does the user need to know about contributing to the repo?",
    },
    {
      type: "input",
      name: "website",
      message:
        "What the url address to your deployed application?",
    },
    {
      type: "input",
      name: "screenshot",
      message:
        "Please add your screenshot to the 'assets/images/' folder and provide the filename (incl file extension):",
    },
  ])
  .then(data => {
   const markdownPageContent = generateMarkdown(data);
   // TODO: Create a function to write README file
   fs.writeFile("README.md", markdownPageContent, (err) =>
     err ? console.log(err) : console.log("Sucessfully created README.nd")
  )});
   
//answers

//    michelledwoods1

//    email@fakeEmail.com

//    Proforma README

//    An application to dynamically create a professional README.md file using the same format for each and every project.

//    Your responses to the pre-poluted questions will be used to dynamically create your High-Quality README file, allowing you more time to work on your project!

//    Make a pull request

//    https://www.npmjs.com/


//    screenshot.png
