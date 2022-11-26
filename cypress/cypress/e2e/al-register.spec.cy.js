import {faker} from '@faker-js/faker';
describe('Testing Register on Ghost with random data with no name', () => {
    before(() => {
        cy.visit('http://localhost:2372/ghost/#/signin')
    })
    it('Register', () => {
        cy.get('#ember12').click();
        cy.wait(1000);
        cy.get('#blog-title').type(faker.datatype.string());
        cy.wait(1000);
        cy.get('#email').type(faker.internet.email());
        cy.wait(1000);
        cy.get('#password').type(faker.datatype.string());
        cy.wait(1000);
        cy.get('#ember29').click(); //Register user
        cy.get('p[class="main-error"]')
            .then(($value) => {
                expect($value.length).to.equal(1)
            });
    });

});

describe('Testing Register on Ghost with random data with invalid email ', () => {
    before(() => {
        cy.visit('http://localhost:2372/ghost/#/signin')
    })
    it('Register', () => {
        cy.get('#ember12').click();
        cy.wait(1000);
        cy.get('#blog-title').type(faker.datatype.string());
        cy.wait(1000);
        cy.get('#name').type(faker.datatype.string());
        cy.wait(1000);
        cy.get('#email').type(faker.datatype.string());
        cy.wait(1000);
        cy.get('#password').type(faker.datatype.string());
        cy.wait(1000);
        cy.get('#ember29').click(); //Register user
        cy.get('p[class="main-error"]')
            .then(($value) => {
                expect($value.length).to.equal(1)
            });
    });
});

describe('Testing Register on Ghost with random data with password only numbers ', () => {
    before(() => {
        cy.visit('http://localhost:2372/ghost/#/signin')
    })
    it('Register', () => {
        cy.get('#ember12').click();
        cy.wait(1000);
        cy.get('#blog-title').type(faker.datatype.string());
        cy.wait(1000);
        cy.get('#name').type(faker.datatype.string());
        cy.wait(1000);
        cy.get('#email').type(faker.internet.email());
        cy.wait(1000);
        cy.get('#password').type(faker.datatype.number(1000000));
        cy.wait(1000);
        cy.get('#ember29').click(); //Register user
        cy.get('p[class="main-error"]')
            .then(($value) => {
                expect($value.length).to.equal(1)
            });
    });
});

describe('Testing Register on Ghost with title with more than 200 characters', () => {
    before(() => {
        cy.visit('http://localhost:2372/ghost/#/signin')
    })
    it('Register', () => {
        cy.get('#ember12').click();
        cy.wait(1000);
        cy.get('#blog-title').type(faker.lorem.sentence(210));
        cy.wait(1000);
        cy.get('#name').type(faker.datatype.string());
        cy.wait(1000);
        cy.get('#email').type(faker.internet.email());
        cy.wait(1000);
        cy.get('#password').type(faker.datatype.string());
        cy.wait(1000);
        cy.get('#ember29').click(); //Register user
        cy.get('p[class="main-error"]')
            .then(($value) => {
                expect($value.length).to.equal(1)
            });
    });
});

describe('Testing Register on Ghost with random data', () => {
    before(() => {
        cy.visit('http://localhost:2372/ghost/#/signin')
    })
    it('Register', () => {
        cy.get('#ember12').click();
        cy.wait(1000);
        cy.get('#blog-title').type(faker.datatype.string());
        cy.wait(1000);
        cy.get('#name').type(faker.datatype.string());
        cy.wait(1000);
        cy.get('#email').type(faker.internet.email());
        cy.wait(1000);
        cy.get('#password').type(faker.datatype.string());
        cy.wait(3000);
        cy.get('#ember29').click(); //Register user
        cy.wait(3000);
        cy.get('form[class="gh-flow-invite"]')
            .then(($value) => {
                expect($value.length).to.equal(1)
            });
    });
});
