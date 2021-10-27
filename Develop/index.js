// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "title",
    validate: (value) => { if (value) { return true } else { return 'Title must be filled' } },
}, {
    type: "input",
    message: "Give a description of your project?",
    name: "description",
    validate: (value) => { if (value) { return true } else { return 'Description must be filled' } },
},
{
    type: "input",
    message: "What does the user need to install to run this app (ie...dependencies)?",
    name: "installation",
    validate: (value) => { if (value) { return true } else { return 'Installation instructions must be filled' } },
}, {
    type: "input",
    message: "How is the app used?",
    name: "usage",
    validate: (value) => { if (value) { return true } else { return 'Usage must be filled' } },
}, {
    type: 'list',
    message: 'Which Licenses did you use?',
    name: 'license',
    choices: ['MIT', 'GPL'],
    validate: (value) => { if (value) { return true } else { return 'Pick a license' } },
}, {
    type: "input",
    message: "Who contributed to this project?",
    name: "contributors",
    validate: (value) => { if (value) { return true } else { return 'Contributions must be filled' } },
},
{
    type: 'input',
    message: 'Did you write any tests for this application, if so, how do I run them?',
    name: 'test',
    validate: (value) => { if (value) { return true } else { return 'Please state wether you wrote tests' } },
}, {
    type: "input",
    message: "What is your email address?",
    name: "email",
    validate: (value) => { if (value) { return true } else { return 'Email address must be filled' } },
}, {
    type: 'input',
    message: 'What is your Github username?',
    name: 'username',
    validate: (value) => { if (value) { return true } else { return 'Github username must be filled' } },
}
];

// TODO: Create a function to write README file
const writeToFile = (filename, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("SampleReadMe.md", generateMarkdown(data));
            console.log(data);
        })
}

// Function call to initialize app
init();
