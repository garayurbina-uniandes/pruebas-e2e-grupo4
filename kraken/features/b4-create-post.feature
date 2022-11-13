Feature: Crear post con exito

@user1 @web
Scenario: Como usuario inicio sesión en ghost con datos válidos
And I navigate to page "http://localhost:2368/ghost/#/signin"
When I enter email "a@a.com"
And I wait for 2 seconds
And I enter password "GhAuthorEx1*"
And I wait for 2 seconds
And I click Sign in
And I wait for 2 seconds
And I click post item
And I wait for 2 seconds
And I click on new post
And I wait for 2 seconds
And I enter post title "Mi nuevo post con ghost y kraken"
And I wait for 2 seconds
And I enter post description "Esta es una descripcion de prueba para el post"
And I wait for 2 seconds
And I click on publish post options
And I wait for 2 seconds
And I click on publish post
And I wait for 2 seconds
And I click to return posts list
And I wait for 2 seconds
Then I expect find the new post
