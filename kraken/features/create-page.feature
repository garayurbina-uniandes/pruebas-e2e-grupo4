Feature: Iniciar sesión con exito

@user1 @web
Scenario: Como usuario inicio sesión en ghost con datos válidos
And I navigate to page "http://localhost:2368/ghost/#/signin"
When I enter email "a@a.com"
And I wait for 2 seconds
And I enter password "GhAuthorEx1*"
And I wait for 2 seconds
And I click Sign in
And I wait for 2 seconds
And I click pages item
And I wait for 2 seconds
And I click on new page
And I wait for 2 seconds
And I enter page title "Mi nueva página con ghost y kraken"
And I wait for 2 seconds
And I enter page description "Esta es una descripcion de prueba"
And I wait for 2 seconds
And I click on publish page options
And I wait for 2 seconds
And I click on publish page
And I wait for 2 seconds
And I click to return pages list
And I wait for 2 seconds
Then I expect find the new page
