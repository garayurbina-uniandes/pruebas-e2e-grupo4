describe('Como usuario entro al listado de entradas y filtro por publicadas y por autor', () => {
    let imageSequence = 1;
    const prefixPath = 'E17';
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
        cy.get('.ember-power-select-selected-item').first().click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('li[data-option-index="2"]').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('.ember-power-select-selected-item').eq(1).click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('li[data-option-index="1"]').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
    })
});
