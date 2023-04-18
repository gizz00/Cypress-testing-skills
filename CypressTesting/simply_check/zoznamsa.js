/// <reference types="cypress" />


beforeEach( () => {

  cy
    .visit('/board/27516157800');

})

it('vytvorenie listu', () => {

  cy
    .get('.CreateList_title')
    .click()

  cy
    .get('.CreateList_input')
    .type('to do II{enter}')

  cy
    .get('.List')
    .should('be.visible')

})

it('overenie poctu listov', () => {

  cy
    .get('.CreateList_title')
    .click()

  cy
    .get('.CreateList_input')
    .type('to do I{enter}')

  cy
    .get('.List')
    .should('have.length' 2)

})

it('odstranenie listu', () => {

  cy
    .get('[data-id="65573021213"] .dropdown')
    .click()

  cy
    .get('[data-id="65573021213"] .delete')
    .click()
  
  cy
    .get('.List')
    .should('have.length', 1)

})

it('overenie odskrtnutia', () => {

  cy
    .get('.Task .checkmark')
    .should('be.checked')

  cy
    .get('.Task label')
    .should('have.class', 'completed')

  cy
    .get('.Task .checkmark')
    .uncheck()

  cy
    .get('.Task .checkmark')
    .should('not.be.checked')

  cy
    .get('.Task label')
    .should('not.have.class', 'completed')

})

it('overenie názvu listu', () => {

  cy
    .get('.taskTitle')
    .should('have.value', 'to do I')

})

it.only('overenie textu na pridanie tasku (add card)', () => {

  cy
    .get('.List_addTask')
    .should('contain.text', 'Add a card...')

})