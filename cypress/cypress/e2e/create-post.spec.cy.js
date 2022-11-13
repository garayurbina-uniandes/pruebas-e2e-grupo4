describe('Testing basic Angular registration', () => {
    before(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
    })
    it('Create an user and login', () => {
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('j.becerrab@uniandes.edu.co')
            cy.get('input[name="password"]').type('alemania12')
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
        cy.get('a[href="#/editor/post/"]').first().click();
        cy.wait(2000);
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').type('Prueba post e2e ghost y cypress');
        cy.wait(2000);
        cy.get('div[data-placeholder="Begin writing your post..."]').type('Es una nueva descripcion de post');
        cy.wait(2000);
        cy.get('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger').click();
        cy.wait(2000);
        cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
        cy.wait(2000);
        cy.get('a[href="#/posts/"]').first().click();
        cy.wait(2000);
        cy.get('h3[class="gh-content-entry-title"]')
            .then(($value) => {
                expect($value.length).to.equal(postsBeforeQuantity + 1)
            });
    });
})