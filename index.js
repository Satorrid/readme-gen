const inquirer = require('inquirer');
const markdown = require('./util/generateMarkdown')
const fs = require("fs");

//console.log('this is running')

//Questions
const questions = [
    {
        type: "input",
        message: "Give your project a title.",
        name: "title"
    },{
        type: "input",
        message: "Give your project a description",
        name: "description"
    },{
        type: "input",
        message: "Give installation instructions for your project",
        name: "installation"
    },{
        type: "input",
        message: "Enter usage information",
        name: "usage"
    },{
        type: "input",
        message: "Enter contribution guidelines",
        name: "contribution"
    },{
        type: "input",
        message: "Enter any test instructions",
        name: "tests"
    },{
        type: "list",
        name: "license",
        message: "Select which license you would like to use.",
        choices: ['MIT', 'Eclipse', 'Apache 2.0'],
        filter(val) {
            return val.toLowerCase();
        }
    },{
        type: "input",
        message: "Please enter your GitHub username",
        name: "username"
    },{
        type: "input",
        message: "Please enter you email address.",
        name: "email"
    }
];

//run questions
async function init() {
    return inquirer.prompt(questions)
    .then((answers)=>{
       const mark = markdown.generateReadme(answers)
        fs.writeFile('README.md', mark, function (err) {
            if(err){
                console.log('Error, could not save file')
            } else {
                console.log('Successfully generated a new readme file')
            }
        })
        //return answers
    })
    .catch((error)=>{
        console.log(error)
    })
}
init();