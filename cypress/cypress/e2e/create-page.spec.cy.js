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
        let pageBeforeQuantity = 0;
        cy.get('h3[class="gh-content-entry-title"]')
            .then(($value) => {
                pageBeforeQuantity = $value.length
            });
        cy.get('a[href="#/editor/page/"]').click();
        cy.wait(2000);
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').type('Prueba e2e ghost y cypress');
        cy.wait(2000);
        cy.get('div[data-placeholder="Begin writing your page..."]').type('Es una nueva descripcion');
        cy.wait(2000);
        cy.get('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger').click();
        cy.wait(2000);
        cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
        cy.wait(2000);
        cy.get('a[href="#/pages/"]').click();
        cy.wait(2000);
        cy.get('h3[class="gh-content-entry-title"]')
            .then(($value) => {
                expect($value.length).to.equal(pageBeforeQuantity + 1)
            });
    });
})