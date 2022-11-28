import {faker} from '@faker-js/faker';

describe('AL09 - Como usuario creo una página, sin publicarla y validar que se agregue al listado de páginas con datos aleatorios', () => {
    before(() => {
        cy.visit('http://localhost:2373/ghost/#/signin')
    })
    it('Hacer login y crear página', () => {
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
        let elementToTest = 'h3[class="gh-content-entry-title"]';
        cy.document().then(($document) => { //Check if Element exists
            const documentResult = $document.querySelectorAll(elementToTest)
            if (documentResult.length) {
                cy.get('h3[class="gh-content-entry-title"]')
                    .then(($value) => {
                        pageBeforeQuantity = $value.length
                    });
            }
        })
        cy.get('a[href="#/editor/page/"]').first().click();
        cy.wait(2000);
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').type(faker.datatype.string());
        cy.wait(2000);
        cy.get('div[data-placeholder="Begin writing your page..."]').type(faker.lorem.paragraph());
        cy.wait(2000);
        cy.get('a[href="#/pages/"]').first().click();
        cy.wait(2000);
        cy.get('h3[class="gh-content-entry-title"]')
            .then(($value) => {
                expect($value.length).to.equal(pageBeforeQuantity + 1)
            });
    });
});

describe('AL10 - Como usuario creo una página, sin publicarla, sin título y validar que se agregue al listado de páginas con datos aleatorios', () => {
    before(() => {
        cy.visit('http://localhost:2373/ghost/#/signin')
    })
    it('Hacer login y crear página', () => {
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
        let elementToTest = 'h3[class="gh-content-entry-title"]';
        cy.document().then(($document) => { //Check if Element exists
            const documentResult = $document.querySelectorAll(elementToTest)
            if (documentResult.length) {
                cy.get('h3[class="gh-content-entry-title"]')
                    .then(($value) => {
                        pageBeforeQuantity = $value.length
                    });
            }
        })
        cy.get('a[href="#/editor/page/"]').first().click();
        cy.wait(2000);
        cy.get('div[data-placeholder="Begin writing your page..."]').type(faker.lorem.paragraph());
        cy.wait(2000);
        cy.get('a[href="#/pages/"]').first().click();
        cy.wait(2000);
        cy.get('h3[class="gh-content-entry-title"]')
            .then(($value) => {
                expect($value.length).to.equal(pageBeforeQuantity + 1)
            });
    });
});

describe('AL11 - Como usuario creo una página, sin publicarla, sin descripción y validar que se agregue al listado de páginas con datos aleatorios', () => {
    before(() => {
        cy.visit('http://localhost:2373/ghost/#/signin')
    })
    it('Hacer login y crear página', () => {
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
        let elementToTest = 'h3[class="gh-content-entry-title"]';
        cy.document().then(($document) => { //Check if Element exists
            const documentResult = $document.querySelectorAll(elementToTest)
            if (documentResult.length) {
                cy.get('h3[class="gh-content-entry-title"]')
                    .then(($value) => {
                        pageBeforeQuantity = $value.length
                    });
            }
        })
        cy.get('a[href="#/editor/page/"]').first().click();
        cy.wait(2000);
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').type(faker.datatype.string());
        cy.wait(2000);
        cy.get('div[data-placeholder="Begin writing your page..."]').type(faker.lorem.paragraph()).clear();
        cy.wait(2000);
        cy.get('a[href="#/pages/"]').click();
        cy.wait(2000);
        cy.get('h3[class="gh-content-entry-title"]')
            .then(($value) => {
                expect($value.length).to.equal(pageBeforeQuantity + 1)
            });
    });
});

describe('AL12 - Como usuario creo una página, publicarla y validar que se agregue al listado de páginas con datos aleatorios', () => {
    before(() => {
        cy.visit('http://localhost:2373/ghost/#/signin')
    })
    it('Hacer login y crear página', () => {
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
        let elementToTest = 'h3[class="gh-content-entry-title"]';
        cy.document().then(($document) => { //Check if Element exists
            const documentResult = $document.querySelectorAll(elementToTest)
            if (documentResult.length) {
                cy.get('h3[class="gh-content-entry-title"]')
                    .then(($value) => {
                        pageBeforeQuantity = $value.length
                    });
            }
        })
        cy.get('a[href="#/editor/page/"]').first().click();
        cy.wait(2000);
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').type(faker.datatype.string());
        cy.wait(2000);
        cy.get('div[data-placeholder="Begin writing your page..."]').type(faker.lorem.paragraph());
        cy.wait(2000);
        cy.get('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger').click();
        cy.wait(2000);
        cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
        cy.wait(2000);
        cy.get('a[href="#/pages/"]').first().click();
        cy.wait(2000);
        cy.get('h3[class="gh-content-entry-title"]')
            .then(($value) => {
                expect($value.length).to.equal(pageBeforeQuantity + 1)
            });
    });
});

describe('AL13 - Como usuario creo una página, programo publicarla y validar que se agregue al listado de páginas con datos aleatorios', () => {
    before(() => {
        cy.visit('http://localhost:2373/ghost/#/signin')
    })
    it('Hacer login y crear página', () => {
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
        let elementToTest = 'h3[class="gh-content-entry-title"]';
        cy.document().then(($document) => { //Check if Element exists
            const documentResult = $document.querySelectorAll(elementToTest)
            if (documentResult.length) {
                cy.get('h3[class="gh-content-entry-title"]')
                    .then(($value) => {
                        pageBeforeQuantity = $value.length
                    });
            }
        })
        cy.get('a[href="#/editor/page/"]').first().click();
        cy.wait(2000);
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').type(faker.datatype.string());
        cy.wait(2000);
        cy.get('div[data-placeholder="Begin writing your page..."]').type(faker.lorem.paragraph());
        cy.wait(2000);
        cy.get('.gh-publishmenu').click();
        cy.wait(2000);
        cy.get('div.gh-publishmenu-radio-content:last').click();
        cy.wait(2000);
        cy.get('button.gh-publishmenu-button').click();
        cy.wait(2000);
        cy.get('article.gh-notification.gh-notification-passive.ember-view').should('be.visible');
        cy.wait(2000);
        cy.get('a.blue.link.fw4.flex.items-center.ember-view').click();
        cy.wait(2000);
        cy.get('h3[class="gh-content-entry-title"]')
            .then(($value) => {
                expect($value.length).to.equal(pageBeforeQuantity + 1)
            });
    });
});