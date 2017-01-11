Feature: Engage -- Profile

  As an Engage user
  I want to be able to access my profile page
  So that I can see and edit my information.

  Background:
    Given I load the QAI environment

  Scenario Outline: Login with valid credentials
    When I log in with <username> and <password>
    And I click the "Hi" side panel button
    When the url contains "app/profile"
    And I check if the registered email matches <username>
    When I am on edit mode
    And I update and save my details
    Then after a window refresh, my details remain as saved
    And I revert the original data

    Examples:
      | username                | password        |
      | "dan.iosif@fourth.com"  | "qaz_XSW_12345" |
