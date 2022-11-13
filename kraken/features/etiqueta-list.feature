Feature: Listar etiquetas

@user1 @web
Scenario: Como usuario visualizo etiquetas internas en ghost
When I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 2 seconds
And I enter email "a@a.com"
And I wait for 2 seconds
And I enter password "GhAuthorEx1*"
And I wait for 2 seconds
And I click Sign in
And I wait for 2 seconds
And I select tags section
And I wait for 2 seconds
And I filter by internal tags
And I wait for 2 seconds
Then I expect to see internal tags

@user2 @web
Scenario: Como usuario visualizo el detalle de etiquetas internas en ghost
When I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 2 seconds
And I enter email "a@a.com"
And I wait for 2 seconds
And I enter password "GhAuthorEx1*"
And I wait for 2 seconds
And I click Sign in
And I wait for 2 seconds
And I select tags section
And I wait for 2 seconds
And I filter by internal tags
And I wait for 2 seconds
And I click on existing tag
Then I expect to see tag information