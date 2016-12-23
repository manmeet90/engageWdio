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
        And I do a @mention for "message_block:Buyee"
        And I write the message body
        When I click the "Submit" modal button
        Then I verify Message body to contain <messageText> and last updated Time to be <messageTime>
        Then I verify message has "Reply" button
        And message has number of replies text with value "0"
        When I click on message
        Then I verify message details in <messageText> and <messageAfterTime>
        When I add <replyText>
        And I click on Post
        Then I verify that <replyText> appears on the message trail
        And number of replies text updated to "1"

    @watch
    Scenario Outline: Verify a user can't @mention himself in the message
        When I click on Add new message
        And I do a @mention for "message_block:Approver Testington"
        Then search result should be empty
        

    Examples:
            | messageText   | messageTime        | messageAfterTime       | replyText                 | mentionedUser | loggedInUser        |
            | "Test Message"| "a few seconds ago"| "Last Updated Just Now"| "Replying to your message"| "Buyee"       | Approver Testington |
