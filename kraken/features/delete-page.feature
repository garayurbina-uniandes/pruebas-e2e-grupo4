Feature: Eliminar página con exito

  @user1 @web
  Scenario: Como usuario inicio sesión en ghost con datos válidos
    And I navigate to page "http://localhost:2368/ghost/#/signin"
    When I enter email "j.becerrab@uniandes.edu.co"
    And I wait for 2 seconds
    And I enter password "alemania12"
    And I wait for 2 seconds
    And I click Sign in
    And I wait for 2 seconds
    And I click pages item
    And I wait for 2 seconds
    And I click on existing page
    And I wait for 2 seconds
    And I click on existing page configuration
    And I wait for 2 seconds
    And I do scroll
    And I wait for 2 seconds
    And I click on delete existing page
    And I wait for 2 seconds
    And I click on delete confirmation
