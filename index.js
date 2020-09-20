const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
inquirer
  .prompt([
    {
      type: "input",
      message: "Welcome to ReadMe generator application. \nWhat is the title of your project?",
      name: "title"
    },
    {
      type: "input",
      message: "Write a discription of your project.",
      name: "description"
    },
    {
      type: "input",
      message: "Descripe the installation instructions of your project.",
      name: "installation"
    },
    {
      type: "input",
      message: "Explaine the usage of the application.",
      name: "usage"
    },
    {
        type: "list",
        message: "Please select a license",
        name: "license",
        choices: [
            "NIT",
            "ISC",
            "Apache",
            "BSD"
        ]
      },
    {
      type: "input",
      message: "Who contributed to the application?",
      name: "contribution"
    },
    {
      type: "input",
        message: "Descripe the test instructions.",
        name: "test"
    },
      {
        type: "input",
        message: "Please provide your GitHub name.",
        name: "github"
      },
      {
        type: "input",
        message: "Please provide your email.",
        name: "email"
      }
  ])

// function to write README file
.then(function(response) {

  let readMeToWrite =`
## Title

  ${response.title}

## Description

  ${response.description}

## Table of Contants

* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Licens](#License)
* [Contributing](Contribution)
* [Test](#Test)
* [Questions](#Questions)

## Installation

  ${response.installation}

## Usage

  ${response.usage}

## License

  ${response.license}
[License Badge](http://img.shields.io/badge/License-${response.license}-blue.svg)

For information about the License visit this link: [License](https://opensource.org/licenses/${response.license})

## Contribution

  ${response.contribution}

## Test

  ${response.test}

## Questions
In case of any additional questions please visit my GitHub link: [GitHublink](https://github.com/${response.github}) 
Or don't hesitate to contact me via email: ${response.email}
    `
    // function to initialize program
        async function generatMarkdown() {
          try {
            await writeFileAsync("readme.md", readMeToWrite);
            console.log(`Success, your ReadMe has been created`)      
          } catch(err) {
            console.log(err)
          }
        }
        generatMarkdown();
    });



