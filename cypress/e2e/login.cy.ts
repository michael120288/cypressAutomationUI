import { LoginPage } from '../../pages/Login';
describe('Login Page', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/login`);
    });
    it('login', () => {
        cy.get('#userName').type('test');
        cy.get('#password').type('Test1234*');
        cy.contains('button', 'Login').click();
        //cy.get('#login').click()//the same as contains
        cy.contains('Log out');
    });
    it('login with PageObject', () => {
        LoginPage.submitButtonLogin();
        cy.contains('Log out');
    });
    it.only('login with PageObject', () => {
        LoginPage.submitButtonLogin();
    });
});
