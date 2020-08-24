const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const licenses = [
    {
      name: "MIT License",
      url: "[MIT License](https://opensource.org/licenses/MIT)",
      badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    },
    {
      name: "GNU Lesser General Public License v3.0",
      url: "[GNU Lesser General Public License v3.0](https://www.gnu.org/licenses/lgpl-3.0)",
      badge: "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
    },
    {
      name: "Mozilla Public License 2.0",
      url: "[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)",
      badge: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    },
    {
      name: "GNU Affero General Public License v3.0",
      url: "[GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0)",
      badge: "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
    },
    {
      name: "The Unlicense",
      url: "[The Unlicense](http://unlicense.org/)",
      badge: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
    },
    {
      name: "Apache License 2.0",
      url: "[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)",
      badge: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    },
    {
      name: "GNU General Public License v3.0",
      url: "[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)",
      badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }
];

const licensesArry = []
licenses.forEach(value => {
    licensesArry.push(value.name);
});

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: (value) => {
            if (value === "" || value === null) {
                return "Title can not be empty."
            } else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?",
        validate: (value) => {
            if (value === "" || value === null) {
                return "The description cannot be empty!"
            } else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "How can users install your project?",
        validate: (value) => {
            if (value === "" || value === null) {
                return "Installation instructions cannot be empty!"
            } else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "What is the projects usage?",
        validate: (value) => {
            if (value === "" || value === null) {
                return "Project usage cannot be empty!"
            } else {
                return true;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "What type of license does your project use?",
        choices: licensesArry
    },
    {
        type: "input",
        name: "contributing",
        message: "How can users contribute to the project?",
        validate: (value) => {
            if (value === "" || value === null) {
                return "Contribution instructions cannot be empty!"
            } else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "tests",
        message: "How can users test the project?",
        validate: (value) => {
            if (value === "" || value === null) {
                return "Testing instructions cannot be empty!"
            } else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: (value) => {
            if (value === "" || value === null) {
                return "Email cannot be empty!"
            } else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        validate: (value) => {
            if (value === "" || value === null) {
                return "GitHub username cannot be empty!"
            } else {
                return true;
            }
        }
    }
];

let userLicense = {
    name: "",
    url: "",
    badge: ""
};

// function to write README file
function writeToFile(genReadMe, data) {
    fs.writeFile(genReadMe, data, (err) => {
        console.log(err);
    });
    console.log("README.md successfully made!");
};

// function to initialize program
function init() {

    inquirer.prompt(questions).then(answers => {

        licenses.forEach(license => {
            if (answers.license === license.name) {
                userLicense.name = license.name;
                userLicense.url = license.url;
                userLicense.badge = license.badge;
            }
        });

        const generatedReadMe = generateMarkdown(answers, userLicense);

        try {
            writeToFile("./new-readme/README.md", generatedReadMe);
        }
        catch (err) {
            console.log(err);
        }
    });

}

// function call to initialize program
init();
