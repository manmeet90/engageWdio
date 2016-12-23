
Feature: Engage -- Groups

  As an Engage user
  I want Groups functionality
  So that I can direct my communications to specific groups


  Background:
    Given I visit "fmplogin"
    And I log in with "lionel.adams@fourth.com" and "Password3"

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

  