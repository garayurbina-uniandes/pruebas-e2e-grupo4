Feature: Registrar usuario

@user1 @web

Scenario: Como primer usuario registro mi cuenta en ghost

Given I navigate to page "http://localhost:3002/ghost/#/setup"
When I wait for 2 seconds
And I take screenshot of new ghost step "2" scenario "E02"
And I enter site title "titulo"
And I wait for 2 seconds
And I take screenshot of new ghost step "3" scenario "E02"
And I enter full name
And I wait for 2 seconds
And I take screenshot of new ghost step "4" scenario "E02"
And I enter register email
And I wait for 2 seconds
And I take screenshot of new ghost step "5" scenario "E02"
And I enter pass
And I wait for 2 seconds
And I take screenshot of new ghost step "6" scenario "E02"
And I register my user
And I wait for 2 seconds
Then I take screenshot of new ghost step "7" scenario "E02"