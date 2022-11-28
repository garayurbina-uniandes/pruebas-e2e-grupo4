import {faker} from "@faker-js/faker";

describe('Como usuario actualizo el título de una página y luego verifico que esté listada', () => {
    before(() => {
        cy.visit('http://localhost:2373/ghost/#/signin')
    })
    it('Login', () => {
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('a@a.com')
            cy.get('input[name="password"]').type('GhAuthorEx1*')
            cy.get('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
        });
    })

    it('Actualizar título de la página', () => {
        cy.wait(2000);
        cy.get('a[href="#/pages/"]').should('be.visible');
        cy.wait(1000);
        cy.get('a[href="#/pages/"]').first().click();
        cy.wait(1000);
        let postsBeforeCreate = 0;
        cy.get('h3[class="gh-content-entry-title"]')
            .then(($value) => {
                postsBeforeCreate = $value.length
            });
        cy.get('a.ember-view.permalink.gh-list-data.gh-post-list-title').first().click();
        cy.wait(2000);
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').clear().type(faker.datatype.string());
        cy.wait(2000);
        cy.get('.gh-publishmenu').click();
        cy.wait(2000);
        cy.get('.gh-publishmenu-button').click();
        cy.wait(2000);
        cy.get('a[href="#/pages/"].blue.link.fw4').should('be.visible');
        cy.wait(1000);
        cy.get('a[href="#/pages/"].blue.link.fw4').first().click()
        cy.wait(2000);
        cy.get('h3[class="gh-content-entry-title"]')
            .then(($value) => {
                expect($value.length).to.equal(postsBeforeCreate)
            });
    })
});

describe('Como usuario actualizo la descripción de una página y luego verifico que esté listada', () => {
    before(() => {
        cy.visit('http://localhost:2373/ghost/#/signin')
    })
    it('Login', () => {
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('a@a.com')
            cy.get('input[name="password"]').type('GhAuthorEx1*')
            cy.get('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
        });
    })

    it('Actualizar descripción de la página', () => {
        cy.wait(2000);
        cy.get('a[href="#/pages/"]').should('be.visible');
        cy.wait(1000);
        cy.get('a[href="#/pages/"]').first().click();
        cy.wait(1000);
        let postsBeforeCreate = 0;
        cy.get('h3[class="gh-content-entry-title"]')
            .then(($value) => {
                postsBeforeCreate = $value.length
            });
        cy.get('a.ember-view.permalink.gh-list-data.gh-post-list-title').first().click();
        cy.wait(2000);
        cy.get('div[data-placeholder="Begin writing your page..."]').clear().type(faker.lorem.paragraph());
        cy.wait(2000);
        cy.get('.gh-publishmenu').click();
        cy.wait(2000);
        cy.get('.gh-publishmenu-button').click();
        cy.wait(2000);
        cy.get('a[href="#/pages/"].blue.link.fw4').should('be.visible');
        cy.wait(1000);
        cy.get('a[href="#/pages/"].blue.link.fw4').first().click()
        cy.wait(2000);
        cy.get('h3[class="gh-content-entry-title"]')
            .then(($value) => {
                expect($value.length).to.equal(postsBeforeCreate)
            });
    })
});

