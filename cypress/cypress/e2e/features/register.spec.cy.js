describe('Testing Register on Ghost', () => {
    let imageSequence = 1;
    const prefixPath = '3.41.1/E02';
    before(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
    })
    it('Register', () => {
        cy.get('#ember12').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('#blog-title').type('titulo');
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('#name').type('FullName');
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('#email').type('a@a.com');
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('#password').type('GhAuthorEx1*');
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('#ember29').click(); //Register user
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
    })
});