/// <reference types="cypress" />

context('Eventpage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('has the right App title', () => {
    cy.title().should('contain', 'Eventplanner')
  })

  it('has a sort function', () => {
    cy.get('select').should('contain', 'date')
  })

  it('has a category filter', () => {
    cy.get('select').should('contain', 'all')
  })

  it('has an event with name, location and duration', () => {
    cy.get('h2').should('contain', 'WackenWinterNights - Wacken')
    cy.contains('2020')
  })

  it('.click() - on the event header', () => {
    cy.get('ul')
      .contains('Rockharz')
      .click({ timeout: 200 })
      .get('section')
      .contains('Price')
      .get('button')
      .contains('PackList')
      .click({ force: true })
      .visit('http://localhost:3000/packlist/medieval')
      .contains('PackList')
      .get('button')
      .contains('medieval')
      .get('ul')
      .should('contain', 'Felldecke')
      .get('button')
      .contains('Back')
      .click()
  })

  it('.click() - on the create event button', () => {
    cy.get('button').contains('Create Event').click()
  })

  it('.click() - on the create packlist button', () => {
    cy.get('button').contains('Create PackList').click()
  })
})
