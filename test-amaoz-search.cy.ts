describe("load amazon and search bose",()=>{
    it("",()=>{
        cy.visit("https://amazon.com")
        cy.get('body', { timeout: 10000 }).should('be.visible')
        

    })

})