/// <reference types="cypress" />

beforeEach( () => {

  cy
    .server()

  cy
    .route({
      method: 'POST',
      url: '/api/tasks'
    })
    .as('createTask')

    cy
    .route({
      method: 'DELETE',
      url: '/api/lists/*'
    })
    .as('deleteList')

    cy
    .route({
      method: 'PATCH',
      url: '/api/tasks/*'
    })
    .as('editTask')

  cy
    .visit('/board/19941705845');

});

it('vytvorenie tasku', () => {

  cy
    .contains('Add a card')
    .click()

  cy
    .get('.List .TextArea')
    .type('cukor{enter}')

  cy
    .wait('@createTask')
    .its('status')
    .should('eq', 201)

})

it('odstránenie zoznamu', () => {

  cy
    .get('.List .dropdown')
    .click()

  cy
    .contains('Delete list')
    .click()

  cy
    .wait('@deleteList')

  // manuálne si vytvor nový zoznam a pomocou testu tento zoznam odstráň. následne si odsleduj request, ktorý sa volá pri odstránení zoznamu

})

it.only('zaskrtnutie tasku', () => {

  cy
    .get('.Task input')
    .check()

  cy
    .wait('@editTask')
    .then( task => {

      expect(task.status).to.eq(200)
      expect(task.request.body.completed).to.be.true

    })

})