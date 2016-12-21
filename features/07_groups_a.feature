Feature: Engage -- Groups

  As an Engage user
  I want Groups functionality
  So that I can direct my communication properly

  Background:
    Given I visit "fmplogin"
    And I log in with "dan.iosif@fourth.com" and "qaz_XSW_12345"

  Scenario: Add a new Feed Item with attachment and @mention
    Given I click the "Groups" side panel button
    And I visit the "TS_QAI" group
    When I add a new post
    And I do a @mention for "Approver Testington"
    And I add an attachment
    When I click the "Submit" modal button
    Then I see the new Feed post
