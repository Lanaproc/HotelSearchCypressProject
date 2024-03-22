///<reference types = "Cypress"/>


describe('The cars tab test will verify the cars functionality', () => {

    const cars_tab = '[data-cy="Car"]';
    const location = '[name=location]';
    const drop_off = '[name=dropoff]';
    const car_group_list = '[name="car-group"]';
    const driver_age_list = '[name="driver-age"]';



    before(() => {
        cy.visit('http://localhost:3000')
    })

    beforeEach(() => {
        cy.get(cars_tab).click()
    })


    // it('navigate the car tab', () => {
    //     cy.get(cars_tab).should("be.visible")
    //     cy.get(cars_tab).invoke('attr', 'aria-expanded').should('eq', 'true')
    //     cy.get(cars_tab).invoke('text').should('eq', 'car')
    // })



    it('chooses location', () => {
        cy.get(location).type('Toronto').should('have.value', 'Toronto')
    })



    it('chooses drop-off date', () => {
        cy.get(drop_off).clear()
        cy.get(drop_off).type("05/10/2024").should('have.value', "05/10/2024")

    })

    it('chooses list of cars', () => {
        cy.get(car_group_list).should("be.visible")
        cy.get(car_group_list).select('Group 1', { force: true })
        cy.get('[title="Group 1"]').should('be.visible')

        cy.get(car_group_list).select('Group 2', { force: true })
        cy.get('[title="Group 2"]').should('be.visible')

        cy.get(car_group_list).select('Group 3', { force: true })
        cy.get('[title="Group 3"]').should('be.visible')

    })



    it('chooses list of driver age', () => {
        cy.get(driver_age_list).should("be.visible")

        cy.get(driver_age_list).select('23', { force: true }).should('have.value', '23')
        cy.get(driver_age_list).select('24', { force: true }).should('have.value', '24')
        cy.get(driver_age_list).select('25', { force: true }).should('have.value', '25')
        cy.get(driver_age_list).select('26', { force: true }).should('have.value', '26')
    })






})