describe('Como usuario agrego una imagen a una página y validar que se agrugue al formulario', () => {
    let imageSequence = 1;
    const prefixPath = 'E12';
    before(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
    })
    it('Create an user and login', () => {
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('a@a.com')
            cy.get('input[name="password"]').type('GhAuthorEx1*')
            cy.get('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
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
        cy.get('a.ember-view.permalink.gh-list-data.gh-post-list-title').first().click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('button.post-settings').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('div.gh-image-uploader-unsplash').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('a.gh-unsplash-button').first().click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.get('span.x-file-input.ember-view')
            .then(($value) => {
                expect($value.length).to.be.greaterThan(0)
            });
    });
})