Feature: Agregar una imagen a una página con exito

  @user1 @web
  Scenario: Como usuario inicio sesión en ghost con datos válidos
    And I navigate to page "http://localhost:2368/ghost/#/signin"
    When I enter email "a@a.com"
    And I wait for 2 seconds
    And I enter password "GhAuthorEx1*"
    And I wait for 2 seconds
    And I click Sign in
    And I wait for 2 seconds
    And I click pages item
    And I wait for 2 seconds
    And I click on existing page
    And I wait for 2 seconds
    And I click on existing page configuration
    And I wait for 2 seconds
    And I click on add image
    And I wait for 2 seconds
    And I click on image
    And I wait for 5 seconds
    Then I expect find images
