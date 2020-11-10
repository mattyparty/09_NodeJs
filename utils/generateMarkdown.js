// function to generate markdown for README

async function generateMText(result) {
  let readMeText = `# Project Name: ${result.projectName}`;
  let readMeTextAdd = `
# Project Description

${result.projectDesc}

# Table of Contents

 * [Installation](#installation)

 * [Usage](#usage)

 * [License](#license)
 
 * [Contributing](#contributing)

 * [Tests](#tests)

 * [Questions](#questions)

# Installation 

To install nessary dependencies, run the following command:

${result.dependenciesCommandLine}

# Usage

${result.repoInfo}

# License

This Product is licensed under following license('s) 

${result.projectlicense}

# Contributing

${result.repoContribute}

# Tests

${result.testCommandLine}

# Questions

If you have any questions about the repo, open and issue or contact me directly at ${result.emailAddress}.

You can find more of my work at [${result.userName}](https://github.com/${result.userName}/).`;

  readMeText += readMeTextAdd;
  return readMeText;
}
module.exports = { generateMText };
