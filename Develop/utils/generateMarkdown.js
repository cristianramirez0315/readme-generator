// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let myLicence;
  if (license === 'MIT') {
    myLicence = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license === 'GPL') {
    myLicence = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    myLicence = "n/a"
  }
  return myLicence;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
# ${renderLicenseBadge(data.license)}
https://github.com/${data.username}/${data.title}
# Description
${data.description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)
# Installation
Install these to run the application: ${data.installation}
# Usage
In order to use this app, ${data.usage}
# License
This project is licensed under the ${data.license} license. 
# Contributors
contributors: ${data.contributors}
# Tests
The following is needed to run the test: ${data.test}
# Questions
If you have any questions about the repo, open an issue or contact ${data.username} directly at : ${data.email}.
`
}

module.exports = generateMarkdown;
