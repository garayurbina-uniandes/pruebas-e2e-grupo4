const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

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

//Etiquetas Steps BEGIN
When('I select tags section', async function(){
    let element = await this.driver.$('#ember38');
    return await element.click();
})

When('I click on new tag', async function(){
    let element = await this.driver.$('a[href="#/tags/new/"]');
    return await element.click();
})

When('I click on save tag', async function(){
    let element = await this.driver.$('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view');
    return await element.click();
})

Then('I expect to not be able to create a tag', async function(){
    let elements = await this.driver.$$(".error");
    return await expect(elements.length).to.greaterThan(0);
})

When('I enter tag name {string}', async function(tag){
    let element = await this.driver.$('#tag-name')
    element.setValue(tag)
})

When('I click on existing tag', async function(){
    let element = await this.driver.$(".gh-list-row.gh-tags-list-item.ember-view")
    return await element.click();
})

When('I click on delete tag', async function(){
    let element = await this.driver.$(".gh-btn.gh-btn-red.gh-btn-icon.mb15")
    return await element.click();
})

When('I confirm delete tag', async function(){
    let element = await this.driver.$(".gh-btn.gh-btn-red.gh-btn-icon.ember-view")
    return await element.click();
})

Then('I expect to see tag information', async function(){
    let element = await this.driver.$("#tag-name");
    return await element.click();
})

//Etiquetas Steps END