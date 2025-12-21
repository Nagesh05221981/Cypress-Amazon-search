describe("load amazon and search bose",()=>{
    it("",()=>{
        cy.visit("https://amazon.com")
        cy.get('body', { timeout: 10000 }).should('be.visible')
        //cy.wait("2000")
        cy.get('#twotabsearchtextbox').should('be.visible').type('Bose head phone{enter}')
        cy.url().should('include', 'Bose')
        // Wait for results container
        cy.get('.s-main-slot', { timeout: 15000 }).should('be.visible');

    // Assert at least one result has a title
        cy.get('.s-result-item').filter(':has(h2)').should('have.length.greaterThan', 0);

        // ✅ Validate that at least one result contains "Bose QuietComfort"
        const found = titles.some(title =>
          title.toLowerCase().includes('Bose quietcomfort')
        );
        expect(found).to.be.true;


    })

})
