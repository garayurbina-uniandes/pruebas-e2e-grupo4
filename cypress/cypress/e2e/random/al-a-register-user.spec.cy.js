describe('Testing Register on Ghost', () => {
    before(() => {
        cy.visit('http://localhost:2373/ghost/#/signin')
    })
    it('Register', () => {
        cy.get('#ember12').click();
        cy.wait(1000);
        cy.get('#blog-title').type('titulo');
        cy.wait(1000);
        cy.get('#name').type('FullName');
        cy.wait(1000);
        cy.get('#email').type('a@a.com');
        cy.wait(1000);
        cy.get('#password').type('GhAuthorEx1*');
        cy.wait(1000);
        cy.get('#ember29').click(); //Register user
    })
});