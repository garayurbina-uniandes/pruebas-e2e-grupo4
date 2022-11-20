Feature: Crear etiqueta

@user1 @web
Scenario: Como usuario registro una etiqueta en ghost con datos vacíos
Given I navigate to page "http://localhost:2368/ghost/#/signin"
When I wait for 2 seconds
And I take screenshot of step "1" scenario "E03"
And I enter email "a@a.com"
And I wait for 2 seconds
And I take screenshot of step "2" scenario "E03"
And I enter password "GhAuthorEx1*"
And I wait for 2 seconds
And I take screenshot of step "3" scenario "E03"
And I click Sign in
And I wait for 2 seconds
And I take screenshot of step "4" scenario "E03"
And I select tags section
And I wait for 2 seconds
And I take screenshot of step "5" scenario "E03"
And I click on new tag
And I wait for 2 seconds
And I take screenshot of step "6" scenario "E03"
And I click on save tag
And I take screenshot of step "7" scenario "E03"
Then I expect to not be able to create a tag
And I take screenshot of step "8" scenario "E03"

@user2 @web
Scenario: Como usuario registro una etiqueta externa en ghost con datos validos
Given I navigate to page "http://localhost:2368/ghost/#/signin"
When I wait for 2 seconds
And I take screenshot of step "1" scenario "E04"
And I enter email "a@a.com"
And I wait for 2 seconds
And I take screenshot of step "2" scenario "E04"
And I enter password "GhAuthorEx1*"
And I wait for 2 seconds
And I take screenshot of step "3" scenario "E04"
And I click Sign in
And I wait for 2 seconds
And I take screenshot of step "4" scenario "E04"
And I select tags section
And I wait for 2 seconds
And I take screenshot of step "5" scenario "E04"
And I click on new tag
And I wait for 2 seconds
And I take screenshot of step "6" scenario "E04"
And I enter tag name "tagmajal"
And I wait for 2 seconds
And I take screenshot of step "7" scenario "E04"
And I click on save tag
And I wait for 2 seconds
Then I take screenshot of step "8" scenario "E04"

@user3 @web
Scenario: Como usuario registro una etiqueta interna en ghost con datos validos
Given I navigate to page "http://localhost:2368/ghost/#/signin"
When I wait for 2 seconds
And I take screenshot of step "1" scenario "E05"
And I enter email "a@a.com"
And I wait for 2 seconds
And I take screenshot of step "2" scenario "E05"
And I enter password "GhAuthorEx1*"
And I wait for 2 seconds
And I take screenshot of step "3" scenario "E05"
And I click Sign in
And I wait for 2 seconds
And I take screenshot of step "4" scenario "E05"
And I select tags section
And I wait for 2 seconds
And I take screenshot of step "5" scenario "E05"
And I click on new tag
And I wait for 2 seconds
And I take screenshot of step "6" scenario "E05"
And I enter tag name "#interna"
And I wait for 2 seconds
And I take screenshot of step "7" scenario "E05"
And I click on save tag
And I wait for 2 seconds
Then I take screenshot of step "8" scenario "E05"

@user4 @web
Scenario: Como usuario visualizo una etiqueta creada en ghost si existe al menos una
Given I navigate to page "http://localhost:2368/ghost/#/signin"
When I take screenshot of step "1" scenario "E06"
And I enter email "a@a.com"
And I wait for 2 seconds
And I take screenshot of step "2" scenario "E06"
And I enter password "GhAuthorEx1*"
And I wait for 2 seconds
And I take screenshot of step "3" scenario "E06"
And I click Sign in
And I wait for 2 seconds
And I take screenshot of step "4" scenario "E06"
And I select tags section
And I wait for 2 seconds
And I take screenshot of step "5" scenario "E06"
And I click on existing tag
And I take screenshot of step "6" scenario "E06"
Then I expect to see tag information
And I take screenshot of step "7" scenario "E06"