Feature: Eliminar una entrada

        @user3 @web
        Scenario: Como usuario elimino una entrada, luego verifio que ya no esté listada
                Given I navigate to page "http://localhost:2368/ghost/#/signin"
                And I take screenshot of step "1" scenario "E16"
                When I enter email "a@a.com"
                And I wait for 1 seconds
                And I take screenshot of step "2" scenario "E16"
                When I enter password "GhAuthorEx1*"
                And I wait for 1 seconds
                And I take screenshot of step "3" scenario "E16"
                When I click Sign in
                And I wait for 1 seconds
                And I take screenshot of step "4" scenario "E16"
                When I navigate to page "http://localhost:2368/ghost/#/posts"
                When I count number of posts
                When I select the first post
                And I take screenshot of step "5" scenario "E16"
                When I press settings button
                When I wait for 3 seconds
                And I take screenshot of step "6" scenario "E16"
                When I do scroll inside settings
                And I take screenshot of step "7" scenario "E16"
                When I press a button with id "button.settings-menu-delete-button"
                When I wait for 3 seconds
                And I take screenshot of step "8" scenario "E16"
                When I press a button with id "button.gh-btn-red"
                When I wait for 3 seconds
                And I take screenshot of step "9" scenario "E16"
                Then Should have one less post