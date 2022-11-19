describe('Testing Public Tag Delete on Ghost', () => {
    let imageSequence = 1;
    const prefixPath = 'E09';
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
    it('Delete existing tag', () => {
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        //Create Tag with invalid data
        cy.get('a[href="#/tags/"]').should('be.visible');
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('a[href="#/tags/"]').click(); //Select tags section
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('a[title="Edit tag"]').first().click()//Click on existing tag
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('#tag-name')
            .then($value => {
                expect($value.length).to.be.greaterThan(0)
            })
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('.gh-btn.gh-btn-red.gh-btn-icon.mb15').click(); //Click on delete tag
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click(); //confirm tag delete
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
    })
});