describe('Como usuario elimino una página y validar que se ya no este en el listado de páginas', () => {
    let imageSequence = 1;
    const prefixPath = '4.44.0/E11';
    before(() => {
        cy.visit('http://localhost:3002/ghost/#/signin')
    })
    it('Create an user and login', () => {
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('a@a.com')
            cy.get('input[name="password"]').type('GhAuthorEx1*')
            cy.get('button[type="submit"]').click()
        });
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        //Redirected to login
        cy.get('a[href="#/pages/"]').should('be.visible');
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('a[href="#/pages/"]').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
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
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('a.ember-view.permalink.gh-list-data.gh-post-list-title').first().click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('button[title="Settings"]').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('button.settings-menu-delete-button').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.document().then(($document) => { //Check if Element exists
            const documentResult = $document.querySelectorAll(elementToTest)
            if (documentResult.length) {
                cy.get('h3[class="gh-content-entry-title"]')
                    .then(($value) => {
                        expect($value.length).to.equal(pageBeforeQuantity -1)
                    });
            }
        })
    });
})