const Employee = require("../lib/Employee");
test("instantate employee instant", () => {
    const e = new Employee()
    expect(typeof(e)).toBe("object")
})
test("can set name via constructor", () => {
    const name = "Chris"
    const e = new Employee(name)
    expect(e.name).toBe(name)
})
test("can set id via constructor", () => {
    const id = 100
    const e = new Employee("foo", id)
    expect(e.id).toBe(id)
})
test("can set email via constructor", () => {
    const email = "chris@test.com"
    const e = new Employee("foo", 1, email)
    expect(e.email).toBe(email)
})
test("can get name via getName", () => {
    const name = "Chris"
    const e = new Employee(name)
    expect(e.getName()).toBe(name)
})
test("can get id via getId", () => {
    const id = 100
    const e = new Employee("foo", id)
    expect(e.getId()).toBe(id)
})
test("can get email via getEmail", () => {
    const email = "chris@test.com"
    const e = new Employee("foo", 1, email)
    expect(e.getEmail()).toBe(email)
})
test("getRole should return \"Employee\"", () => {
    const name = "Employee"
    const e = new Employee("foo", 1, "chris@test.com")
    expect(e.getRole()).toBe(name)
})
