Feature: Actualizar una entrada

        @user3 @web
        Scenario: Como usuario actualizo una entrada y luego verifico que esté listada
                Given I navigate to page "http://localhost:2368/ghost/#/signin"
                When I enter email "a@a.com"
                And I wait for 1 seconds
                When I enter password "GhAuthorEx1*"
                And I wait for 1 seconds
                When I click Sign in
                And I wait for 1 seconds
                When I navigate to page "http://localhost:2368/ghost/#/posts"
                When I count number of posts
                When I select the first post
                When I enter post title "Kraken Test Post Updated"
                When I wait for 5 seconds
                When I press a button with id ".gh-publishmenu"
                When I press a button with id ".gh-publishmenu-button"
                When I press a button with id 'a[href="#/posts/"].blue.link.fw4'
                Then Should have the same amount of posts