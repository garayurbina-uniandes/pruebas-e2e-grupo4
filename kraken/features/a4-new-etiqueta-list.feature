Feature: Listar etiquetas

@user1 @web
Scenario: Como usuario visualizo etiquetas internas en ghost
Given I navigate to page "http://localhost:3002/ghost/#/signin"
When I wait for 1 seconds
And I take screenshot of new ghost step "1" scenario "E08"
And I enter email "a@a.com"
And I wait for 1 seconds
And I take screenshot of new ghost step "2" scenario "E08"
And I enter password "GhAuthorEx1*"
And I wait for 1 seconds
And I take screenshot of new ghost step "3" scenario "E08"
And I click Sign in
And I wait for 1 seconds
And I take screenshot of new ghost step "4" scenario "E08"
And I select tags section
And I wait for 1 seconds
And I take screenshot of new ghost step "5" scenario "E08"
And I filter by internal tags
And I wait for 1 seconds
And I take screenshot of new ghost step "6" scenario "E08"
Then I expect to see internal tags
And I take screenshot of new ghost step "7" scenario "E08"