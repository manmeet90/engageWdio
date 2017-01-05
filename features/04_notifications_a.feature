Feature: Engage -- Notifications
    As an Engage user
    I want Notifications functionality
    So that I can check my notification alerts properly

    Background:
        Given I visit "fmplogin"
        And I log in with "dan.iosif@fourth.com" and "qaz_XSW_12345"

    Scenario: Verify generation of new notification

        Given I note the current notification count
        When I add a new post "Text Notification"
        And I do a @mention for "Buoyee"
        When I click the "Submit" modal button
        Then I see that count of number of unread notifications increase by 1
