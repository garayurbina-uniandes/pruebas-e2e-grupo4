module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: [
      "cypress/e2e/register.spec.cy.js",
      "cypress/e2e/login.spec.cy.js",
      "cypress/e2e/create-tag.spec.cy.js",
      "cypress/e2e/view-tag.spec.cy.js",
      "cypress/e2e/delete-tag.spec.cy.js",
      "cypress/e2e/create-page.spec.cy.js",
      "cypress/e2e/add-image-page.spec.cy.js",
      "cypress/e2e/delete-page.spec.cy.js",
      "cypress/e2e/create-post.spec.cy.js",
      "cypress/e2e/update-post.spec.cy.js",
      "cypress/e2e/delete-post.spec.cy.js",
      "cypress/e2e/list-post.spec.cy.js",
      "cypress/e2e/register-new.spec.cy.js",
      "cypress/e2e/login-new.spec.cy.js",
      "cypress/e2e/create-page-new.spec.cy.js",
      "cypress/e2e/delete-page-new.spec.cy.js",
      "cypress/e2e/create-post-new.spec.cy.js",
      "cypress/e2e/list-post-new.spec.cy.js",
      "cypress/e2e/pseudoRandom/*",
      "cypress/e2e/aPriori/*"
    ]
  },
};
