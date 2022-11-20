Feature: Agregar una imagen a una página con exito

  @user1 @web
  Scenario: Como usuario agrego una imagen a una página y validar que se agrugue al formulario
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I enter email "a@a.com"
    And I wait for 2 seconds
    And I take screenshot of step "1" scenario "E12"
    And I enter password "GhAuthorEx1*"
    And I wait for 2 seconds
    And I take screenshot of step "2" scenario "E12"
    And I click Sign in
    And I wait for 2 seconds
    And I take screenshot of step "3" scenario "E12"
    And I click pages item
    And I wait for 2 seconds
    And I take screenshot of step "4" scenario "E12"
    And I click on existing page
    And I wait for 2 seconds
    And I take screenshot of step "5" scenario "E12"
    And I click on existing page configuration
    And I wait for 2 seconds
    And I take screenshot of step "6" scenario "E12"
    And I click on add image
    And I wait for 2 seconds
    And I take screenshot of step "7" scenario "E12"
    And I click on image
    And I wait for 5 seconds
    And I take screenshot of step "8" scenario "E12"
    Then I expect find images
