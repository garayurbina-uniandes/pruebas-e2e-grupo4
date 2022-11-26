describe('Testing Public Tag Creation with valid name on Ghost', () => {
    let imageSequence = 1;
    const prefixPath = '3.41.1/E04';
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
    it('Create Public Tag', () => {
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        //Create Tag with invalid data
        cy.get('a[href="#/tags/"]').should('be.visible');
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('a[href="#/tags/"]').click(); //Select tags section
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('a[href="#/tags/new/"]').click(); // new tag
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('#tag-name').type(randomPool['single_word']) // create Public tag
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click() //save tag
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.gh-btn-green.ember-view')
            .then($value => {
                expect($value.length).to.be.greaterThan(0);
            })
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
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
