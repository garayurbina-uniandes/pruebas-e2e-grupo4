describe('Testing Login on Ghost With invalid user and password', () => {
    let imageSequence = 1;
    const prefixPath = '3.41.1/E01';
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
            cy.get('input[name="identification"]').type(randomPool['single_word'])
            cy.get('input[name="password"]').type('GhAuthorEx1*')
            cy.get('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
        });
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(2000);
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.get('p[class="main-error"]') //Expect have error for invalid data
            .then($value => {
                expect($value.length).to.equal(1)
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