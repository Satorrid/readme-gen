class Markdown{

    static licenseBadge(license){
        const badge = {
            mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            eclipse: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'

        }
        return badge[license]
    }

    static renderLicenseLink(license){
        const licenseLinks = {
            mit: '(https://opensource.org/licenses/MIT)',
            apache: '(https://opensource.org/licenses/Apache-2.0)',
            eclipse: '(https://opensource.org/licenses/EPL-1.0)'
        }
        return licenseLinks[license]
    }

    static generateReadme(answers){
        return`
# ${answers.title}

${this.licenseBadge(answers.license)}

## Table of Content
- [Description](#Description)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Installation](#Installation)
- [Questions](#Questions)
- [License](#License)

## Description
${answers.description}

## Usage
${answers.usage}

## Installation
${answers.installation}

## Contributing
${answers.contribution}

#Personal Information
${answers.email}
${answers.username}

## License
${this.renderLicenseLink(answers.license)}

`
    }
}

module.exports = Markdown