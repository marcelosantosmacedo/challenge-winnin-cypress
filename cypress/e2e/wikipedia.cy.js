/// <reference types="Cypress" />

describe('Test Suite - Wikipedia', { tags: '@regression' }, function() {

  beforeEach(() => {
    cy.visit('https://www.wikipedia.org/')
  })

  describe('Elements from Home Page - Top 10 Languages', function() {
    it('Top languages - English must be visible and clickable', { tags: '@smoke' }, function() {
      cy.accessMainPageEN()
      cy.contains('Welcome to Wikipedia')
    })

    it('Top languages - Portuguese must be visible and clickable', function() {
      cy.accessMainPagePT()
      cy.contains('Boas-vindas à Wikipédia')
    })

    it('Top languages - Russian must be visible and clickable', function() {
      cy.accessMainPageRU()
      cy.contains('Добро пожаловать в Википедию')
    })

    it('Top languages - Japan must be visible and clickable', function() {
      cy.accessMainPageJA()
      cy.contains('ウィキペディアへようこそ')
    })

    it('Top languages - Deutsch must be visible and clickable', function() {
      cy.accessMainPageDE()
      cy.contains('Willkommen bei Wikipedia')
    })

    it('Top languages - Français must be visible and clickable', function() {
      cy.accessMainPageFR()
      cy.contains('Bienvenue sur Wikipédia')
    })

    it('Top languages - Español must be visible and clickable', function() {
      cy.accessMainPageES()
      cy.contains('Bienvenidos a Wikipedia')
    })

    it('Top languages - Chinese must be visible and clickable', function() {
      cy.accessMainPageZH()
      cy.contains('维基百科')
    })

    it('Top languages - Italian must be visible and clickable', function() {
      cy.accessMainPageIT()
      cy.contains('Benvenuti su Wikipedia')
    })

    it('Top languages - Persian must be visible and clickable', function() {
      cy.accessMainPageFA()
      cy.contains('کنند')
    })

  })

  describe('Search functionality', function() {
    it('Search - Brasil content in portuguese Language', { tags: '@smoke' }, function() {
      cy.searchContentPT()
      cy.url().should('be.equal', 'https://pt.wikipedia.org/wiki/Brasil')
      cy.get('h1[id="firstHeading"]').contains('Brasil')
      cy.get('img[alt="Bandeira do Brasil"]').should('be.visible')
    })

  })

  describe('Elements from Home Page - All languages ', function() {
    it('All languages - Expand options', function() {
      cy.expandAllLanguages()
    })

    it('All languages - Hide options', function() {
      cy.hideAllLanguages()
    })

    it('All languages - Access the language list page', { tags: '@smoke' }, function() {
      cy.languageListPage()
    })

  })

  describe('Elements from Home Page - Footer Options', function() {
    it('Footer Options - Other Project - Commons', { tags: '@smoke' }, function() {
      cy.accessOtherProjectCommons()
    })

    it('Footer Options - Other Project - Wikivoyage', function() {
      cy.accessOtherProjectWikivoyage()
    })

    it('Footer Options - Other Project - Wiktionary', function() {
      cy.accessOtherProjectWiktionary()
    })

    it('Footer Options - Other Project - Wikibooks', function() {
      cy.accessOtherProjectWikibooks()
    })

    it('Footer Options - Other Project - Wikinews', function() {
      cy.accessOtherProjectWikinews()
    })

    it('Footer Options - Other Project - Wikidata', function() {
      cy.accessOtherProjectWikidata()
    })

    it('Footer Options - Other Project - Wikiversity', function() {
      cy.accessOtherProjectWikiversity()
    })

    it('Footer Options - Other Project - Wikiquote', function() {
      cy.accessOtherProjectWikiquote()
    })

    it('Footer Options - Other Project - MediaWiki', function() {
      cy.accessOtherProjectMediawiki()
    })

    it('Footer Options - Other Project - Wikisource', function() {
      cy.accessOtherProjectWikisource()
    })

    it('Footer Options - Other Project - Wikispecies', function() {
      cy.accessOtherProjectWikispecies()
    })

    it('Footer Options - Other Project - Wikifunctions', function() {
      cy.accessOtherProjectWikifunctions()
    })

    it('Footer Options - Other Project - Meta-Wiki', function() {
      cy.accessOtherProjectMetawiki()
    })
  })

  describe('External Links', function() {
    it('Verifying the external link - Google Play - Wikipedia', { tags: '@smoke' }, function() {
      cy.verifyExternalLinkGooglePlay()
    })

    it.only('Checking if the external page will be loaded after changing the target to: Google Play - Wikipedia', function() {
      cy.accessExternalLinkGooglePlay()
    })

    it('Verifying the external link - Apple Store - Wikipedia', { tags: '@smoke' }, function() {
      cy.verifyExternalLinkAppleStore()
      
    })

    it('Checking if the external page will be loaded after changing the target to: Apple Store - Wikipedia', function() {
      cy.accessExternalLinkAppleStore()
    })

    it('Verifying the external link - Support Donation - Wikipedia', { tags: '@smoke' }, function() {
      cy.verifyExternalLinkDonate()
    })

    it('Checking if the external page will be loaded after changing the target to: Support Donation - Wikipedia', function() {
      cy.accessExternalLinkDonate()
    })

  })

})
