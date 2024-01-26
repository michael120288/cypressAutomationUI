const textName = 'Tuesday';
describe('Text Input', () => {
    it('text test', () => {
        cy.visit('/textinput');
        cy.get("[id='newButtonName']").type(textName);
        cy.contains('button', 'Button That Should').click();
        cy.get('.btn-primary').then((el) => {
            console.log(el, 'text');
            cy.log(el.text());
            cy.wrap(el).should('have.text', textName);
        });
        cy.get('.form-group').within((text) => {
            console.log(text.text(), 'text');
            cy.get('[type="button"]').should('have.text', textName);
        });
        console.log('Hello World');
    });
});
