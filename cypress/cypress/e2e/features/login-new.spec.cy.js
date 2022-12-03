describe('Testing Login on Ghost', () => {
    let imageSequence = 1;
    const prefixPath = '4.44.0/E01';
    before(() => {
        cy.visit('http://localhost:3002/ghost/#/signin')
    })
    it('Login', () => {
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('a@a.com')
            cy.get('input[name="password"]').type('GhAuthorEx1*')
            cy.get('button[type="submit"]').click()
        });
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.get('a[href="#/dashboard/"]') //Expect have dashboard option
            .then($value => {
                expect($value.length).to.be.greaterThan(0)
            })
    })
});