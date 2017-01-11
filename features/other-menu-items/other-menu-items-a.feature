Feature: Engage -- Other Menu Items

  As an Engage user
  I want to be able to access all extra side panel items
  So that I can access relevant information

  Background:
    Given I load the QAI environment
    And I log in with QAI MP user credentials

  Scenario Outline: Access the other menu items
    Given I click the <other-items> side panel button
    And I see <item> item
    When I click the <item> item
    Then I see relevant <section> information

  Examples:
  | other-items | item         | section  |
  | "Suppliers" | "suppliers1" | supplier |
  | "Services"  | "123"        | service  |
  | "Notices"   | "Notice"     | notice   |
  | "Help"      | "Help 123"   | help     |
