Feature: Engage -- Feed
    As an Engage user
    I want Feed functionality
    So that I can post and read Feeds posted  on the channel

    Background:
        Given I load the QAI environment
        And I log in with QAI MP approver credentials

    Scenario Outline: Verify generation of new Feed

        When I add a new post "Test Feed"
        And I do a @mention in feed for "Buyee testington"
        And I click the "Submit" button
        Then I verify Feed body to contain <feedText> and last updated Time to be <feedTime>

    Examples:
        | feedText                      | feedTime                 |
        | "Test Feed@Buyee Testington"  | "Last Updated Just Now"  |
