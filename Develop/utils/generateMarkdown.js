// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
//   switch (license) {
//     case 'Apache 2.0':
//       ![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
//       break;
//     case 'Boost 1.0':
//       ![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)
//       break;
//     case 'BSD 3.0':
//       ![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)
//       break;
//     case 'BSD 2.0':
//       ![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)
//       break;
//     default:
//       return (" ");
//   }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // switch (license) {
  //   case 'Apache 2.0':
  //     ![License](https://opensource.org/licenses/Apache-2.0);
  //     break;
  //   case 'Boost 1.0':
  //     ![License](https://www.boost.org/LICENSE_1_0.txt);
  //     break;
  //   case 'BSD 3.0':
  //     ![License](https://opensource.org/licenses/BSD-3-Clause);
  //     break;
  //   case 'BSD 2.0':
  //     ![License](https://opensource.org/licenses/BSD-2-Clause);
  //     break;
  //   default:
  //     return: (" ");
  // };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${description}

  ## Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)
  -[Contributing](#contributing)
  -[Test](#tests)
  -[Questions](#questions)

  ## Installation
  ${data.instal}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  ${data.email}
  
  ## License
  ${data.license}
`;
};

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown,
};
