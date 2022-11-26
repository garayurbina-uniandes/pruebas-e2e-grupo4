describe('Testing Register on Ghost', () => {
    let imageSequence = 1;
    const prefixPath = '3.41.1/E02';
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
    it('Register', () => {
        cy.get('#ember12').click();
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('#blog-title').type(randomPool['single_word']);
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('#name').type(randomPool['single_word']);
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('#email').type('a@a.com');
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('#password').type('GhAuthorEx1*');
        cy.screenshot(`${prefixPath}/${imageSequence++}`, {overwrite: true});
        cy.wait(1000);
        cy.get('#ember29').click(); //Register user
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