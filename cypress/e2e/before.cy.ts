describe('first', () => {
    before(() => {
        cy.log('before');
    });
    after(() => {
        cy.log('after');
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
