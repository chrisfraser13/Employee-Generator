const Employee = require("../lib/Employee")
const Engineer = require("../lib/Engineer")

function mainRender(team){
    function engineerCard(data){
        return `
        <div>
            <h2>${data.getName()}</h2><h3>${data.getRole()}</h3>
             <ul><li>${data.getId()}</li>
             <li>${data.getEmail()}</li>
            <li>${data.getGithub()}</li></ul>
        </div>
        `   
    }
    function managerCard(data){
        return `
        <div>
            <h2>${data.getName()}</h2><h3>${data.getRole()}</h3>
            <ul><li>${data.getId()}</li>
            <li>${data.getEmail()}</li>
            <li>${data.getOfficenumber()}</li></ul>
         </div>
        `
        
    }
    function internCard(data){
        return `
        <div>
        <h2>${data.getName()}</h2><h3>${data.getRole()}</h3>
            <ul><li>${data.getId()}</li>
            <li>${data.getEmail()}</li>
             <li>${data.getSchool()}</li></ul>
         </div>
        `     
    }
    const html = []
    html.push(team.filter(employee => employee.getRole()==="Manager")
    .map(manager => managerCard(manager)))
    html.push(team.filter(employee => employee.getRole()==="Engineer")
    .map(engineer => engineerCard(engineer)).join(""))
    html.push(team.filter(employee => employee.getRole()==="Intern")
    .map(intern => internCard(intern)).join(""))
    return html.join("")
}
module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>My Team</title>
</head>
<body>
    <div>
        ${mainRender(team)}
    </div>
</body>
</html>
    `
}