describe('Testing basic Angular registration', () => {
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
        cy.get('a[href="#/pages/"]').should('be.visible');
        cy.wait(1000);
        cy.get('a[href="#/pages/"]').click();
        cy.wait(2000);
        cy.get('a.ember-view.permalink.gh-list-data.gh-post-list-title').first().click();
        cy.wait(2000);
        cy.get('button.post-settings').click();
        cy.wait(2000);
        cy.get('div.gh-image-uploader-unsplash').click();
        cy.wait(2000);
        cy.get('a.gh-unsplash-button').first().click();
        cy.wait(2000);

        cy.get('span.x-file-input.ember-view')
            .then(($value) => {
                expect($value.length).to.be.greaterThan(0)
            });
    });
})