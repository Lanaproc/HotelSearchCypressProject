///<reference types = "Cypress"/>

describe('The new test suite for hotels tab of travel site', () => {
  it('navigate the main page', () => {
    cy.visit('http://localhost:3000')
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('verify text and elements of going to tab on the page', () => {
    cy.visit('http://localhost:3000')
    cy.get('#tab1 > form > :nth-child(1) > .label').should("be.visible")
    cy.get('#tab1 > form > :nth-child(1) > .label').should("have.text","Going to")
    cy.get('#tab1 > form > :nth-child(1) > .input--style-1').should("be.visible")
    cy.get('#tab1 > form > :nth-child(1) > .input--style-1').should("have.text", "")
  })

  it('verify text and elements of check-in box on the page', () => {
    cy.visit('http://localhost:3000')
    cy.get('#tab1 > form > .row > :nth-child(1) > .input-group > .label').should("be.visible")
    cy.get('#tab1 > form > .row > :nth-child(1) > .input-group > .label').should("have.text", "check-in")
    cy.get('#input-start').should("be.visible")
    cy.get('#input-start').should("have.text", "")
  })

  it('verify text and elements of check-out box on the page', () => {
    cy.visit('http://localhost:3000')
    cy.get('#tab1 > form > .row > :nth-child(2) > .input-group > .label').should("be.visible")
    cy.get('#tab1 > form > .row > :nth-child(2) > .input-group > .label').should("have.text", "check-out")
    cy.get('#input-end').should("be.visible")
    cy.get('#input-end').should("have.text", "")
  })

  it('verify text and elements of travellers box on the page', () => {
    cy.visit('http://localhost:3000')
    cy.contains('travellers').should("be.visible")
    cy.get('#info').should("have.text", "")
    // cy.get(':nth-child(3) > .label').should("have.text", "travellers")
  })

  it('verify text and elements of add a flight checkbox on the page', () => {
    cy.visit('http://localhost:3000')
    cy.get('.checkbox-row > .m-r-45').should("be.visible")
    cy.get('.checkbox-row > .m-r-45').should("have.text", "Add a flight\n                                        \n                                        \n                                    ")
    cy.get('[data-cy="flight_chk"]').should("be.visible")
  })

  it('verify text and elements of add a car checkbox on the page', () => {
    cy.visit('http://localhost:3000')
    cy.get('[class="checkbox-container"]').should("be.visible")
    cy.get('.checkbox-row > :nth-child(2)').should("have.text", "Add a car\n                                        \n                                        \n                                    ")
    cy.get('[data-cy="cars_chk"]').should("be.visible")
  })
    
  it('verify text and element of search on the page', () => {
    cy.visit('http://localhost:3000')
    cy.contains('search').should("be.visible")
    cy.get('#tab1 > form > .btn-submit').should("have.text", "search")
  })

})