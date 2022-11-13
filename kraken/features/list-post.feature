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
                When I press the All post filter option
                When I press a button with id 'li[data-option-index="2"]'
                When I press the All authors filter option
                When I press a button with id 'li[data-option-index="1"]'
                And I wait for 9999 seconds
