describe('Testing Public Tag View on Ghost', () => {
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
    it('View existing Public tag', () => {
        cy.wait(2000);
        //Create Tag with invalid data
        cy.get('#ember38').should('be.visible');
        cy.wait(1000);
        cy.get('#ember38').click(); //Select tags section
        cy.wait(2000);
        cy.get('.gh-list-row.gh-tags-list-item.ember-view').first().click()//Click on existing tag
        cy.wait(2000);
        cy.get('#tag-name') //Expect to see Tag info
            .then($value => {
                expect($value.length).to.be.greaterThan(0)
            })
    })
});

describe('Testing Filter Internal Tags on Ghost', () => {
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
    it('Filter by internal tags', () => {
        cy.wait(2000);
        //Create Tag with invalid data
        cy.get('#ember38').should('be.visible');
        cy.wait(1000);
        cy.get('#ember38').click(); //Select tags section
        cy.wait(2000);
        cy.get('span').contains('Internal tags').click(); //Filter by internal tags
        cy.wait(2000);
        cy.get('.gh-tag-list-name')
            .then($value => {
                expect($value).to.contain('#');
            })
    })
});

describe('Testing Internal Tag View on Ghost', () => {
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
    it('View existing Internal tag', () => {
        cy.wait(2000);
        //Create Tag with invalid data
        cy.get('#ember38').should('be.visible');
        cy.wait(1000);
        cy.get('#ember38').click(); //Select tags section
        cy.wait(2000);
        cy.get('span').contains('Internal tags').click(); //Filter by internal tags
        cy.wait(2000);
        cy.get('.gh-list-row.gh-tags-list-item.ember-view').first().click()//Click on existing tag
        cy.wait(2000);
        cy.get('#tag-name') //Expect to see tag info
            .then($value => {
                expect($value.length).to.be.greaterThan(0)
            })
    })
});