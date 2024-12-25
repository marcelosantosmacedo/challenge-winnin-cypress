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
})