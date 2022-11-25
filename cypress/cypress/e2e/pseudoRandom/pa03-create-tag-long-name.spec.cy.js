describe('Testing Tag Creation with Invalid data, very long Name on Ghost', () => {
    let imageSequence = 1;
    const prefixPath = '3.41.1/E03';
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
    it('Login', () => {
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('a@a.com')
            cy.get('input[name="password"]').type('GhAuthorEx1*')
            cy.get('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
        });
    })
    it('Create tag with invalid data', () => {
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        //Create Tag with invalid data
        cy.get('a[href="#/tags/"]').should('be.visible');
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true})
        cy.wait(1000);
        cy.get('a[href="#/tags/"]').click(); //Select tags section
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true})
        cy.wait(2000);
        cy.get('a[href="#/tags/new/"]').click(); // new tag
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.get('#tag-name').type(randomPool['very_long_string'], { delay: 0}) // create Public tag with very
        cy.wait(2000);
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click() //save tag
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.get('.error')
            .then($value => {
                expect($value.length).to.be.greaterThan(0);
            })
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