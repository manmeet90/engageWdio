Feature: Engage -- Feed
    As an Engage user
    I want Feed functionality
    So that I can post and read Feeds posted  on the channel

    Background:
        Given I visit "fmplogin"
        And I log in with "lionel.adams@fourth.com" and "Password3"

    @watch
    Scenario Outline: Verify generation of new Feed
        When I add a new post "Test Feed"
        And I do a @mention for "Approver Testington"
        When I click the "Submit" modal button
        Then I verify Feed body to contain <feedText> and last updated Time to be <feedTime>

    Examples:
        | feedText                       | feedTime                 |
        | "Test Feed@Approver Testington"| "Last Updated Just Now"  |
