// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  switch(license) {
    case 'MIT':
      badge = '![badge](https://img.shields.io/badge/License-MIT-yellow)\n';
      break;
    case 'ISC':
      badge = '![badge](https://img.shields.io/badge/License-ISC-blue)\n';
      break;
    case 'GPL v3':
      badge = '![badge](https://img.shields.io/badge/License-GPLv3-blue)\n';
      break;
    case 'Apache 2.0':
      badge = '![badge](https://img.shields.io/badge/License-Apache%202.0-blue)\n';
      break;
    case 'None':
      badge = '';
      break;      
    default:
      badge = '';
  }
  return badge;
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";
  switch(license) {
    case 'MIT':
      link = '[MIT](https://opensource.org/licenses/MIT)\n';
      break;
    case 'ISC':
      link = '[ISC](https://opensource.org/licenses/ISC)\n';
      break;
    case 'GPL v3':
      link = '[GPL v3](https://www.gnu.org/licenses/gpl-3.0)\n';
      break;
    case 'Apache 2.0':
      link = '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)\n';
      break;
    case 'None':
      link = '';
      break;
    default:
      link = '';
  }
  return link;  
}

// function that returns the table of content section of README
function renderTableofContent(license) {
  let tableContent = '';
  tableContent = `## Table of Content\n* [Installation](#installation)\n* [Usage](#usage)\n`;
  if (license !== 'None'){
    tableContent += `* [License](#license)\n`;
  }  
  tableContent += `* [Contributing](#contributing)\n* [Test](#test)\n* [Questions](#questions)\n`;
  return tableContent;
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licLink = renderLicenseLink(license);
  if (license !== 'None'){
    return `## License\n Licensed under the ` + licLink + ` license.\n`;
  } else {return ``;}
}

// function that returns the contribution section of README
function renderContributionSection(contribution) {
  if (contribution === 'Yes') {
    return `## Contributing \n The open source community is a great place to inspire and learn thanks to contributions, feel free to make yours!
    If you have a suggestion that would make this better, please fork the repo and create a pull request.\n`;
  } else {
    return `## Contributing \n Thank you for your interest, but this project is currently not available for contributions.\n`;
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  let content = '';
  
  content = `# ${data.title}\n`;  
  content += renderLicenseBadge(data.license);  
  content += `## Description\n ${data.description}\n`;
  content += renderTableofContent(data.license);
  content += `## Installation
  To install the necessary dependencies, run the following command:\n` +
    "```bash" + `\n${data.installCmd}\n` + "```\n";
  content += `## Usage\n ${data.usageDesc}\n`;    
  content += renderLicenseSection(data.license);
  content += renderContributionSection(data.contributionDesc);
  content += `## Test
  There are some test you can run. To do so, please run the following command:\n` +
    "```bash" + `\n${data.testCommand}\n` + "```\n";
  content += `## Questions
  You can see more of my work on [${data.gitHubUser}](https://github.com/${data.gitHubUser}).\n
  If you have any additional questions please don't hesitate to reach me on ${data.email}.  
  `;

  return content;
}

module.exports = generateMarkdown;
