Feature: Crear etiqueta

@user1 @web

Scenario: Como primer usuario inicio sesión en ghost

Given I navigate to page "http://localhost:2368/ghost/#/signin"

And I wait for 5 seconds

When I enter email "ghost-author@example.com"

And I wait for 2 seconds

And I enter password "GhAuthorEx1*"

And I wait for 2 seconds

And I click Sign in