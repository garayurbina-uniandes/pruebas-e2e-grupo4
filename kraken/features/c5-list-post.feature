Feature: Ver todas las entradas

        @user1 @web
        Scenario: Como usuario entro al listado de entradas y filtro por publicadas y por autor
                Given I navigate to page "http://localhost:2368/ghost/#/signin"
                And I take screenshot of step "1" scenario "E17"
                When I enter email "a@a.com"
                And I wait for 1 seconds
                And I take screenshot of step "2" scenario "E17"
                When I enter password "GhAuthorEx1*"
                And I wait for 1 seconds
                And I take screenshot of step "3" scenario "E17"
                When I click Sign in
                And I wait for 1 seconds
                And I take screenshot of step "4" scenario "E17"
                When I navigate to page "http://localhost:2368/ghost/#/posts"
                And I take screenshot of step "5" scenario "E17"
                When I press the All post filter option
                And I take screenshot of step "6" scenario "E17"
                When I press a button with id 'li[data-option-index="2"]'
                And I take screenshot of step "7" scenario "E17"
                When I press the All authors filter option
                And I take screenshot of step "8" scenario "E17"
                When I press a button with id 'li[data-option-index="1"]'
                And I wait for 5 seconds
                And I take screenshot of step "9" scenario "E17"
