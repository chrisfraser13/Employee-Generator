const Intern = require("../lib/Intern");

test("can set school via constructor", () => {
    const name = "Chris"
    const e = new Intern("Chris", 1, "chris@gmail.com", name)
    expect(e.school).toBe(name)
})
test("getRole should return \"Intern\"", () => {
    const name = "Intern"
    const e = new Intern("Intern", 1, "chris@test.com", "school")
    expect(e.getRole()).toBe(name)
})
test("can get school user via getSchool", () => {
    const name = "Chris"
    const e = new Intern("Chris", 1, "chris@gmail.com", name)
    expect(e.getSchool()).toBe(name)
})