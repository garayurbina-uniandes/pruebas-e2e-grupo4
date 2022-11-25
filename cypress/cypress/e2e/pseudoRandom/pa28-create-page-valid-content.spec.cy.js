describe('Como usuario creo una página con contenido válido y validar que se agruegue al listado de páginas', () => {
    let imageSequence = 1;
    const prefixPath = '3.41.1/E10';
    let randomPool;
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
    it('Create an user and login', () => {
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('a@a.com')
            cy.get('input[name="password"]').type('GhAuthorEx1*')
            cy.get('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
        });
    })
    it('Create a page and verifies it exists', ()=> {
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        //Redirected to login
        cy.get('a[href="#/pages/"]').should('be.visible');
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('a[href="#/pages/"]').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        let pageBeforeQuantity = 0;
        let elementToTest = 'h3[class="gh-content-entry-title"]';
        cy.document().then(($document) => { //Check if Element exists
            const documentResult = $document.querySelectorAll(elementToTest)
            if (documentResult.length) {
                cy.get('h3[class="gh-content-entry-title"]')
                    .then(($value) => {
                        pageBeforeQuantity = $value.length
                    });
            }
        })
        cy.get('a[href="#/editor/page/"]').first().click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').type(randomPool['single_word']);
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('div[data-placeholder="Begin writing your page..."]').type(randomPool['single_word']);
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('a[href="#/pages/"]').first().click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.get('h3[class="gh-content-entry-title"]')
            .then(($value) => {
                expect($value.length).to.equal(pageBeforeQuantity + 1)
            });
    });
})

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
