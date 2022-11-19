describe('Como usuario actualizo una entrada y luego verifico que esté listada', () => {
    let imageSequence = 1;
    const prefixPath = 'E10';
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

    it('Update a post', () => {
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('a[href="#/posts/"]').should('be.visible');
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('a[href="#/posts/"]').first().click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        let postsBeforeCreate = 0;
        cy.get('h3[class="gh-content-entry-title"]')
            .then(($value) => {
                postsBeforeCreate = $value.length
            });
        cy.get('a.ember-view.permalink.gh-list-data.gh-post-list-title').first().click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').type(' - Updated')
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(5000);
        cy.get('.gh-publishmenu').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('.gh-publishmenu-button').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('a[href="#/posts/"].blue.link.fw4').should('be.visible');
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('a[href="#/posts/"].blue.link.fw4').first().click()
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.get('h3[class="gh-content-entry-title"]')
            .then(($value) => {
                expect($value.length).to.equal(postsBeforeCreate)
            });
    })
});
