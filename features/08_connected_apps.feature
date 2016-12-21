Feature: Engage -- Connected Apps

  As an Engage user
  I want to be able to access my connected apps
  So that I can use the entire Fourth portfolio of applications

  Background:
    Given I visit "fmplogin"
    And I log in with "dan.iosif@fourth.com" and "qaz_XSW_12345"

  Scenario: Access MarketPlace
    Given I open the "MarketPlace" Connected App
