Feature: Eliminar post con exito

  @user1 @web
  Scenario: Como usuario inicio sesión en ghost con datos válidos
    And I navigate to page "http://localhost:2368/ghost/#/signin"
    When I enter email "a@a.com"
    And I wait for 2 seconds
    And I enter password "GhAuthorEx1*"
    And I wait for 2 seconds
    And I click Sign in
    And I wait for 2 seconds
    And I click post item
    And I wait for 8 seconds
    And I click on existing post
    And I wait for 2 seconds
    And I click on existing post configuration
    And I wait for 2 seconds
    And I do scroll
    And I wait for 2 seconds
    And I click on delete existing post
    And I wait for 2 seconds
    And I click on delete confirmation
    Then I expect delete a post
