  Cypress.Commands.add('verifyExternalLinkGooglePlay', function() {
    cy.get('a[rel="noreferrer"][href="https://play.google.com/store/apps/details?id=org.wikipedia&referrer=utm_source%3Dportal%26utm_medium%3Dbutton%26anid%3Dadmob"]')
      .should('have.attr', 'target', '_blank')
  })

  Cypress.Commands.add('accessExternalLinkGooglePlay', function() {
    cy.get('a[rel="noreferrer"][href="https://play.google.com/store/apps/details?id=org.wikipedia&referrer=utm_source%3Dportal%26utm_medium%3Dbutton%26anid%3Dadmob"]')
      .invoke('removeAttr', 'target')
      .click()
      
      cy.origin('https://play.google.com', () => {
        cy.get('span[aria-hidden="true"]').contains('google_logo Play')
      })
  })

  Cypress.Commands.add('verifyExternalLinkAppleStore', function() {
    cy.get('a[rel="noreferrer"][href="https://itunes.apple.com/app/apple-store/id324715238?pt=208305&ct=portal&mt=8"]')
      .should('have.attr', 'target', '_blank')
  })

  Cypress.Commands.add('accessExternalLinkAppleStore', function() {
    cy.get('a[rel="noreferrer"][href="https://itunes.apple.com/app/apple-store/id324715238?pt=208305&ct=portal&mt=8"]')
      .invoke('removeAttr', 'target')
      .click()
      
      cy.origin('https://apps.apple.com/us/app/wikipedia/id324715238', () => {
        cy.get('a[aria-label="Apple"]').should('be.visible')
      })
  })

  Cypress.Commands.add('verifyExternalLinkDonate', function() {
    cy.get('a[href="https://donate.wikimedia.org/?wmf_medium=portal&wmf_campaign=portalFooter&wmf_source=portalFooter"]')
      .should('have.attr', 'target', '_blank')
  })

  Cypress.Commands.add('accessExternalLinkDonate', function() {
    cy.get('a[href="https://donate.wikimedia.org/?wmf_medium=portal&wmf_campaign=portalFooter&wmf_source=portalFooter"]')
      .invoke('removeAttr', 'target')
      .click()
      
      cy.origin('https://donate.wikimedia.org/', () => {
        cy.get('a[class="mw-wiki-logo"]').should('be.visible')
      })    
  })