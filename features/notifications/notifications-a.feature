Feature: Engage -- Notifications
    As an Engage user
    I want Notifications functionality
    So that I can check my notification alerts properly

    Background:
        Given I load the QAI environment
        And I log in with QAI MP user credentials

    Scenario: Verify generation of new notification
        Given I note the current notification count
        When I add a new post "Text Notification"
        And I do a @mention in feed for "Buyee"
        And I click the "Submit" button
        Then I see that count of number of unread notifications increase by 1
