import {faker} from '@faker-js/faker';
import {format} from "date-fns";

/*describe('Como usuario creo una página, con URL y validar que se agregue al listado de páginas con datos aleatorios', () => {
    before(() => {
        cy.visit('http://localhost:2373/ghost/#/signin')
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
        cy.get('button.post-settings').click();
        cy.wait(2000);
        cy.get('input[id="url"]').type(faker.datatype.string());
        cy.wait(2000);
        cy.get('button[class="close settings-menu-header-action"]').click();
        cy.wait(2000);
        cy.get('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger').click();
        cy.wait(2000);
        cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
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

describe('Como usuario creo una página, con fecha y validar que se agregue al listado de páginas con datos aleatorios', () => {
    before(() => {
        cy.visit('http://localhost:2373/ghost/#/signin')
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
        cy.get('button.post-settings').click();
        cy.wait(2000);
        cy.get('input[placeholder="YYYY-MM-DD"]').clear().type(format(faker.date.birthdate(), 'yyyy-MM-dd'));
        cy.wait(2000);
        cy.get('button[class="close settings-menu-header-action"]').click();
        cy.wait(2000);
        cy.get('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger').click();
        cy.wait(2000);
        cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
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

describe('Como usuario creo una página, con etiqueta y validar que se agregue al listado de páginas con datos aleatorios', () => {
    before(() => {
        cy.visit('http://localhost:2373/ghost/#/signin')
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
        cy.get('button.post-settings').click();
        cy.wait(2000);
        cy.get('input[class="ember-power-select-trigger-multiple-input"]').first().type(faker.datatype.string());
        cy.wait(2000);
        cy.get('button[class="close settings-menu-header-action"]').click();
        cy.wait(2000);
        cy.get('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger').click();
        cy.wait(2000);
        cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
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


describe('Como usuario creo una página, con extracto y validar que se agregue al listado de páginas con datos aleatorios', () => {
    before(() => {
        cy.visit('http://localhost:2373/ghost/#/signin')
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
        cy.get('button.post-settings').click();
        cy.wait(2000);
        cy.get('textarea[id="custom-excerpt"]').clear().type(faker.datatype.string());
        cy.wait(2000);
        cy.get('button[class="close settings-menu-header-action"]').click();
        cy.wait(2000);
        cy.get('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger').click();
        cy.wait(2000);
        cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
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

describe('Como usuario creo una página, con extracto y validar que se agregue al listado de páginas con datos aleatorios', () => {
    before(() => {
        cy.visit('http://localhost:2373/ghost/#/signin')
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
        cy.get('button.post-settings').click();
        cy.wait(2000);
        cy.get('input[class="ember-power-select-trigger-multiple-input"]').eq(1).type(faker.datatype.string());
        cy.wait(2000);
        cy.get('button[class="close settings-menu-header-action"]').click();
        cy.wait(2000);
        cy.get('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger').click();
        cy.wait(2000);
        cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
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

describe('Como usuario creo una página, con metadata y validar que se agregue al listado de páginas con datos aleatorios', () => {
    before(() => {
        cy.visit('http://localhost:2373/ghost/#/signin')
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
        cy.get('button.post-settings').click();
        cy.wait(2000);
        cy.get('li[class="nav-list-item"]').first().click();
        cy.wait(2000);
        cy.get('input[id="meta-title"]').type(faker.datatype.string());
        cy.wait(1000);
        cy.get('textarea[id="meta-description"]').type(faker.lorem.paragraph());
        cy.wait(1000);
        cy.get('input[class="post-setting-canonicalUrl ember-text-field gh-input ember-view"]').type(faker.internet.url());
        cy.wait(1000);
        cy.get('button[class="back settings-menu-header-action"]').click();
        cy.wait(2000);
        cy.get('button[class="close settings-menu-header-action"]').click();
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

describe('Como usuario creo una página, con tarjeta twitter y validar que se agregue al listado de páginas con datos aleatorios', () => {
    before(() => {
        cy.visit('http://localhost:2373/ghost/#/signin')
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
        cy.get('button.post-settings').click();
        cy.wait(2000);
        cy.get('li[class="nav-list-item"]').eq(1).click();
        cy.wait(2000);
        cy.get('input[id="twitter-title"]').type(faker.datatype.string());
        cy.wait(1000);
        cy.get('textarea[id="twitter-description"]').type(faker.lorem.paragraph());
        cy.wait(1000);
        cy.get('button[class="back settings-menu-header-action"]').click();
        cy.wait(2000);
        cy.get('button[class="close settings-menu-header-action"]').click();
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

describe('Como usuario creo una página, con tarjeta facebook y validar que se agregue al listado de páginas con datos aleatorios', () => {
    before(() => {
        cy.visit('http://localhost:2373/ghost/#/signin')
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
        cy.get('button.post-settings').click();
        cy.wait(2000);
        cy.get('li[class="nav-list-item"]').eq(2).click();
        cy.wait(2000);
        cy.get('input[id="og-title"]').type(faker.datatype.string());
        cy.wait(1000);
        cy.get('textarea[id="og-description"]').type(faker.lorem.paragraph());
        cy.wait(1000);
        cy.get('button[class="back settings-menu-header-action"]').click();
        cy.wait(2000);
        cy.get('button[class="close settings-menu-header-action"]').click();
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

describe('Como usuario creo una página, con inyección de código header y validar que se agregue al listado de páginas con datos aleatorios', () => {
    before(() => {
        cy.visit('http://localhost:2373/ghost/#/signin')
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
        cy.get('button.post-settings').click();
        cy.wait(2000);
        cy.get('li[class="nav-list-item"]').eq(3).click();
        cy.wait(2000);
        cy.get('#post-setting-codeinjection-head > div:nth-child(2) > div:nth-child(1) > textarea:nth-child(1)').type(faker.lorem.paragraph(), {force: true});
        cy.wait(1000);
        // cy.get('textarea[id="og-description"]').type(faker.lorem.paragraph());
        // cy.wait(1000);
        cy.get('button[class="back settings-menu-header-action"]').click();
        cy.wait(2000);
        cy.get('button[class="close settings-menu-header-action"]').click();
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
});*/

describe('Como usuario creo una página, con inyección de código footer y validar que se agregue al listado de páginas con datos aleatorios', () => {
    before(() => {
        cy.visit('http://localhost:2373/ghost/#/signin')
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
        cy.get('button.post-settings').click();
        cy.wait(2000);
        cy.get('li[class="nav-list-item"]').eq(3).click();
        cy.wait(2000);
        cy.get('#post-setting-codeinjection-foot > div:nth-child(2) > div:nth-child(1) > textarea:nth-child(1)').type(faker.lorem.paragraph(), {force: true});
        cy.wait(1000);
        // cy.get('textarea[id="og-description"]').type(faker.lorem.paragraph());
        // cy.wait(1000);
        cy.get('button[class="back settings-menu-header-action"]').click();
        cy.wait(2000);
        cy.get('button[class="close settings-menu-header-action"]').click();
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
