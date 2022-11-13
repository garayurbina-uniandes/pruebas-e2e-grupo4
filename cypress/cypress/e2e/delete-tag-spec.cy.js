describe('Testing Public Tag Delete on Ghost', () => {
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
    it('Delete existing tag', () => {
        cy.wait(2000);
        //Create Tag with invalid data
        cy.get('#ember38').should('be.visible');
        cy.wait(1000);
        cy.get('#ember38').click(); //Select tags section
        cy.wait(2000);
        cy.get('.gh-list-row.gh-tags-list-item.ember-view').first().click()//Click on existing tag
        cy.wait(2000);
        cy.get('#tag-name')
            .then($value => {
                expect($value.length).to.be.greaterThan(0)
            })
        cy.wait(1000);
        cy.get('.gh-btn.gh-btn-red.gh-btn-icon.mb15').click(); //Click on delete tag
        cy.wait(1000);
        cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click(); //confirm tag delete
        cy.wait(1000);

        
    })
});