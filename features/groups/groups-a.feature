
Feature: Engage -- Groups

  As an Engage user
  I want Groups functionality
  So that I can direct my communications to specific groups

  Background:
    Given I load the QAI environment
    And I log in with QAI MP user credentials

  Scenario Outline: I should be able to add a new Post in Group with attachment

    Given I click the "Groups" side panel button
    And I visit the "TS_QAI" group
    When I add a new post "Test Feed"
    Then click on attachment button
    And attach file "<fileNameText>"
    Then I should see that file "<fileNameText>" in attachment section on create post form
    When I click the "Submit" modal button
    Then i verify the file name to be "<fileNameText>" on the attachment preview page


    Examples:
            | fileNameText    |
            | Attachment.jpg  |
