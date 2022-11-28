describe('Testing Login on Ghost With invalid user and password', () => {
    let dataPool;
    try {
        const data = require('./data/apriori.json');
        dataPool = data[Math.floor(Math.random() * data.length)];
        console.log(dataPool)
    } catch (error) {
        console.log('That did not go well.')
        throw error
    }
    before(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
    })
    it('Load data', () => {
        cy.wait(1000);
    })
    it('Login', () => {
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type(dataPool['words'])
            cy.get('input[name="password"]').type(dataPool['words'])
            cy.get('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
        });
        cy.wait(2000);
        cy.get('p[class="main-error"]') // Expect have error for invalid data
            .then($value => {
                expect($value.length).to.equal(1)
            })
    })
});
