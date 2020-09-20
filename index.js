const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
inquirer
  .prompt([
    {
        type: "input",
        message: "Please select a license",
        choices: [
            "NIT",
            "ISC",
            "Apache",
            "BSD"
        ],
        name: "license"
      },
    {
      type: "input",
      message: "What is the title of your project?",
      name: "Title"
    },
    {
      type: "input",
      message: "Write a discription of your project?",
      name: "description"
    },
    {
      type: "input",
      message: "Mention the installation instructions of your project.",
      name: "Installation"
    },
    {
      type: "input",
      message: "Explaine how the usage of the application.",
      name: "usage"
    },
    {
      type: "input",
      message: "Who contributed to the application?",
      name: "contribution"
    }
    {
        type: "input",
        message: "Descripe the test instructions.",
        name: "test"
      }
      {
        type: "input",
        message: "Please provide your GitHub profile URL.",
        name: "github"
      }
      {
        type: "input",
        message: "Please provide your email.",
        name: "email"
      }
  ])

// function to write README file
function generateMarkdown(answers) {
    return `
    # ${answers.title}
    
    `
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
