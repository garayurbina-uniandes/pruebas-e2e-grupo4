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
    let element = await this.driver.$('#ember10');
    return await element.setValue(password);
});

When('I click Sign in', async function () {
    let element = await this.driver.$('#ember12');
    return await element.click();
})

When('I register my user', async function () {
    let element = await this.driver.$('#ember29');
    return await element.click();
})

// Login Steps END

//Etiquetas Steps BEGIN
When('I select tags section', async function () {
    let element = await this.driver.$('#ember38');
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
    let formPage = await this.driver.$("form");
    return await formPage.scrollIntoView();
});

When('I click on delete existing page', async function () {
    let element = await this.driver.$("button.settings-menu-delete-button")
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

//post creation steps
// When('I click post item', async function() {
//     let element = await this.driver.$('#ember12');
//     return await element.click();
// });

// When('I click on new post', async function(){
//     let elements = await this.driver.$$('h3[class="gh-content-entry-title"]');
//     postBeforeQuantity = elements.length;


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

When('I add the Tag {string}', async function (tag) {
    let element = await this.driver.$('label[for="tag-input"]');
    let parent = element.parentNode
    // let element = await this.driver.$('#ember-power-select-trigger-multiple-input-ember54');
    return await element.setValue(tag);
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
    console.log(element[0]);
    console.log(element.length);
    console.log(element.map((e) => e.emit()));
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
    let formPage = await this.driver.$("button.settings-menu-delete-button");
    return await formPage.scrollIntoView();
});

When('I press the All post filter option', async function () {
    let elements = await this.driver.$$('.ember-power-select-selected-item');
    return await elements[0].click()
});

When('I press the All authors filter option', async function () {
    let elements = await this.driver.$$('.ember-power-select-selected-item');
    return await elements[1].click()
});

// End create a post
// When('I click on publish post options', async function(){
//     let element = await this.driver.$('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger');
//     return await element.click();
// });

// When('I click on publish post', async function(){
//     let element = await this.driver.$('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view');
//     return await element.click();
// });

// When('I click to return posts list', async function(){
//     let element = await this.driver.$('a[href="#/posts/"]');
//     return await element.click();
// });

// Then('I expect find the new post', async function(){
//     let elements = await this.driver.$$('h3[class="gh-content-entry-title"]');
//     return await expect(elements.length).to.greaterThan(0);
// });
// //finish post creation

// //delete post steps
// When('I click on existing post', async function(){
//     let element = await this.driver.$("li.gh-list-row.gh-posts-list-item")
//     return await element.click();
// });

// When('I click on existing post configuration', async function(){
//     let element = await this.driver.$("button.post-settings")
//     return await element.click();
// });

// When('I do scroll', async function(){
//     let formPage = await this.driver.$("form");
//     return await formPage.scrollIntoView();
// });

// When('I click on delete existing post', async function(){
//     let element = await this.driver.$("button.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button")
//     return await element.click();
// });

// When('I click on delete confirmation', async function(){
//     let element = await this.driver.$(".gh-btn.gh-btn-red.gh-btn-icon.ember-view")
//     return await element.click();
// });

// Then('I expect delete a post', async function(){
//     let elements = await this.driver.$$('h3[class="gh-content-entry-title"]');
//     return await expect(postBeforeQuantity).to.greaterThan(elements.length);
// });
// //end steps delete
