describe('Como usuario elimino una entrada, luego verifio que ya no esté listada', () => {
    let imageSequence = 1;
    const prefixPath = 'E16';
    before(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
    })
    it('Delete post and check', () => {
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('a@a.com')
            cy.get('input[name="password"]').type('GhAuthorEx1*')
            cy.get('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
        });
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        //Redirected to login
        cy.get('a[href="#/posts/"]').should('be.visible');
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('a[href="#/posts/"]').first().click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        let postsBeforeQuantity = 0;
        cy.get('h3[class="gh-content-entry-title"]')
            .then(($value) => {
                postsBeforeQuantity = $value.length
            });
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('a.ember-view.permalink.gh-list-data.gh-post-list-title').first().click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('button.post-settings').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('button.settings-menu-delete-button').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.get('h3[class="gh-content-entry-title"]')
            .then(($value) => {
                expect($value.length).to.equal(postsBeforeQuantity -1)
            });
    });
})