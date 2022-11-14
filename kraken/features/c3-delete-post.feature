Feature: Eliminar una entrada

        @user3 @web
        Scenario: Como usuario elimino una entrada, luego verifio que ya no esté listada
                Given I navigate to page "http://localhost:2368/ghost/#/signin"
                When I enter email "a@a.com"
                And I wait for 1 seconds
                When I enter password "GhAuthorEx1*"
                And I wait for 1 seconds
                When I click Sign in
                And I wait for 1 seconds
                When I navigate to page "http://localhost:2368/ghost/#/posts"
                When I select the first post
                When I press settings button
                When I wait for 3 seconds
                When I do scroll inside settings
                When I press a button with id "button.settings-menu-delete-button"
                When I wait for 3 seconds
                When I press a button with id "button.gh-btn-red"
                When I wait for 3 seconds
                Then Should no exist post