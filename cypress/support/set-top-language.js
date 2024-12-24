Cypress.Commands.add('accessMainPageEN', function() {
    cy.get("a[id='js-link-box-en']")
      .should('be.visible')
      .click()
})

Cypress.Commands.add('accessMainPagePT', function() {
    cy.get("a[id='js-link-box-pt']")
      .should('be.visible')
      .click()
})

Cypress.Commands.add('accessMainPageRU', function() {
    cy.get("a[id='js-link-box-ru']")
      .should('be.visible')
      .click()
})

Cypress.Commands.add('accessMainPageJA', function() {
    cy.get("a[id='js-link-box-ja']")
      .should('be.visible')
      .click()
})

Cypress.Commands.add('accessMainPageDE', function() {
    cy.get("a[id='js-link-box-de']")
      .should('be.visible')
      .click()
})

Cypress.Commands.add('accessMainPageFR', function() {
    cy.get("a[id='js-link-box-fr']")
      .should('be.visible')
      .click()
})

Cypress.Commands.add('accessMainPageES', function() {
    cy.get("a[id='js-link-box-es']")
      .should('be.visible')
      .click()
})

Cypress.Commands.add('accessMainPageZH', function() {
    cy.get("a[id='js-link-box-zh']")
      .should('be.visible')
      .click()
})

Cypress.Commands.add('accessMainPageIT', function() {
    cy.get("a[id='js-link-box-it']")
      .should('be.visible')
      .click()
})

Cypress.Commands.add('accessMainPageFA', function() {
    cy.get("a[id='js-link-box-fa']")
      .should('be.visible')
      .click()
})