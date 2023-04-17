/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/27516157800')

})

it('vytvorenie tasku', () => {

  cy
    .contains('Add a card')
    .click()

  cy
    .get('[data-id="newTaskTitle"]')
    .type('Buy Milk{enter}')

    cy
      .get('.Task')
      .should('be.visible')

})

it('overenie poctu taskov', () => {

  cy
    .contains('Add a card')
    .click()

  cy
    .get('[data-id="newTaskTitle"]')
    .type('Buy Cookies{enter}')

  cy
    .get('.Task')
    .should('have.length', 2)

})

it.only('overenie zaskrtnutia', () => {

  cy
    .get('.Task input')
    .check()

  cy
    .get('.Task label')
    .should('have.class', 'completed')

  cy
    .get('.Task input')
    .should('be.checked')

})

it('overenie názvu listu', () => {

  cy
    .get('.boardDetail_title')
    .should('have.value, to do')

})