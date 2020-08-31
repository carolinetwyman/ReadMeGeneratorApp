// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.appname}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Test](#test)
* [Questions](#questions)

## Description
${data.description}

## Installation Instructions
${data.installation}

## Usage Information
${data.usage}

## License
${data.license}

## Contributors
${data.contributors}

## Questions
Contact me:

Github: [${data.username}](https://github.com/carolinetwyman)
Email: [${data.email}](https://github.com/carolinetwyman)
`;
}

export default generateMarkdown;
