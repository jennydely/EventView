/// <reference types="cypress" />

context('UserPage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('has the right App title', () => {
    cy.title().should('contain', 'EventView')
  })

  it('can be sorted', () => {
    cy.get('select').should('contain', 'date')
  })

  it('has a category filter', () => {
    cy.get('select').should('contain', 'all')
  })

  it('has an event with name, location and durationyear', () => {
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
    cy.get('button')
      .contains('Create Event')
      .click()
      .should('be.visible')
      .get('button')
      .contains('Back')
      .click()
  })

  it('.click() - on the create packlist button', () => {
    cy.get('footer')
      .should('contain', 'Create PackList')
      .click()
      .should('be.visible')
  })
})
