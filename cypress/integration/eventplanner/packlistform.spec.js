/// <reference types="cypress" />

context('Packlistform', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('button').contains('Create PackList').click()
  })

  it('.type() event details', () => {
    cy.get('#name').type('TestPacklist').should('have.value', 'TestPacklist')
  })

  it('.focus() to put new items in', () => {
    cy.get('#itemInput').focus().type('Zelt').should('have.value', 'Zelt')
  })

  it('.blur() - blur off the name field', () => {
    cy.get('#name')
      .type('About to blur')
      .blur()
      .should('have.value', 'About to blur')
  })

  it('.clear() - the packlist name', () => {
    cy.get('#name')
      .type('Clear this text')
      .should('have.value', 'Clear this text')
      .clear()
      .should('have.value', '')
  })

  it('.submit() - creates an packlist via submit on the form', () => {
    cy.get('[data-testid="packlistform"]')
      .find('#name')
      .type('TestPacklist')
      .get('[data-testid="packlistform"]')
      .find('#itemInput')
      .type('Zelt')
      .get('button')
      .contains('Add')
      .click()
      .get('[data-testid="packlistform"]')
      .find('#itemInput')
      .type('Bier')
      .get('button')
      .contains('Add')
      .click()
      .get('[data-testid="packlistform"]')
      .find('#itemInput')
      .type('Schlafsack')
      .get('button')
      .contains('Add')
      .click()
    cy.get('[data-testid="packlistform"]')
      .submit()
      .should(() => {
        expect(localStorage.getItem('TestPacklist'))
      })
  })
})
