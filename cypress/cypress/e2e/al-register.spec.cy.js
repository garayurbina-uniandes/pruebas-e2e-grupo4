import {faker} from '@faker-js/faker';
describe('Registar un usuario sin nombre con datos aleatorios', () => {
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

describe('Registar un usuario con email no valido con datos aleatorios', () => {
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

describe('Registrar un usuario con contraseña solo números con datos aleatorios', () => {
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

describe('Registar un usuario con titulo sitio con más de 200 caracteres con datos aleatorios', () => {
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

describe('Registrar un usuario con datos aleatorios', () => {
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
