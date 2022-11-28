describe('Create post with post url emoty', () => {
    let dataPool;
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
        cy.wait(2000);
        cy.get('a[href="#/posts/"]').should('be.visible');
        cy.wait(1000);
        cy.get('a[href="#/posts/"]').first().click();
        cy.wait(1000);
        let postsBeforeCreate = 0;
        cy.get('h3[class="gh-content-entry-title"]')
            .then(($value) => {
                postsBeforeCreate = $value.length
            });
        cy.get('a.ember-view.gh-btn.gh-btn-green').click();
        cy.wait(1000);
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').type(dataPool['title'])
        cy.wait(1000);
        cy.get('div[data-placeholder="Begin writing your post..."]').type(dataPool['text'])
        cy.wait(1000);
        cy.get('button.post-settings').click();
        cy.wait(2000);
        cy.get('input[id="url"]').clear();
        cy.wait(2000);
        cy.get('button[class="close settings-menu-header-action"]').click();
        cy.wait(2000);
        cy.get('.gh-publishmenu').click();
        cy.wait(1000);
        cy.get('.gh-publishmenu-button').click();
        cy.wait(1000);
        cy.get('article.gh-notification.gh-notification-passive.ember-view').should('be.visible');
        cy.wait(1000);
        cy.get('a.blue.link.fw4.flex.items-center.ember-view').click();
        cy.wait(1000);
        cy.get('h3[class="gh-content-entry-title"]')
            .then(($value) => {
                expect($value.length).to.equal(postsBeforeCreate + 1)
            });
    })
});
