Feature: Crear una entrada

        @user2 @web
        Scenario: Como usuario creo una entrada, la programo para publicación en 5 minutos, espero ese tiempo y luego verifico que esté listada
                Given I navigate to page "http://localhost:2368/ghost/#/signin"
                When I enter email "a@a.com"
                And I wait for 1 seconds
                And I take screenshot of step "1" scenario "E15"
                When I enter password "GhAuthorEx1*"
                And I wait for 1 seconds
                And I take screenshot of step "2" scenario "E15"
                When I click Sign in
                And I wait for 1 seconds
                And I take screenshot of step "3" scenario "E15"
                When I navigate to page "http://localhost:2368/ghost/#/posts"
                When I count number of posts
                When I press New Post button
                And I wait for 1 seconds
                And I take screenshot of step "4" scenario "E15"
                When I enter post title "Kraken Test 2"
                And I wait for 1 seconds
                And I take screenshot of step "5" scenario "E15"
                When I enter post description "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                And I take screenshot of step "6" scenario "E15"
                When I press a button with id ".gh-publishmenu"
                And I take screenshot of step "7" scenario "E15"
                When I press the schedule option
                And I take screenshot of step "8" scenario "E15"
                When I press a button with id "button.gh-publishmenu-button"
                And I take screenshot of step "9" scenario "E15"
                When I press a button with id 'a[href="#/posts/"]'
                When I wait for 1 seconds
                And I take screenshot of step "10" scenario "E15"
                Then Should have one more post



