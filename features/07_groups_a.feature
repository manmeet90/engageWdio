
Feature: Engage -- Groups

  As an Engage user
  I want Groups functionality
  So that I can direct my communications to specific groups

  Background:
    Given I visit "fmplogin"
    And I log in with "dan.iosif@fourth.com" and "qaz_XSW_12345"

  Scenario Outline: I should be able to add a new Post in Group with attachment

<<<<<<< HEAD
    Given I click the "Groups" side panel button
    And I visit the "TS_QAI" group
    When I add a new post "Test Feed"
    Then click on attachment button
    And attach file "<fileNameText>"
    Then I should see that file "<fileNameText>" in attachment section on create post form
    When I click the "Submit" modal button
    Then i verify the file name to be "<fileNameText>" on the attachment preview page


    Examples:
            | fileNameText  |
            | cat.jpg       |
=======
  @watch
  Scenario: I should be able to add a new Post in Group with attachment
    Given I click the "Groups" side panel button
    And I visit the "TS_QAI" group
    When I click on new post button
    Then click on attachment button
    And attach file "C:\Users\Sony\Desktop\world.jpg"
    Then I should see that file "world.jpg" in attachment section on create post form
    Then I add post content "Test Message"
    And click on "Submit" button
    Then I should see the post on Feed

  
>>>>>>> c573f3c68f2f8c7d62b434e8f6bebcdce4d6e275
