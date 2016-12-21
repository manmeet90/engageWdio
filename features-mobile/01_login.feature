Feature: Engage.app -- Login

  As an Engage user
  I want to log in to the application
  So that I can see my data

  Scenario: Login with valid credentials
    Given I launch the application
    And I switch the context to the WebView
    When I log in
    Then I see an unique interface element
