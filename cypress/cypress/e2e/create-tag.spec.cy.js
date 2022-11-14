describe('Testing Tag Creation with Invalid data on Ghost', () => {
    before(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
    })
    it('Login', () => {
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('a@a.com')
            cy.get('input[name="password"]').type('GhAuthorEx1*')
            cy.get('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
        });
    })
    it('Create tag with invalid data', () => {
        cy.wait(2000);
        //Create Tag with invalid data
        cy.get('a[href="#/tags/"]').should('be.visible');
        cy.wait(1000);
        cy.get('a[href="#/tags/"]').click(); //Select tags section
        cy.wait(2000);
        cy.get('a[href="#/tags/new/"]').click(); // new tag
        cy.wait(2000);
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click() //save tag
        cy.wait(2000);
        cy.get('.error')
            .then($value => {
                expect($value.length).to.be.greaterThan(0);
            })
    })
});

describe('Testing Public Tag Creation with valid data on Ghost', () => {
    before(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
    })
    it('Login', () => {
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('a@a.com')
            cy.get('input[name="password"]').type('GhAuthorEx1*')
            cy.get('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
        });
    })
    it('Create Public Tag', () => {
        cy.wait(2000);
        //Create Tag with invalid data
        cy.get('a[href="#/tags/"]').should('be.visible');
        cy.wait(1000);
        cy.get('a[href="#/tags/"]').click(); //Select tags section
        cy.wait(2000);
        cy.get('a[href="#/tags/new/"]').click(); // new tag
        cy.wait(2000);
        cy.get('#tag-name').type('tagmajal') // create Public tag
        cy.wait(2000);
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click() //save tag
        cy.wait(2000);
    })
});

describe('Testing Internal Tag Creation with valid data on Ghost', () => {
    before(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
    })
    it('Login', () => {
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('a@a.com')
            cy.get('input[name="password"]').type('GhAuthorEx1*')
            cy.get('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
        });
    })
    it('Create Internal Tag', () => {
        cy.wait(2000);
        //Create Tag with invalid data
        cy.get('a[href="#/tags/"]').should('be.visible');
        cy.wait(1000);
        cy.get('a[href="#/tags/"]').click(); //Select tags section
        cy.wait(2000);
        cy.get('a[href="#/tags/new/"]').click(); // new tag
        cy.wait(2000);
        cy.get('#tag-name').type('#interna') // create internal tag
        cy.wait(2000);
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click() //save tag
        cy.wait(2000);
    })
});