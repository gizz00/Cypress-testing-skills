/// <reference types="cypress" />


/*
  vytvor si nový board a vypracuj nasledujúce úlohy
  pomocou .only si môžeš spustiť jeden test
*/

// úloha #1: vytvor si nový zoznam na boarde
it('vytvorenie nového zoznamu', () => {

    cy
      .visit('/')

    cy
      .get('#new-board')
      .click()

    cy
      .get('#new-board input')
      .type('Gizziho Zoznam{enter}')




});

// úloha #2: vytvor si nový task v zozname
it('vytvorenie nového tasku', () => {

    cy
      .visit('/')

    cy
      .get('.board_item')
      .click()

    cy
      .get('.CreateList')
      .click()

    
      .get('.CreateList input')
      .type('Gizzo Task{enter}')

      cy
        .get('.List_addTask')
        .click()

      cy
        .get('[data-id="newTaskTitle"]')
        .type('Gizziho CheckBox{enter}')




});

// úloha #3: zaškrtni task ako vybavený
it('označenie tasku', () => {

    cy
      .visit('/')

    cy
      .get('.board_item')
      .click()

    cy
      .get('.container input')
      .check()







});

// úloha #4: odškrtni task ako nevybavený
it('odznačenie tasku', () => {

    cy
      .visit('/')

    cy
      .get('.board_item')
      .click()

    cy
      .get('.container input')
      .uncheck()



});