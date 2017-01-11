Feature: Engage -- Connected Apps

  As an Engage user
  I want to be able to access my Connected Apps
  So that I can use the entire Fourth portfolio of applications

  Background:
    Given I load the QAI environment
    And I log in with QAI MP user credentials

  Scenario: Access MarketPlace
    Given I open the Connected App directory
    And I click the "MarketPlace" Connected App
    When I check its load performance
    Then I close the current tab
