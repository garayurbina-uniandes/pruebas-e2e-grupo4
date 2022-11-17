Feature: Eliminar etiqueta

@user5 @web
Scenario: Como usuario elimino una etiqueta en ghost si existe al menos una
When I navigate to page "http://localhost:2368/ghost/#/signin"
And I enter email "a@a.com"
And I wait for 2 seconds
And I take screenshot of step "1" scenario "E09"
And I enter password "GhAuthorEx1*"
And I wait for 2 seconds
And I take screenshot of step "2" scenario "E09"
And I click Sign in
And I wait for 2 seconds
And I take screenshot of step "3" scenario "E09"
And I select tags section
And I wait for 2 seconds
And I take screenshot of step "4" scenario "E09"
And I click on existing tag
And I wait for 2 seconds
And I take screenshot of step "5" scenario "E09"
And I click on delete tag
And I wait for 2 seconds
And I take screenshot of step "6" scenario "E09"
And I confirm delete tag
And I wait for 2 seconds
And I take screenshot of step "7" scenario "E09"
