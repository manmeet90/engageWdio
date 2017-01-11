Feature: Engage -- Logout

  As an Engage user
  I want to log out of the application
  So that I can go on with life

  Background:
    Given I load the QAI environment
    And I log in with QAI MP user credentials

  Scenario: Attempting Logout and cancelling
    When I click the "Sign Out" side panel button
    And I click the "Cancel" modal button
    Then I see the "Sign Out" side panel button

  Scenario: Attempting Logout and confirming
    When I click the "Sign Out" side panel button
    And I click the "Sign Out" modal button
    Then I see "fourth.com"
