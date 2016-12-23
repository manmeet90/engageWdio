Feature: Engage -- Notifications
    As an Engage user
    I want Notifications functionality
    So that I can check my notification alerts properly

    Background:
        Given I visit "fmplogin"
        And I log in with "lionel.adams@fourth.com" and "Password3"


    Scenario: Verify generation of new notification

        Given I note the current notification count
        When I add a new post "Text Notification"
        And I do a @mention for "Approver Testington"
        When I click the "Submit" modal button
        Then I see that count of number of unread notifications increase by 1
