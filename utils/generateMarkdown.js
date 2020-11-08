// function to generate markdown for README

async function generateMText(result) {
  const readMeText = `This is the result : ${result.userName}
  ${result.emailAddress}
    ${result.projectDesc}
      ${result.projectlicense}
        ${result.dependenciesCommandLine}
          ${result.testCommandLine}
            ${result.repoInfo}
              ${result.repoContribute}`;

  return readMeText;
}
module.exports = { generateMText };
