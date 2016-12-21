Feature: Engage -- Notifications
    As an Engage user
    I want Notifications functionality
    So that I can check my notification alerts properly

    Background:
        Given I visit "fmplogin"
        And I log in with "lionel.adams@fourth.com" and "Password3"
        When I add a new post
        And I do a @mention for "Sumana user"
        When I click the "Submit" modal button

    Scenario: Verify generation of new notification

        Given I click the "Notifications" side panel button
        Then I see that count of number of unread notifications increase by 1
