Feature: Crear una entrada

        @user1 @web
        Scenario: Como usuario creo una entrada y la publico inmediatamente, luego verifico que esté listada
                Given I navigate to page "http://localhost:2368/ghost/#/signin"
                And I take screenshot of step "1" scenario "E13"
                When I enter email "a@a.com"
                And I wait for 1 seconds
                And I take screenshot of step "2" scenario "E13"
                When I enter password "GhAuthorEx1*"
                And I wait for 1 seconds
                And I take screenshot of step "3" scenario "E13"
                When I click Sign in
                And I wait for 1 seconds
                And I take screenshot of step "4" scenario "E13"
                When I navigate to page "http://localhost:2368/ghost/#/posts"
                When I count number of posts
                When I press New Post button
                And I wait for 1 seconds
                And I take screenshot of step "5" scenario "E13"
                When I enter post title "Kraken Test 1"
                And I wait for 1 seconds
                And I take screenshot of step "6" scenario "E13"
                When I enter post description "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                And I take screenshot of step "7" scenario "E13"
                When I press a button with id ".gh-publishmenu"
                And I take screenshot of step "8" scenario "E13"
                When I press a button with id ".gh-publishmenu-button"
                And I take screenshot of step "9" scenario "E13"
                When I press a button with id 'a[href="#/posts/"]'
                And I wait for 1 seconds
                And I take screenshot of step "10" scenario "E13"
                Then Should have one more post


