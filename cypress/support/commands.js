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

Cypress.Commands.add('expandAllLanguages', function() {
  cy.get('div[class="lang-list-container"]').should('not.be.visible')
  cy.get('button[id="js-lang-list-button"]')
    .click()
  cy.get('div[class="lang-list-container"]').should('be.visible')
})

Cypress.Commands.add('hideAllLanguages', function() {
  cy.get('div[class="lang-list-container"]').should('not.be.visible')
  cy.get('button[id="js-lang-list-button"]')
    .click()
  cy.get('div[class="lang-list-container"]').should('be.visible')
  cy.get('button[id="js-lang-list-button"]')
    .click()
  cy.get('div[class="lang-list-container"]').should('not.be.visible')
})

Cypress.Commands.add('languageListPage', function() {
  cy.get('div[class="lang-list-container"]').should('not.be.visible')
  cy.get('button[id="js-lang-list-button"]')
    .click()
  cy.get('div[class="lang-list-container"]').should('be.visible')
  cy.contains('Other languages').click()
  cy.origin('https://meta.wikimedia.org/wiki/List_of_Wikipedias', () => {
    cy.url().should('be.equal', 'https://meta.wikimedia.org/wiki/List_of_Wikipedias')
    cy.get('h1[id="firstHeading"]').contains('List of Wikipedias')
  })
})

import compareSnapshotCommand from 'cypress-visual-regression/dist/command';

compareSnapshotCommand();