describe('Como usuario creo una entrada y la publico inmediatamente, luego verifico que esté listada', () => {
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

    it('Create a post', () => {
        cy.wait(2000);
        cy.get('#ember28').should('be.visible');
        cy.wait(1000);
        cy.get('#ember28').click();
        cy.wait(1000);
        cy.get('a.ember-view.gh-btn.gh-btn-green').click(); // new post
        cy.wait(2000);
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').type('Kraken Test 4')
        cy.wait(2000);
        cy.get('div[data-placeholder="Begin writing your post..."]').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
        cy.wait(2000);
    })

    it('Publish post', () => {
        cy.get('.gh-publishmenu').click();
        cy.wait(2000);
        cy.get('.gh-publishmenu-button').click();
        cy.wait(2000);
        cy.get('article.gh-notification.gh-notification-passive.ember-view').should('be.visible');
        cy.wait(2000);
        cy.get('a.blue.link.fw4.flex.items-center.ember-view').click();
        cy.wait(2000);
    })
});