import {faker} from '@faker-js/faker';
describe('Login fallido con datos aleatorios', () => {
    before(() => {
        cy.visit('http://localhost:2373/ghost/#/signin')
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

describe('Login sin usuario con datos aleatorios', () => {
    before(() => {
        cy.visit('http://localhost:2373/ghost/#/signin')
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

describe('Login sin contraseña con datos aleatorios', () => {
    before(() => {
        cy.visit('http://localhost:2373/ghost/#/signin')
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