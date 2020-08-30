// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Test](#test)
* [Questions](#questions)

##Description
${data.Description}

## Installation Instructions
${data.Installation}

## Usage Information
${data.Usage}

## License
${data.License}

## Contributors
${data.Contributors}

## test
${data.Test}

## Questions
Contact me:

Github: [${data.Username}](https://github.com/carolinetwyman)
Email: [${data.Email}](https://github.com/carolinetwyman)
`;
}

export default generateMarkdown;
