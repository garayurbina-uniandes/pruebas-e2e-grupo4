Feature: Iniciar sesión con exito

@user1 @web
Scenario: Como usuario inicio sesión en ghost con datos válidos
Given I navigate to page "http://localhost:2368/ghost/#/signin"
When I take screenshot of step "1" scenario "E01"
And I enter email "a@a.com"
And I take screenshot of step "2" scenario "E01"
And I wait for 2 seconds
And I enter password "GhAuthorEx1*"
And I take screenshot of step "3" scenario "E01"
And I wait for 2 seconds
And I click Sign in
And I wait for 2 seconds
Then I take screenshot of step "4" scenario "E01"