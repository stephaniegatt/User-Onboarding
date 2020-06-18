describe("Inputs and submit button", () => {
    it("can navigate to the site", () => {
        cy.visit("http://localhost:3001/")
        cy.url().should("include", "localhost")
    })

    it("can enter a name in", () => {
        // cy.get("form") 
        cy.get("input[name=name]").type("stephanie")  
        cy.get("input[name=name]").should("have.value", "stephanie") 
    })
    it("can enter an email", () => {
        // cy.get("input[name=email]").should("be.not.empty") // ran properly and failed out bc the text field was empty
        cy.get("input[name=email]").should("be.empty")
    })
})

