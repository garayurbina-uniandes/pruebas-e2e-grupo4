describe('Como usuario creo una entrada y la publico inmediatamente, luego verifico que esté listada', () => {
    let imageSequence = 1;
    const prefixPath = '3.41.1/E13';
    before(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
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
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('a[href="#/posts/"]').first().click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        let postsBeforeCreate = 0;
        cy.get('h3[class="gh-content-entry-title"]')
            .then(($value) => {
                postsBeforeCreate = $value.length
            });
        cy.get('a.ember-view.gh-btn.gh-btn-green').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').type('Kraken Test 4')
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('div[data-placeholder="Begin writing your post..."]').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('.gh-publishmenu').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('.gh-publishmenu-button').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('article.gh-notification.gh-notification-passive.ember-view').should('be.visible');
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('a.blue.link.fw4.flex.items-center.ember-view').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.get('h3[class="gh-content-entry-title"]')
            .then(($value) => {
                expect($value.length).to.equal(postsBeforeCreate + 1)
            });
    })
});

describe('Como usuario creo una entrada, la programo para publicación en 5 minutos y luego verifico que esté listada', () => {
    let imageSequence = 1;
    const prefixPath = '3.41.1/E15';
    before(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
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
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('a[href="#/posts/"]').first().click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        let postsBeforeCreate = 0;
        cy.get('h3[class="gh-content-entry-title"]')
            .then(($value) => {
                postsBeforeCreate = $value.length
            });
        cy.get('a.ember-view.gh-btn.gh-btn-green').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').type('Kraken Test 5')
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('div[data-placeholder="Begin writing your post..."]').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('.gh-publishmenu').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('div.gh-publishmenu-radio-content:last').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('button.gh-publishmenu-button').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('article.gh-notification.gh-notification-passive.ember-view').should('be.visible');
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('a.blue.link.fw4.flex.items-center.ember-view').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.get('h3[class="gh-content-entry-title"]')
            .then(($value) => {
                expect($value.length).to.equal(postsBeforeCreate + 1)
            });
    })
});
