/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/40829035014');

});

it('overenie textu prveho tasku', () => {

  cy
    .get('.Task').then( task => {

      expect(task).to.contain.text('chlieb')
    })
    


});

it('overenie textov vsetkych taskov', () => {

  cy
    .get('.Task').then( todos => {
      expect(todos[0]).to.contain('mlieko')
      expect(todos[1]).to.contain('chlieb')
    })

});

it('task s textom „syr“ je na poslednej pozicii (riesenie 1)', () => {

  cy
    .get('.Task')
    .should('have.length', 3)
    .last()
    .should('contain.text', 'syr');

});

it.only('task s textom „mlieko“ je na poslednej pozícii (riesenie 2)', () => {

  cy
  .get('.Task').should( tasks =>{
    expect(tasks[0]).to.contain.text('chlieb')
    expect(tasks[1]).to.contain.text('mlieko')
  })


});

