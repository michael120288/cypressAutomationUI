describe('first', () => {
    beforeEach(() => {
        cy.visit('/home');
        cy.log('beforeEach');
    });
    afterEach(() => {
        cy.log('afterEach');
    });
    it('testCase 1', () => {
        cy.log('Hello World');
    });
    it('testCase 2', () => {
        cy.log('Hello World');
    });
    it('testCase 3', () => {
        cy.log('Hello World');
    });
});
