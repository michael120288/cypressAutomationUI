import { LoginPage } from '../../pages/Login';
//Cypress.session.clearAllSavedSessions()
describe('COOKIES', () => {
    beforeEach(() => {
        cy.session('myCurrentSession', () => {
            cy.visit(`${Cypress.env('demoQA')}/login`);
            // cy.get('#userName').type('test');
            // cy.get('#password').type('Test1234*');
            // cy.contains('button', 'Login').click();
            // cy.contains('Log out');
            LoginPage.submitButtonLogin();
        });
    });
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    });
    // it('',()=>{

    //         cy.visit(`${Cypress.env('demoQA')}/login`)
    //         cy.get('#userName').type('test');
    //         cy.get('#password').type('Test1234*');
    //         cy.contains('button', 'Login').click();
    //         cy.contains('Log out');

    // })

    //no cookies in the database
    it('create cookies with cy.session', () => {
        cy.visit(`${Cypress.env('demoQA')}/login`);
        cy.url().then((url) => {
            cy.log(url);
            console.log(url);
        });
    });
    //no cookies in the database

    it('create cookies with cy.session', () => {
        cy.visit(`${Cypress.env('demoQA')}/login`);
        cy.contains('Log out');
    });
});
