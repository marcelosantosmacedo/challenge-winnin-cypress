/// <reference types="Cypress" />

describe('Test Suite - Visual Testing', { tags: '@visual' }, function() {

    beforeEach(() => {
        cy.visit('https://www.wikipedia.org/')
      })

    describe('Regression Visual Testing', function() {
      it('Verify if the page still the same', function() {
        cy.compareSnapshot('home', {
          capture: 'fullPage',
          errorThreshold: 0.1
        });
      })
  
    })
  
  })