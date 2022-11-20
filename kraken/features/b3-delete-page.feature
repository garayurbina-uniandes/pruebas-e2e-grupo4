Feature: Eliminar página con exito

  @user1 @web
  Scenario: Como usuario elimino una página y validar que se ya no este en el listado de páginas
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I enter email "a@a.com"
    And I wait for 2 seconds
    And I take screenshot of step "1" scenario "E11"
    And I enter password "GhAuthorEx1*"
    And I wait for 2 seconds
    And I take screenshot of step "2" scenario "E11"
    And I click Sign in
    And I wait for 2 seconds
    And I take screenshot of step "3" scenario "E11"
    And I click pages item
    And I wait for 2 seconds
    And I take screenshot of step "4" scenario "E11"
    And I click on existing page
    And I wait for 2 seconds
    And I take screenshot of step "5" scenario "E11"
    And I click on existing page configuration
    And I wait for 2 seconds
    And I take screenshot of step "6" scenario "E11"
    And I do scroll
    And I wait for 2 seconds
    And I take screenshot of step "7" scenario "E11"
    And I click on delete existing page
    And I wait for 2 seconds
    And I take screenshot of step "8" scenario "E11"
    Then I click on delete confirmation
