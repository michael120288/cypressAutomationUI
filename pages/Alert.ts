class Alert {
    private alertTextButton: string = 'Click for JS Alert';
    private buttonSelector: string = 'button';
    //popupWindowText
    private jsAlertText: string = 'I am a JS Alert';
    private jsConfirmWindowText: string = 'I am a JS Confirm';

    private resultSelector: string = '#result';
    private resultTextJSAlert: string = 'You successfully clicked an alert';
    private resultTextJSConfirm: string = 'You clicked: Ok';
    private jsConfirmText: string = 'Click for JS Confirm';
    private jsPromptText: string = 'Click for JS Prompt';

    jsAlert() {
        cy.contains(this.buttonSelector, this.alertTextButton).click();
        cy.on('window:alert', (textAlert) => {
            expect(textAlert).to.equal(this.jsAlertText);
        });
        cy.on('window:confirm', () => true);
        cy.get(this.resultSelector).should('have.text', this.resultTextJSAlert);
    }
    jsConfirm() {
        cy.contains(this.buttonSelector, this.jsConfirmText).click();
        cy.on('window:alert', (textAlert) => {
            expect(textAlert).to.equal(this.jsConfirmWindowText);
        });
        cy.on('window:confirm', () => true);
        cy.get(this.resultSelector).should(
            'have.text',
            this.resultTextJSConfirm
        );
    }
    jsPrompt() {
        //const text = 'Hello World!'
        // cy.window().then(function(win){
        //     cy.stub(win,"prompt").returns('Hello World!')//i'm waiting for
        //     // cy.contains(this.buttonSelector,this.buttonPromptText).click()
        //     cy.get("ul li").eq(2).click();
        // })
        // cy.get(this.resultSelector).should('have.text','Hello World!')
        cy.window().then(($win) => {
            cy.stub($win, 'prompt').returns('This is a test text');
            cy.contains('Click for JS Prompt').click();
        });
        cy.get('#result').should(
            'have.text',
            'You entered: This is a test text'
        );
    }
}
//res = response
//req = request

export const AlertPage = new Alert();
