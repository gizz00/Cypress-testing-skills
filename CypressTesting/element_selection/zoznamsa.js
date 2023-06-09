/// <reference types="cypress" />

it('oznacovanie elementov', () => {

  cy
    .visit('/')


  /* 

  úloha #1: označ nadpis „My boards“ pomocou príkazu .get()
  úloha #2: označ nadpis „My boards“ pomocou príkazu .contains()
  úloha #3: vytvor si board a označ jeho názov pomocou príkazu .get()
  úloha #4: vytvor si board a označ jeho názov pomocou príkazu .contains()
  
  */

  cy
    .get('.background_title')

  cy
    .contains('My Boards')

  cy
    .get('[data-id="board_30232230137"]')

  cy
    .contains('3 zoznam sa, 3. uloha')

})