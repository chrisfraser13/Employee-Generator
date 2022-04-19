const Engineer = require("../lib/Engineer"); 

test("can set github via constructor", () => {
    const name = "Chris"
    const e = new Engineer("Chris", 1, "chris@gmail.com", name)
    expect(e.name).toBe(name)
})
test("getRole should return \"Engineer\"", () => {
    const name = "Engineer"
    const e = new Engineer("Engineer", 1, "chris@test.com", "github user")
    expect(e.getRole()).toBe(name)
})
test("can get github user via getGithub", () => {
    const name = "Chris"
    const e = new Engineer("Chris", 1, "chris@gmail.com", name)
    expect(e.getGithub()).toBe(name)
})
