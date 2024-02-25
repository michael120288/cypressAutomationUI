describe('INTERCEPT', () => {
    it('network request spy', function () {
        cy.fixture('progress.json').as('data'); //this.data
        cy.intercept('POST', '*/login').as('login'); //const login = cy.intercept('POST','*/login')
        cy.intercept(
            {
                method: 'GET',
                url: 'https://server-stage.pasv.us/course/coursesProgress/5fb95c1f360c14003c7ab541',
            },
            (req) => {
                req.continue((res) => {
                    if (res.statusCode === 500) {
                        throw new Error('ERROR 200');
                    }
                });
            }
        ).as('course');
        cy.visit(`${Cypress.env('stage')}/user/login`);
        cy.get('#normal_login_email').type(Cypress.env('email'));
        cy.get('#normal_login_password').type(Cypress.env('password'), {
            log: false,
        });
        cy.get('button[type="submit"]').click();
        cy.wait('@login').then((wholeResponse) => {
            //pause until it is done
            console.log(wholeResponse, 'res');
            cy.log('123');
            let id = wholeResponse.response.body.payload.user._id;
            cy.location().should((loc) => {
                console.log(loc, 'loc');
                expect(loc.href).to.eq(`https://stage.pasv.us/profile/${id}`);
                expect(wholeResponse.response.statusCode).to.eq(200);
            });
        });
        cy.visit(
            'https://stage.pasv.us/profile/5fb95c1f360c14003c7ab541/progress'
        );
        cy.wait('@course').then((el) => {
            console.log(el, 'response');
            //cy.wrap(this.data).should('deep.equal',el.response.body)
        });
    });
});
//* all
//https://stage.pasv.us/user/login === */login
//

//dev
//qa
//stage == prod
//prod
// function - has this
// ()=>{} - does not have this
