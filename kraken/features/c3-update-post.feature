Feature: Actualizar una entrada

        @user3 @web
        Scenario: Como usuario actualizo una entrada y luego verifico que esté listada
                Given I navigate to page "http://localhost:2368/ghost/#/signin"
                And I take screenshot of step "1" scenario "E14"
                When I enter email "a@a.com"
                And I wait for 1 seconds
                And I take screenshot of step "2" scenario "E14"
                When I enter password "GhAuthorEx1*"
                And I wait for 1 seconds
                And I take screenshot of step "3" scenario "E14"
                When I click Sign in
                And I wait for 1 seconds
                And I take screenshot of step "4" scenario "E14"
                When I navigate to page "http://localhost:2368/ghost/#/posts"
                When I count number of posts
                And I take screenshot of step "5" scenario "E14"
                When I select the first post
                And I take screenshot of step "6" scenario "E14"
                When I enter post title "Kraken Test Post Updated"
                When I wait for 5 seconds
                And I take screenshot of step "7" scenario "E14"
                When I press a button with id ".gh-publishmenu"
                And I take screenshot of step "8" scenario "E14"
                When I press a button with id ".gh-publishmenu-button"
                And I take screenshot of step "9" scenario "E14"
                When I press a button with id 'a[href="#/posts/"].blue.link.fw4'
                And I take screenshot of step "10" scenario "E14"
                Then Should have the same amount of posts