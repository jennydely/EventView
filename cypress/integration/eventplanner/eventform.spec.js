/// <reference types="cypress" />

context('Eventpage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('button').contains('Create Event').click()
  })

  it('.select() evnet category', () => {
    cy.get('#category').select('medieval').should('have.value', 'medieval')
  })

  it('.type() event details', () => {
    cy.get('#name').type('SummerBreeze').should('have.value', 'SummerBreeze')
  })

  it('.focus() - focus on a DOM element', () => {
    cy.get('#location').focus().type('Bayern').should('have.value', 'Bayern')
  })

  it('.blur() - blur off a DOM element', () => {
    cy.get('#location')
      .type('About to blur')
      .blur()
      .should('have.value', 'About to blur')
  })

  it('.clear() - clears an input or textarea element', () => {
    cy.get('#street')
      .type('Clear this text')
      .should('have.value', 'Clear this text')
      .clear()
      .should('have.value', '')
  })
  it('.select() event category', () => {
    cy.get('#packlist').select('medieval').should('have.value', 'medieval')
  })

  it('.submit() - submit a form', () => {
    cy.get('[data-testid="1337"]')
      .find('#name')
      .type('Test')
      .get('[data-testid="1337"]')
      .find('#location')
      .type('Testyland')
      .get('[data-testid="1337"]')
      .find('#EventStartDate')
      .type('2020-09-24')
      .get('[data-testid="1337"]')
      .find('#EventEndDate')
      .type('2020-09-28')
      .get('[data-testid="1337"]')
      .find('#street')
      .type('Testhausen 14D')
      .get('[data-testid="1337"]')
      .find('#zip')
      .type('12345')
      .get('[data-testid="1337"]')
      .find('#website')
      .type('www.testy.de')
    cy.get('[data-testid="1337"]')
      .submit()
      .should(() => {
        expect(localStorage.getItem('Test'))
      })
  })
})
