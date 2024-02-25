import { IFramePage } from '../../pages/Iframe';
import { IFrameAppPage } from '../../pages/IframeApp';

describe('IFRAME', () => {
    beforeEach(() => {
        IFramePage.visit();
    });
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    });
    it('test iframe', () => {
        IFramePage.getIframe();
    });
});
describe.only('IFRAMEAPP', () => {
    beforeEach(() => {
        IFrameAppPage.visit();
    });
    it('test iframe with extension ', () => {
        cy.frameLoaded('#mce_0_ifr');
        cy.iframe('#mce_0_ifr').then((iframeApp) => {
            cy.wrap(iframeApp).type('{selectAll}{del}').type('Hello World!');
            cy.wrap(iframeApp).should('have.text', 'Hello World!');
            //OR
            cy.wrap(iframeApp).clear().type('Hello Cypress!');
        });
    });
    it.only('test iframe with extension ', () => {
        cy.frameLoaded('#mce_0_ifr').then((el) => {
            console.log(1, '1');
            cy.iframe('#mce_0_ifr').then((iframeApp) => {
                console.log(2, '2');
                cy.wrap(iframeApp)
                    .type('{selectAll}{del}')
                    .type('Hello World!');
                cy.wrap(iframeApp).should((el2) => {
                    console.log(3, '3');
                    cy.wrap(el2).should('have.text', 'Hello World!').then(()=>{
                        cy.wrap(iframeApp).clear().type('Hello Cypress!');
                        console.log(4, '4');
                        cy.then(() => {
                            console.log(5, '5');
                            cy.wrap(el).should('have.text', 'Hello Cypress!');
                            console.log(6, '6');
                        });
                    })
                });
            });
        });
    });
});
