module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: [
      "cypress/e2e/*.spec.cy.js",
      "cypress/e2e/features/*.js",
      "cypress/e2e/pseudoRandom/*.js",
      "cypress/e2e/random/*.js",
      "cypress/e2e/aPriori/*"
    ]
  },
};
