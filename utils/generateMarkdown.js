// function to generate markdown for README
function generateMarkdown(data, userLicense) {
  return `# ${data.title} 
  [![GitHub followers](https://img.shields.io/github/followers/${data.username}.svg?style=social&label=Follow&maxAge=2592000)](https://github.com/${data.username}?tab=followers) ${userLicense.badge}

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  This aplication is made with the ${userLicense.url}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  For any questions you might have, you can email me at ${data.email}. You can also check out my [GitHub Profile](https://github.com/${data.username}).

`;
}

module.exports = generateMarkdown;
