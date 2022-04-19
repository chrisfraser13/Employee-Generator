const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");
const mainRender = require("./htmlRender/mainRender");
const teamMembers = []
const idArr = []
const OUTPUT_DIR = path.resolve(__dirname,"output")
const OUTPUT_PATH = path.join(OUTPUT_DIR,"team.html")

function mainApp() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the manager's name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is the manager's id?",
            },
            {
                type: "input",
                name: "email",
                message: "What is the manager's email?",
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the manager's office number?",
            }
        ]) .then(answers => {
            var {name,id,email,officeNumber} = answers;
            var manager = new Manager(name,id,email,officeNumber);

            teamMembers.push(manager);
            createTeam();

        })
    }
    function createTeam() {

        inquirer
            .prompt([
                {
                    type: "list",
                    name: "command",
                    message: "Would you like to add mroe team members?",
                    choices:["Create New Engineer", "Create New Intern", "Create Team"]
                }
            ]) .then(answers => {
                statement = answers.command;
                switch(statement){
                    case "Create New Engineer":
                        getEngineer();
                        break;
                    case "Create New Intern":
                        getIntern();
                        break;
                    case "Create Team":
                        buildTeam();
                        break;
                }
            })
    }
    function getEngineer() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the engineer's name?"
                },
                {
                    type: "input",
                    name: "id",
                    message: "What is the engineer's id?",
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the engineer's email?",
                },
                {
                    type: "input",
                    name: "github",
                    message: "What is the engineer's Github?",
                }
            ]) .then(answers => {
                var {name,id,email,github} = answers;
                var engineer = new Engineer(name,id,email,github);
                teamMembers.push(engineer);
                createTeam();
            })
    }
    function getIntern() {
        inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the intern's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the intern's id?",
            },
            {
                type: "input",
                name: "email",
                message: "What is the intern's email?",
            },
            {
                type: "input",
                name: "school",
                message: "What school does the intern attend?",
            }
        ]) .then(answers => {
            var {name,id,email,school} = answers;
            var intern = new Intern(name,id,email,school);
            teamMembers.push(intern);
            createTeam();
        })
    }


function buildTeam() {
    fs.writeFileSync(OUTPUT_PATH, mainRender(teamMembers),"utf-8")
}
mainApp()