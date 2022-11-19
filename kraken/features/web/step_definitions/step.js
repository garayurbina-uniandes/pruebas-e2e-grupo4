const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

//variable for pages quantity
let pageBeforeQuantity = 0;
//variable for posts quantity
let postBeforeQuantity = 0;

// Login Steps

When('I enter site title {string}', async function (title) {
    let element = await this.driver.$('#blog-title');
    return await element.setValue(title);
});

When('I enter full name', async function () {
    let fullName = await this.driver.$('#name');
    fullName.setValue('FullName');
})

When('I enter register email', async function () {
    let email = await this.driver.$('#email');
    email.setValue('a@a.com')
})

When('I enter pass', async function () {
    let pass = await this.driver.$('#password');
    return await pass.setValue('GhAuthorEx1*');
})

When('I enter email {string}', async function (email) {
    let element = await this.driver.$('#ember8');
    return await element.setValue(email);
});

When('I enter password {string}', async function (password) {
    let element = await this.driver.$('input[name="password"]');
    return await element.setValue(password);
});

When('I click Sign in', async function () {
    let element = await this.driver.$('button[type="submit"]');
    return await element.click();
})

When('I click old Sign in', async function () {
    let element = await this.driver.$('span=Create your account');
    return await element.click();
})

When('I register my user', async function () {
    let element = await this.driver.$('button[type="submit"]');
    return await element.click();
})

// Login Steps END

//Etiquetas Steps BEGIN
When('I select tags section', async function () {
    let element = await this.driver.$('a[href="#/tags/"]');
    return await element.click();
})

When('I click on new tag', async function () {
    let element = await this.driver.$('a[href="#/tags/new/"]');
    return await element.click();
})

When('I click on save tag', async function () {
    let element = await this.driver.$('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view');
    return await element.click();
})

When('I click on new save tag', async function () {
    let element = await this.driver.$('span=Save');
    return await element.click();
})
Then('I expect to not be able to create a tag', async function () {
    let elements = await this.driver.$$(".error");
    return await expect(elements.length).to.greaterThan(0);
})

When('I enter tag name {string}', async function (tag) {
    let element = await this.driver.$('#tag-name')
    element.setValue(tag)
})

When('I filter by internal tags', async function(){
    let element = await this.driver.$('span=Internal tags');
    return await element.click();
})

Then('I expect to see internal tags', async function(){
    let element = await this.driver.$(".gh-tag-list-name").getText();
    return await expect(element).to.contain('#');
})

When('I click on existing tag', async function(){
    let element = await this.driver.$(".gh-list-row.gh-tags-list-item.ember-view")
    return await element.click();
})

When('I click on new existing tag', async function(){
    let element = await this.driver.$('a[title="Edit tag"]')
    return await element.click();
})

When('I click on delete tag', async function () {
    let element = await this.driver.$(".gh-btn.gh-btn-red.gh-btn-icon.mb15")
    return await element.click();
})

When('I confirm delete tag', async function () {
    let element = await this.driver.$(".gh-btn.gh-btn-red.gh-btn-icon.ember-view")
    return await element.click();
})

Then('I expect to see tag information', async function () {
    let element = await this.driver.$("#tag-name");
    return await element.click();
})

//Etiquetas Steps END

//Create page steps
When('I click pages item', async function () {
    let element = await this.driver.$('#ember37');
    return await element.click();
});

When('I click on new page', async function () {
    let elements = await this.driver.$$('h3[class="gh-content-entry-title"]');
    pageBeforeQuantity = elements.length;
    let element = await this.driver.$('a[href="#/editor/page/"]');
    return await element.click();
});

When('I enter page title {string}', async function (title) {
    let element = await this.driver.$('.gh-editor-title.ember-text-area.gh-input.ember-view');
    return await element.setValue(title);
});

When('I enter page description {string}', async function (description) {
    let element = await this.driver.$('div[data-placeholder="Begin writing your page..."]');
    return await element.setValue(description);
});

When('I click on publish page options', async function () {
    let element = await this.driver.$('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger');
    return await element.click();
});

When('I click on publish page', async function () {
    let element = await this.driver.$('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view');
    return await element.click();
});

When('I click to return pages list', async function () {
    let element = await this.driver.$('a[href="#/pages/"]');
    return await element.click();
});

Then('I expect find the new page', async function () {
    let elements = await this.driver.$$('h3[class="gh-content-entry-title"]');
    return await expect(elements.length).to.greaterThan(0);
});
//End page steps

//delete page steps
When('I click on existing page', async function () {
    let element = await this.driver.$(".ember-view.permalink.gh-list-data.gh-post-list-title")
    return await element.click();
});

When('I click on existing page configuration', async function () {
    let element = await this.driver.$("button.post-settings")
    return await element.click();
});

When('I do scroll', async function () {
    let formPage = await this.driver.$(".gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button");
    return await formPage.scrollIntoView();
});

