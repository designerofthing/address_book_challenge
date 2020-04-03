describe ('user can delete a contact', () => {
    before(() => {
        cy.visit('http://localhost:3001')
    })

    it('by clicking the "Find Contact" button', () => {
        cy.get('#find-contact').click()
        })

})