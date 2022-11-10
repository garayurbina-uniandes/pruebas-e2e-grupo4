const { Given, When, Then } = require('@cucumber/cucumber');

// Etiquetas Steps

When('I enter email {string}', async function (email) {
    let element = await this.driver.$('#ember8');
    return await element.setValue(email);
});

When('I enter password {string}', async function (password) {
    let element = await this.driver.$('#ember10');
    return await element.setValue(password);
});

When('I click Sign in', async function() {
    let element = await this.driver.$('#ember12');
    return await element.click();
})

// Etiquetas Steps END