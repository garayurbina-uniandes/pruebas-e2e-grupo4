describe('Testing post delete', () => {
    before(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
    })
    it('Create an user and login', () => {
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('a@a.com')
            cy.get('input[name="password"]').type('GhAuthorEx1*')
            cy.get('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
        });
        cy.wait(2000);
        //Redirected to login
        cy.get('a[href="#/posts/"]').should('be.visible');
        cy.wait(1000);
        cy.get('a[href="#/posts/"]').first().click();
        cy.wait(2000);
        let postsBeforeQuantity = 0;
        cy.get('h3[class="gh-content-entry-title"]')
            .then(($value) => {
                postsBeforeQuantity = $value.length
            });
        cy.wait(2000);
        cy.get('a.ember-view.permalink.gh-list-data.gh-post-list-title').first().click();
        cy.wait(2000);
        cy.get('button.post-settings').click();
        cy.wait(2000);
        cy.get('button.settings-menu-delete-button').click();
        cy.wait(2000);
        cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click();
        cy.wait(2000);
        cy.wait(2000);
        cy.get('h3[class="gh-content-entry-title"]')
            .then(($value) => {
                expect($value.length).to.equal(postsBeforeQuantity -1)
            });
    });
})