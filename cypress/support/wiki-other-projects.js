  Cypress.Commands.add('accessOtherProjectCommons', function() {
    cy.get('div[class="other-project"] [data-jsl10n="commons.name"]').click()
    cy.origin('https://commons.wikimedia.org/wiki/Main_Page', () => {
        cy.get('div[class="mainpage-welcome-sitename"]').contains('Wikimedia Commons')
    })
  })

  Cypress.Commands.add('accessOtherProjectWikivoyage', function() {
    cy.get('div[class="other-project"] [data-jsl10n="wikivoyage.name"]').click()
    cy.origin('https://www.wikivoyage.org/', () => {
        cy.get('h1[class="central-textlogo-wrapper"]').contains('Wikivoyage')
    })
  })

  Cypress.Commands.add('accessOtherProjectWiktionary', function() {
    cy.get('div[class="other-project"] [data-jsl10n="wiktionary.name"]').click()
    cy.origin('https://www.wiktionary.org/', () => {
        cy.get('h1[class="central-textlogo-wrapper"]').contains('Wiktionary')
    })
  })

  Cypress.Commands.add('accessOtherProjectWikibooks', function() {
    cy.get('div[class="other-project"] [data-jsl10n="wikibooks.name"]').click()
    cy.origin('https://www.wikibooks.org/', () => {
        cy.get('h1[class="central-textlogo-wrapper"]').contains('Wikibooks')
    })
  })

  Cypress.Commands.add('accessOtherProjectWikinews', function() {
    cy.get('div[class="other-project"] [data-jsl10n="wikinews.name"]').click()
    cy.origin('https://www.wikinews.org/', () => {
        cy.get('h1[class="central-textlogo-wrapper"]').contains('Wikinews')
    })
  })

  Cypress.Commands.add('accessOtherProjectWikidata', function() {
    cy.get('div[class="other-project"] [data-jsl10n="wikidata.name"]').click()
    cy.origin('https://www.wikidata.org/', () => {
        cy.get('p[class="wd-mp-headerbox-headline"]').contains('Welcome to Wikidata')
    })
  })

  Cypress.Commands.add('accessOtherProjectWikiversity', function() {
    cy.get('div[class="other-project"] [data-jsl10n="wikiversity.name"]').click()
    cy.origin('https://www.wikiversity.org/', () => {
        cy.get('h1[class="central-textlogo-wrapper"]').contains('Wikiversity')
    })
  })

  Cypress.Commands.add('accessOtherProjectWikiquote', function() {
    cy.get('div[class="other-project"] [data-jsl10n="wikiquote.name"]').click()
    cy.origin('https://www.wikiquote.org/', () => {
        cy.get('h1[class="central-textlogo-wrapper"]').contains('Wikiquote')
    })
  })

  Cypress.Commands.add('accessOtherProjectMediawiki', function() {
    cy.get('div[class="other-project"] [data-jsl10n="mediawiki.name"]').click()
    cy.origin('https://www.mediawiki.org/wiki/MediaWiki', () => {
        cy.get('h1[id="firstHeading"]').contains('MediaWiki')
    })
  })

  Cypress.Commands.add('accessOtherProjectWikisource', function() {
    cy.get('div[class="other-project"] [data-jsl10n="wikisource.name"]').click()
    cy.origin('https://wikisource.org/wiki/Main_Page', () => {
        cy.get('div[class="central-textlogo"]').should('be.visible')
    })
  })

  Cypress.Commands.add('accessOtherProjectWikispecies', function() {
    cy.get('div[class="other-project"] [data-jsl10n="wikispecies.name"]').click()
    cy.origin('https://species.wikimedia.org/wiki/Main_Page', () => {
        cy.get('div[class="main-welcome"]').contains('Welcome to Wikispecies')
    })
  })

  Cypress.Commands.add('accessOtherProjectWikifunctions', function() {
    cy.get('div[class="other-project"] [data-jsl10n="wikifunctions.name"]').click()
    cy.origin('https://www.wikifunctions.org/wiki/Wikifunctions:Main_Page', () => {
        cy.get('p[class="main-title"]').should('be.visible')
    })
  })

  Cypress.Commands.add('accessOtherProjectMetawiki', function() {
    cy.get('div[class="other-project"] [data-jsl10n="metawiki.name"]').click()
    cy.origin('https://meta.wikimedia.org/wiki/Main_Page', () => {
        cy.get('h1[id="Meta-Wiki"]').contains('Meta-Wiki')
    })
  })