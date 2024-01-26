describe('WebSite', () => {
    beforeEach(() => {
        cy.visit('/home');
    });
    it('Verify page', () => {
        cy.title() //2
            .should('eq', 'UI Test Automation Playground'); //3
    });
    it('Verify page', () => {
        cy.window()
            .title()
            .then((element) => {
                cy.log(element);
                expect(element === 'UI Test Automation Playground').to.be.true;
                expect(element).to.eq('UI Test Automation Playground'); //3
                cy.wrap(element).should('eq', 'UI Test Automation Playground');
            });
    });
});
