describe('Create post with publish date in the past', () => {
    let dataPool;
    let imageSequence = 1;
    const prefixPath = '3.41.1';
    try {
        const data = require('./data/apriori.json');
        dataPool = data[Math.floor(Math.random() * data.length)];
        console.log(dataPool)
    } catch (error) {
        console.log('That did not go well.')
        throw error
    }
    before(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
    })
    it('Load data', () => {
        cy.wait(1000);
    })
    it('Login', () => {
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('a@a.com')
            cy.get('input[name="password"]').type('GhAuthorEx1*')
            cy.get('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
        });
    })

    it('Create a post', () => {
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('a[href="#/posts/"]').should('be.visible');
        cy.wait(1000);
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.get('a[href="#/posts/"]').first().click();
        cy.wait(1000);
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        let postsBeforeCreate = 0;
        cy.get('h3[class="gh-content-entry-title"]')
            .then(($value) => {
                postsBeforeCreate = $value.length
            });
        cy.get('a.ember-view.gh-btn.gh-btn-green').click();
        cy.wait(1000);
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').type(dataPool['title'])
        cy.wait(1000);
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.get('div[data-placeholder="Begin writing your post..."]').type(dataPool['text'])
        cy.wait(1000);
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.get('.gh-publishmenu').click();
        cy.wait(1000);
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.get('div.gh-publishmenu-radio-content:last').click();
        cy.wait(2000);
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.contains('div', 'Ready to publish your post?').find('input').first().clear().type(dataPool['pastDate']);
        cy.wait(1000);
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.get('.gh-publishmenu-button').click();
        cy.wait(1000);
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.get('div[class="gh-date-time-picker-error"]')
            .then($value => {
                expect($value.length).to.equal(2)
            })
    })
});
