Feature: Crear una entrada

        @user1 @web
        Scenario: Como usuario creo una entrada y la publico inmediatamente, luego verifico que esté listada
                Given I navigate to page "http://localhost:2368/ghost/#/signin"
                When I enter email "a@a.com"
                And I wait for 1 seconds
                When I enter password "GhAuthorEx1*"
                And I wait for 1 seconds
                When I click Sign in
                And I wait for 1 seconds
                When I navigate to page "http://localhost:2368/ghost/#/posts"
                When I count number of posts
                When I press New Post button
                And I wait for 1 seconds
                When I enter post title "Kraken Test 1"
                And I wait for 1 seconds
                When I enter post description "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                When I press a button with id ".gh-publishmenu"
                When I press a button with id ".gh-publishmenu-button"
                When I press a button with id 'a[href="#/posts/"]'
                And I wait for 1 seconds
                Then Should have one more post


