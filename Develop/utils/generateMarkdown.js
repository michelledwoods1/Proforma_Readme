// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
//     switch (license) {
//       case 'Apache 2.0':
//         ![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg);
//         break;
//       case 'Boost 1.0':
//         ![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)
//         break;
//       case 'BSD 3.0':
//         ![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)
//         break;
//       case 'BSD 2.0':
//         ![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)
//         break;
//       default:
//         return (" ");
    };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
//   switch (license) {
//     case 'Apache 2.0':
//       ![License](https://opensource.org/licenses/Apache-2.0);
//       break;
//     case 'Boost 1.0':
//       ![License](https://www.boost.org/LICENSE_1_0.txt);
//       break;
//     case 'BSD 3.0':
//       ![License](https://opensource.org/licenses/BSD-3-Clause);
//       break;
//     case 'BSD 2.0':
//       ![License](https://opensource.org/licenses/BSD-2-Clause);
//       break;
//     default:
//       return (" ")
  };

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description
  ${data.description}

  ## Table of Contents
  -[Installation](#installation)

  -[Usage](#usage)
  
  -[License](#license)
  
  -[Contributing](#contributing)
  
  -[Test](#tests)
  
  -[Questions](##questions)

  ## Installation
  To install the necessary dependencies, run the following command:
  ${data.installing}

  ## Usage
  To install, please run: ${data.using}

  ## Contributing
  To contribute, please:
    ${data.contributing}
  
  ## Tests
  To run tests, run the following command:
    ${data.testing}
  
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}.  You can find more of my work at ${data.github}.
  
  ## License
  This project is licensed under the ${data.license}
#
[Click here to view ${data.title} Website](${data.website})
#
![Screenshot of ${data.title} url](assets/images/${data.screenshot})
;
`}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown,
};
  