describe('Como usuario creo una entrada y la publico inmediatamente, luego verifico que esté listada', () => {
    let imageSequence = 1;
    const prefixPath = '3.41.1/E13';
    let randomPool = {bad_string: '', single_word: ''};
    (async function () {
        try {
            const response = await fetch(`https://my.api.mockaroo.com/ghost_pseudo_random.json?key=ee6cfdb0`);
            let  responseJson = await response.json();
            randomPool = getRandomPool(responseJson);
            console.log(randomPool)
        } catch (error) {
            console.log('That did not go well.')
            throw error
        }
    })().catch( e => { console.error(e) })
    before(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
    })
    it('Load Mockaroo', () => {
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
        cy.wait(1000);
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').type(randomPool['single_word'])
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('div[data-placeholder="Begin writing your post..."]').type(randomPool['bad_string'])
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('.gh-publishmenu').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('.gh-publishmenu-button').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('article.gh-notification.gh-notification-passive.ember-view').should('be.visible');
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('a.blue.link.fw4.flex.items-center.ember-view').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.get('h3[class="gh-content-entry-title"]')
            .then(($value) => {
                expect($value.length).to.equal(postsBeforeCreate + 1)
            });
    })
});




function getRandomPool(response){
    if (response !== undefined){
        let randomInt = getRandomInt(0, 10);
        return response[randomInt];
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    
};
