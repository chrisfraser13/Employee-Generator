const Employee = require("./Employee")
class Manager extends Employee {
    constructor(name,id,email,Officenumber){
        super(name,id,email)
        this.Officenumber = Officenumber

    }
    getOfficenumber() {
        return this.Officenumber
    }
    
    getRole() {
        return "Manager"
    }
}
module.exports = Manager