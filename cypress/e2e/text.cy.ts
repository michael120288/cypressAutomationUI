describe('TextBox', () => {
    // beforeEach(() =>{
    //     cy.visit(`${Cypress.env('demoQA')}/text-box`)
    // })
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    });
    it('textBox', () => {
        cy.visit(`${Cypress.env('demoQA')}/text-box`, {
            onBeforeLoad(win) {
                delete win.navigator.__proto__.serviceWorker;
            },
        });
        cy.get('#userName').type('Hello');
        cy.get('#userEmail').type('World@gmail.com');
        cy.get('#currentAddress').type('NY');
        cy.get('#permanentAddress').type('SU');
        cy.get('submit').click();
    });
});
