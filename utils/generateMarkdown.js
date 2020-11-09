// function to generate markdown for README

async function generateMText(result) {
  let readMeText = `# Project Name:${result.projectName}`;
  let readMeTextAdd = `
  
## Test read me text add

## Table of Contents

## Another Thing`;

  readMeText += readMeTextAdd;
  return readMeText;
}
module.exports = { generateMText };
// ${result.userName}
//   ${result.emailAddress}

//${result.projectDesc}
// ${result.projectlicense}
//         ${result.dependenciesCommandLine}
//           ${result.testCommandLine}
//             ${result.repoInfo}
//               ${result.repoContribute}
