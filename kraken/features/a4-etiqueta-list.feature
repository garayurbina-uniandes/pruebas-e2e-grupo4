Feature: Listar etiquetas

@user1 @web
Scenario: Como usuario visualizo etiquetas internas en ghost
Given I navigate to page "http://localhost:2368/ghost/#/signin"
When I wait for 2 seconds
And I take screenshot of step "1" scenario "E08"
And I enter email "a@a.com"
And I wait for 2 seconds
And I take screenshot of step "2" scenario "E08"
And I enter password "GhAuthorEx1*"
And I wait for 2 seconds
And I take screenshot of step "3" scenario "E08"
And I click Sign in
And I wait for 2 seconds
And I take screenshot of step "4" scenario "E08"
And I select tags section
And I wait for 2 seconds
And I take screenshot of step "5" scenario "E08"
And I filter by internal tags
And I wait for 2 seconds
And I take screenshot of step "6" scenario "E08"
Then I expect to see internal tags
And I take screenshot of step "7" scenario "E08"

@user2 @web
Scenario: Como usuario visualizo el detalle de etiquetas internas en ghost
Given I navigate to page "http://localhost:2368/ghost/#/signin"
When I wait for 2 seconds
And I take screenshot of step "1" scenario "E07"
And I enter email "a@a.com"
And I wait for 2 seconds
And I take screenshot of step "2" scenario "E07"
And I enter password "GhAuthorEx1*"
And I wait for 2 seconds
And I take screenshot of step "3" scenario "E07"
And I click Sign in
And I wait for 2 seconds
And I take screenshot of step "4" scenario "E07"
And I select tags section
And I wait for 2 seconds
And I take screenshot of step "5" scenario "E07"
And I filter by internal tags
And I wait for 2 seconds
And I take screenshot of step "6" scenario "E07"
And I click on existing tag
And I take screenshot of step "7" scenario "E07"
Then I expect to see tag information
And I take screenshot of step "8" scenario "E07"