const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "userName",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "emailAddress",
  },
  {
    type: "input",
    message: "What is your Projects Name?",
    name: "projectName",
  },
  // {
  //   type: "input",
  //   message: "Please write a short description of your project?",
  //   name: "projectDesc",
  // },
  // {
  //   type: "list",
  //   message: "What kind of license should your project have?",
  //   choices: [
  //     "GNU AGPLv3",
  //     "GNU GPLv3",
  //     "GNU LGPLv3",
  //     "Mozilla Public License 2.0",
  //     "Apache License 2.0",
  //     "MIT License",
  //     "Boost Software License 1.0",
  //     "The Unlicense",
  //   ],
  //   name: "projectlicense",
  // },
  // {
  //   type: "input",
  //   message: "What command should be run to install dependencies?",
  //   name: "dependenciesCommandLine",
  // },
  // {
  //   type: "input",
  //   message: "What command should be run test?",
  //   name: "testCommandLine",
  // },
  // {
  //   type: "input",
  //   message: "What does the user need to know about using the repo?",
  //   name: "repoInfo",
  // },
  // {
  //   type: "input",
  //   message: "What does the user need to know about contributing to the repo?",
  //   name: "repoContribute",
  // },
];

// function to write README file
async function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// function to initialize program
async function init() {
  const result = await askQuestions();

  const markDown = await generateMarkdown.generateMText(result);
  writeToFile("./readme.markdown", markDown, "utf8");
}

const askQuestions = async () => {
  return inquirer.prompt(questions);
};

// function call to initialize program
init();
