Feature: Engage -- Login

  As an Engage user
  I want to log in to the application
  So that I can see my data

  Background:
    Given I load the QAI environment

  Scenario: Login with valid credentials
    When I log in with QAI MP user credentials
    Then I see the "Feed" side panel button

  Scenario Outline: Login with invalid credentials
    When I log in with <username> and <password>
    Then I see <error> login error

    Examples:
      | username            | password   | error                                                                             |
      | ""                  | ""         | "Your username and/or password is not correct."                                   |
      | "improper@user.com" | "password" | "Your login attempt has failed. Make sure the username and password are correct." |
