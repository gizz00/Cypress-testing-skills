/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/40829035014');

});

it('over vsetky zaskrtnute tasky', () => {

  cy
    .get('.Task label').should( checktasks => {
      
      expect(checktasks[0]).to.have.class('completed')
      expect(checktasks[1]).to.not.have.class('completed')
    })

})