When('I click on delete existing page', async function () {
    let element = await this.driver.$(".gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button")
    return await element.click();
});

When('I click on delete confirmation', async function () {
    let element = await this.driver.$(".gh-btn.gh-btn-red.gh-btn-icon.ember-view")
    return await element.click();
});

Then('I expect delete a page', async function () {
    let elements = await this.driver.$$('h3[class="gh-content-entry-title"]');
    return await expect(pageBeforeQuantity).to.greaterThan(elements.length);
});
//end delete page steps

//add image
When('I click on add image', async function () {
    let element = await this.driver.$("div.gh-image-uploader-unsplash")
    return await element.click();
});

When('I click on image', async function () {
    let element = await this.driver.$("a.gh-unsplash-button")
    return await element.click();
});

Then('I expect find images', async function () {
    let elements = await this.driver.$$('img');
    return await expect(elements.length).to.greaterThan(0);
});
//end add image

// Start create a post

//variable for pages quantity
let postsBeforeCreate = 0;

When('I press New Post button', async function () {
    let element = await this.driver.$('a[href="#/editor/post/"]');
    return await element.click();
});

When('I enter post title {string}', async function (title) {
    let element = await this.driver.$('textarea.gh-editor-title');
    // let element = await this.driver.$('.gh-editor-title.ember-text-area.gh-input.ember-view');
    return await element.setValue(title);
});

When('I enter post description {string}', async function (description) {
    let element = await this.driver.$('div[data-placeholder="Begin writing your post..."]');
    return await element.setValue(description);
});

When('I press settings button', async function () {
    let element = await this.driver.$('button.post-settings');
    return await element.click();
});

When('I press the button Add Tag', async function () {
    let element = await this.driver.$('ember-power-select-option');
    return await element.click();
});

When('I press the button Close settings', async function () {
    let element = await this.driver.$('button.settings-menu-header-action');
    return await element.click();
});

When('I press the button Publish', async function () {
    let element = await this.driver.$('gh-publishmenu');
    return await element.click();
});

When('I press a button with id {string}', async function (id) {
    let element = await this.driver.$(id);
    return await element.click();
});

Then('Should exists a Post with the name {string}', async function (postName) {
    let element = await this.driver.$$('.gh-content-entry-title');
    return await expect(element.textContent).contain(postName)
});

When('I press the schedule option', async function () {
    let elements = await this.driver.$$('div.gh-publishmenu-radio-content');
    return await elements[1].click()
});

When('I select the first post', async function () {
    let elements = await this.driver.$$('.gh-posts-list-item');
    return await elements[0].click()
})

When('I do scroll inside settings', async function () {
    let object = await this.driver.$("button.settings-menu-delete-button");
    return await object.scrollIntoView();
});

When('I press the All post filter option', async function () {
    let elements = await this.driver.$$('.ember-power-select-selected-item');
    return await elements[0].click()
});

When('I press the All authors filter option', async function () {
    let elements = await this.driver.$$('.ember-power-select-selected-item');
    return await elements[1].click()
});

When('I count number of posts', async function(){
    let elements = await this.driver.$$('h3[class="gh-content-entry-title"]');
    postsBeforeCreate = elements.length;
    return await expect(postsBeforeCreate).to.greaterThan(0);
});

Then('Should have one more post', async function(){
    let elements = await this.driver.$$('h3[class="gh-content-entry-title"]');
    return await expect(postsBeforeCreate).to.lessThan(elements.length);
});

Then('Should have the same amount of posts', async function(){
    let elements = await this.driver.$$('h3[class="gh-content-entry-title"]');
    return await expect(postsBeforeCreate).to.equals(elements.length);
});

Then('Should have one less post', async function(){
    let elements = await this.driver.$$('h3[class="gh-content-entry-title"]');
    return await expect(postsBeforeCreate).to.greaterThan(elements.length);
});

// //end steps delete

//Screenshots
When('I take screenshot of step {string} scenario {string}', async function (step, scenario) {
    var fs = require('fs');
    let path_screenshots = './screenshots/3.41.1/'+scenario;
    let path = path_screenshots + '/' + step + '.png';
    if (!fs.existsSync(path_screenshots)){
        fs.mkdirSync(path_screenshots);
    }
    return await this.driver.takeScreenshot().then(
        function(image) {
            fs.writeFileSync(path, image, 'base64');
        }
    );
});

When('I take screenshot of new ghost step {string} scenario {string}', async function (step, scenario) {
    var fs = require('fs');
    let path_screenshots = './screenshots/4.44.0/'+scenario;
    let path = path_screenshots + '/' + step + '.png';
    if (!fs.existsSync(path_screenshots)){
        fs.mkdirSync(path_screenshots);
    }
    return await this.driver.takeScreenshot().then(
        function(image) {
            fs.writeFileSync(path, image, 'base64');
        }
    );
});
//END Screenshots
