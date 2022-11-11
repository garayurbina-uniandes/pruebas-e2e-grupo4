Feature: Crear etiqueta

@user1 @web
Scenario: Como usuario registro una etiqueta en ghost con datos vacíos
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
And I click on new tag
And I wait for 2 seconds
And I click on save tag
Then I expect to not be able to create a tag

@user2 @web
Scenario: Como usuario registro una etiqueta externa en ghost con datos validos
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
And I click on new tag
And I wait for 2 seconds
And I enter tag name "tagmajal"
And I wait for 2 seconds
And I click on save tag
And I wait for 2 seconds

@user3 @web
Scenario: Como usuario registro una etiqueta interna en ghost con datos validos
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
And I click on new tag
And I wait for 2 seconds
And I enter tag name "#interna"
And I wait for 2 seconds
And I click on save tag
And I wait for 2 seconds

@user4 @web
Scenario: Como usuario visualizo una etiqueta creada en ghost si existe al menos una
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
Then I expect to see tag information

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
