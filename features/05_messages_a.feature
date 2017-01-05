Feature: Engage -- Messages
    As an Engage user
    I want Message functionality
    So that people can send me private messages and vice versa

    Background:
        Given I visit "fmplogin"
          And I log in with "lionel.adams@fourth.com" and "Password3"
        Given I click the "Messages" side panel button

    Scenario Outline: Verify generation and reply on new message

        When I click on Add new message
        And I do a @mention for "receiver:User Test2"
        And I write <messageText> in the message body
        When I click the "Submit" modal button
        Then I verify Message body to contain <messageText> and last updated Time to be <messageTime>
        When I click on message
        Then I verify message details in <messageText> and <messageAfterTime>
        When I add <replyText>
        And I click on "Post" button
        Then I verify that <replyText> appears on the message trail
<<<<<<< HEAD:features/05_messages_a.feature
=======
        And number of replies text updated to "1"

    Scenario Outline: Verify a user can't @mention himself in the message
        When I click on Add new message
        And I do a @mention for "message_block:Approver Testington"
        Then search result should be empty
        
>>>>>>> c573f3c68f2f8c7d62b434e8f6bebcdce4d6e275:features/05_messages.feature

    Examples:
            | messageText   | messageTime        | messageAfterTime       | replyText                 |
            | "Test Message"| "a few seconds ago"| "Last Updated Just Now"| "Replying to your message"|
