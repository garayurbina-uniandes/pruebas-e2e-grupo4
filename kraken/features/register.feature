Feature: Registrar usuario

@user1 @web

Scenario: Como primer usuario registro en ghost

Given I navigate to page "http://localhost:2368/ghost/#/setup/one"

And I wait for 5 seconds

And I click Sign in

And I wait for 2 seconds

And I enter site title "titulo"

And I wait for 2 seconds

And I enter full name

And I wait for 2 seconds

And I enter register email

And I wait for 2 seconds

And I enter pass

And I wait for 2 seconds

And I register my user

And I wait for 2 seconds

And I send a signal to user 2 containing "login"