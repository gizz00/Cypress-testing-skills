/// <reference types="cypress" />

Cypress.Cookies.defaults({
  whitelist: 'trello_token'
})

it('nastavovanie cookies', () => {

  cy
    .setCookie('trello_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RtYWlsQGdtYWlsLmNvbSIsImlhdCI6MTY4MTc1MDAxNiwiZXhwIjoxNjgxNzUzNjE2LCJzdWIiOiIxIn0.m0aVZv7U5OQPTZOmMn2wxDleuJLDfNxfpDItSI40uks')

  cy
    .visit('/')
    
})