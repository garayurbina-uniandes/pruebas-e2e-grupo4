import {faker} from '@faker-js/faker';
describe('Testing Login on Ghost with random data', () => {
    before(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
    })
    it('Login', () => {
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type(faker.internet.email())
            cy.get('input[name="password"]').type(faker.datatype.string())
            cy.get('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
        });
        cy.wait(2000);
        cy.get('button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon gh-btn-red ember-view"]') //Expect have posts option
            .then($value => {
                expect($value.length).to.equal(1)
            })
    })
});

describe('Testing Login on Ghost with no user', () => {
    before(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
    })
    it('Login', () => {
        cy.get('form').within(() => {
            cy.get('input[name="password"]').type(faker.datatype.string());
            cy.get('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
        });
        cy.wait(2000);
        cy.get('button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon gh-btn-red ember-view"]') //Expect have posts option
            .then($value => {
                expect($value.length).to.equal(1)
            })
    })
});

describe('Testing Login on Ghost with no password', () => {
    before(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
    })
    it('Login', () => {
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type(faker.internet.email());
            cy.get('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
        });
        cy.wait(2000);
        cy.get('button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon gh-btn-red ember-view"]') //Expect have posts option
            .then($value => {
                expect($value.length).to.equal(1)
            })
    })
});