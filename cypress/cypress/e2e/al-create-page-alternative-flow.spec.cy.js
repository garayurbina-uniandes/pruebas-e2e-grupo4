import {faker} from '@faker-js/faker';

describe('Como usuario creo una página con título solo números, publicarla y validar que se agregue al listado de páginas con datos aleatorios', () => {
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
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').type(faker.datatype.number(1000000).toString());
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

describe('Como usuario creo una página con descripción solo números, publicarla y validar que se agregue al listado de páginas con datos aleatorios', () => {
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
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').type(faker.lorem.word());
        cy.wait(2000);
        cy.get('div[data-placeholder="Begin writing your page..."]').type(faker.datatype.number(10000000000000).toString());
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

describe('Como usuario creo una página, con URL solo números y validar que se agregue al listado de páginas con datos aleatorios', () => {
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
        cy.get('button.post-settings').click();
        cy.wait(2000);
        cy.get('input[id="url"]').clear().type(faker.datatype.number(1000000).toString());
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

describe('Como usuario creo una página, con texto alfanúmerico en fecha y validar que se agregue al listado de páginas con datos aleatorios', () => {
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
        cy.get('button.post-settings').click();
        cy.wait(2000);
        cy.get('input[placeholder="YYYY-MM-DD"]').clear().type(faker.datatype.string());
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

describe('Como usuario creo una página, con metadata y validar que se agregue al listado de páginas con datos aleatorios', () => {
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
        cy.get('input[id="meta-title"]').type(faker.datatype.string(75));
        cy.wait(1000);
        cy.get('span[style="color: rgb(226, 84, 64);"]')
            .then(($value) => {
                expect($value.length).to.equal(1)
            });
    });
});

describe('Como usuario creo una página con título con 50 palabras, y se valida registro con datos aleatorios', () => {
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
        cy.get('a[href="#/editor/page/"]').first().click();
        cy.wait(2000);
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').type(faker.lorem.words(50));
        cy.wait(2000);
        cy.get('div[data-placeholder="Begin writing your page..."]').type(faker.lorem.paragraph());
        cy.wait(2000);
        cy.get('a[href="#/pages/"]').first().click();
        cy.wait(2000);
        cy.get('button[class="gh-btn gh-btn-red"]')
            .then(($value) => {
                expect($value.length).to.equal(1)
            });
    });
});

describe('Como usuario creo una página con descripción con 1000 palabras, publicarla y validar que se agregue al listado de páginas con datos aleatorios', () => {
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
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').type(faker.lorem.word());
        cy.wait(2000);
        cy.get('div[data-placeholder="Begin writing your page..."]').type(faker.lorem.words(1000));
        cy.wait(2000);
        cy.get('a[href="#/pages/"]').first().click();
        cy.wait(2000);
        cy.get('h3[class="gh-content-entry-title"]')
            .then(($value) => {
                expect($value.length).to.equal(pageBeforeQuantity + 1)
            });
    });
});

describe('Como usuario creo una página, con fecha solo números y validar que se agregue al listado de páginas con datos aleatorios', () => {
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
        cy.get('button.post-settings').click();
        cy.wait(2000);
        cy.get('input[placeholder="YYYY-MM-DD"]').clear().type(faker.datatype.number(1000).toString());
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
