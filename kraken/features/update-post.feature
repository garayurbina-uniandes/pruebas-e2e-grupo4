Feature: Actualizar una entrada

        @user3 @web
        Scenario: Como usuario actualizo una entrada, actualizar contenido y sus etiquetas, luego verifico que esté listada
                Given I navigate to page "http://localhost:2368/ghost/#/signin"
                When I enter email "a@a.com"
                And I wait for 1 seconds
                When I enter password "GhAuthorEx1*"
                And I wait for 1 seconds
                When I click Sign in
                And I wait for 1 seconds
                When I navigate to page "http://localhost:2368/ghost/#/posts"
                When I select the first post
                When I enter post title "Kraken Test Post Updated"
                When I wait for 5 seconds
                When I press a button with id 'a[href="#/posts/"]'
                # Then Should exists post with title "Kraken Test Post Updated"