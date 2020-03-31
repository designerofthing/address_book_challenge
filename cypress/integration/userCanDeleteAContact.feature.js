describe ('user can delete a contact', () => {
    before(() => {
        cy.visit('http://localhost:3001')
    })

    it('by clicking the "Delete Contact" button', () => {
        cy.get('#delete-contact').click()
        })

})