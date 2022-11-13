Feature: Eliminar etiqueta

@user5 @web
Scenario: Como usuario elimino una etiqueta en ghost si existe al menos una
When I navigate to page "http://localhost:2368/ghost/#/signin"
And I enter email "a@a.com"
And I wait for 2 seconds
And I enter password "GhAuthorEx1*"
And I wait for 2 seconds
And I click Sign in
And I wait for 2 seconds
And I select tags section
And I wait for 2 seconds
And I click on existing tag
And I wait for 2 seconds
And I click on delete tag
And I wait for 2 seconds
And I confirm delete tag
And I wait for 2 seconds
