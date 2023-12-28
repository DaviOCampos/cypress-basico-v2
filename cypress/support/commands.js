Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    const longText = 'Teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste'
    cy.get('#firstName').type('Walmyr')
    cy.get('#lastName').type('Filho')
    cy.get('#email').type('walmyr@exemplo.com')
    cy.get('#open-text-area').type(longText, { delay: 0 })
    cy.contains('button','Enviar').click()

})