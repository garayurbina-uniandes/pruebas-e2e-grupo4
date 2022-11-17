Feature: Crear una página con exito

@user1 @web
Scenario: Como usuario creo una página y validar que se agruegue al listado de páginas
And I navigate to page "http://localhost:2368/ghost/#/signin"
When I enter email "a@a.com"
And I wait for 2 seconds
And I take screenshot of step "1" scenario "E10"
And I enter password "GhAuthorEx1*"
And I wait for 2 seconds
And I take screenshot of step "2" scenario "E10"
And I click Sign in
And I wait for 2 seconds
And I take screenshot of step "3" scenario "E10"
And I click pages item
And I wait for 2 seconds
And I take screenshot of step "4" scenario "E10"
And I click on new page
And I wait for 2 seconds
And I take screenshot of step "5" scenario "E10"
And I enter page title "Mi nueva página con ghost y kraken"
And I wait for 2 seconds
And I take screenshot of step "6" scenario "E10"
And I enter page description "Esta es una descripcion de prueba"
And I wait for 2 seconds
And I take screenshot of step "7" scenario "E10"
And I click on publish page options
And I wait for 2 seconds
And I take screenshot of step "8" scenario "E10"
And I click on publish page
And I wait for 2 seconds
And I take screenshot of step "9" scenario "E10"
And I click to return pages list
And I wait for 2 seconds
And I take screenshot of step "10" scenario "E10"
Then I expect find the new page
