import { AlertPage } from '../../pages/Alert';
// describe('ALERT', () => {
//     beforeEach(() => {
//         cy.visit(`${Cypress.env('herokuapp')}/javascript_alerts`);
//     });
//     beforeEach(() => {
//         cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
//     });
//     it('Click for JS Alert', () => {
//         AlertPage.jsAlert();
//     });
//     it('Click for JS Confirm OK', () => {
//         AlertPage.jsConfirm();
//     });
//     it('Click for JS Confirm FALSE', () => {
//         //HomeWork
//     });
//     it('Click for JS Prompt', () => {
//         AlertPage.jsPrompt();
//     });

//     it.only('Handling JS Prompt - Input text in prompt, Click OK and Validate Input Text', () => {
//         cy.window().then(($win) => {
//             cy.stub($win, 'prompt').returns('This is a test text');
//             cy.contains('Click for JS Prompt').click();
//         });
//         cy.get('#result').should(
//             'have.text',
//             'You entered: This is a test text'
//         );
//     });
// });
//HomeWork
//https://demoqa.com/alerts

describe('Example to demonstrate handling of JavaScript Alerts, Confirm, Prompt in Cypress', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    });

    it('Handling JS Alert - Validate Alert Text and Click OK', () => {
        cy.contains('Click for JS Alert', { timeout: 6000 }).click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am a JS Alert');
        });
        cy.on('window:confirm', () => true);
        cy.get('#result').should(
            'have.text',
            'You successfully clicked an alert'
        );
    });

    it('Handling JS Confirm - Validate Confirm Text and Click OK', () => {
        cy.contains('Click for JS Confirm').click();
        cy.on('window:confirm', (str) => {
            expect(str).to.equal(`I am a JS Confirm`);
        });
        cy.on('window:confirm', () => true);
        cy.get('#result').should('have.text', 'You clicked: Ok');
    });

    it('Handling JS Confirm - Click Cancel', () => {
        cy.contains('Click for JS Confirm').click();
        cy.on('window:confirm', () => false);
        cy.get('#result').should('have.text', 'You clicked: Cancel');
    });

    it('Handling JS Prompt - Input text in prompt, Click OK and Validate Input Text', () => {
        cy.window().then(($win) => {
            cy.stub($win, 'prompt').returns('This is a test text');
            cy.contains('Click for JS Prompt').click();
        });
        cy.get('#result').should(
            'have.text',
            'You entered: This is a test text'
        );
    });
    it('Click for JS Prompt', () => {
        AlertPage.jsPrompt();
    });
});

//AC:
//1. Check if button is present
//2. Check if popup window is present after you click on the button
//click on OK button

//click button
//popup window
//click on OK button
