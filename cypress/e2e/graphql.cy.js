/// <reference types="Cypress" />

describe('Test Suite - GraphQL', { tags: '@regression' }, function() {
  it('Graphql - Get user by id', { tags: '@smoke' }, function(){
    
    var queryUser = `
      query {
        user(id: 1) {
          id
          username
          email
          address {
            geo {
              lat
              lng
            }
          }
        }
      }`

    cy.request({
      method: 'POST',
      url: 'https://graphqlzero.almansi.me/api',
      body: {
        query: queryUser
      }
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.data.user).to.have.property('id','1');
      expect(response.body.data.user).to.have.property('username','Bret');
      expect(response.body.data.user).to.have.property('email','Sincere@april.biz');
      cy.log(response.body)
    })    
  })

})
