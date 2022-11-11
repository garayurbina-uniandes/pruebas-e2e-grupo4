const { Given, When, Then } = require('@cucumber/cucumber');

// Login Steps

When('I enter site title {string}', async function (title){
    let element = await this.driver.$('#blog-title');
    return await element.setValue(title);
});

When('I enter full name', async function(){
    let fullName = await this.driver.$('#name');
    fullName.setValue('FullName');
})

When('I enter register email', async function(){
    let email = await this.driver.$('#email');
    email.setValue('a@a.com')
})

When('I enter pass', async function(){
    let pass = await this.driver.$('#password');
    return await pass.setValue('GhAuthorEx1*');
})

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

When('I register my user', async function(){
    let element = await this.driver.$('#ember29');
    return await element.click();
})

// Login Steps END