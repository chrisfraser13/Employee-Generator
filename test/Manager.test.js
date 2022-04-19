const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("can set office number via constructor", () => {
    const name = 100
    const e = new Manager("Chris", 1, "chris@gmail.com", name)
    expect(e.Officenumber).toBe(name)
})
test("getRole should return \"Manager\"", () => {
    const name = "Manager"
    const e = new Manager("Manager", 1, "chris@test.com", 100)
    expect(e.getRole()).toBe(name)
})
test("can get Office number user via getOfficenumber", () => {
    const name = 100
    const e = new Manager("Chris", 1, "chris@gmail.com", name)
    expect(e.getOfficenumber()).toBe(name)
})