Cypress.Commands.add('searchContentPT', function() {
    const contentText = 'Brasil'
    
    cy.get("input[id='searchInput']")
      .should('be.visible')
      .type(contentText)
      .should('have.value', contentText)
    
    cy.get('select[id="searchLanguage"]').select('Português')
    .should('have.value', 'pt')

    cy.get('button[type="submit"]').click()

})