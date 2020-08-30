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
      name: "author",
      message: "please enter the name of the GitHub Author "
    },
    {
        type: "list",
        name: "License",
        message: "Select the License",
        choices: [
            "MIT",
            "APACHE 2.0",
            "ISC",
            "None"
        ]
      }
  ];

// function to write README file

// fs.writeFile('./readme2.txt', 'hello world', () => {
//     console.log('file was written');
// });

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
        //console.log(answers)
        //console.log(response)
        writetoFile("./README.md", response);
    })

}

// function call to initialize program
init();
