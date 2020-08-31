import { writeFile } from "fs";
import pkg from 'inquirer';
import generateMarkdown from "./utils/generateMarkdown.js";
const { prompt } = pkg

//array of questions for user
const questions = [
    {
      type: "input",
      name: "appname",
      message: "please enter the name of this application"
    },{
        type: "input",
        name: "description",
        message: "please describe what this project does"
      },{
        type: "input",
        name: "installation",
        message: "how can one install this app?"
      },{
        type: "input",
        name: "usage",
        message: "once installed, how can one use this app?"
      },{
        type: "input",
        name: "contributors",
        message: "please enter the name(s) of the contributing creator(s)"
      },{
        type: "list",
        name: "license",
        message: "Select the License",
        choices: [
            "MIT",
            "APACHE 2.0",
            "ISC",
            "None"
        ]
      },{
        type: "input",
        name: "username",
        message: "please enter your github username"
      },{
        type: "input",
        name: "email",
        message: "please enter your github affiliated email"
      },
  ];

//write the readme file and write to the readme markdown

function writetoFile(fileName, data) {
    writeFile(fileName, data,err => {
        if (err) {
            throw err;
        }
    });
}


// function to initialize program
function init() {
    prompt(questions).then(answers => {
        const response = generateMarkdown(answers);
        writetoFile("./README.md", response);
    })

}

// function call to initialize program
init();
