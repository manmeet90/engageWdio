Feature: Engage -- Messages
    As an Engage user
    I want Message functionality
    So that people can send me private messages and vice versa

    Background:
        Given I load the QAI environment
        And I log in with QAI MP approver credentials
        And I click the "Messages" side panel button
@watch
    Scenario Outline: Verify generation and reply on new message

        When I click on Add new message
        And I do a @mention for "receiver:Buoyee"
        And I write <messageText> in the message body
        And I click the "Submit" modal button
        Then I verify Message body to contain <messageText> and last updated Time to be <messageTime>
        And I verify message has "Reply" button
        And message has number of replies text with value "0"
        When I click on message
        Then I verify message details in <messageText> and <messageAfterTime>
        When I add <replyText>
        And I click on "Post" button
        Then I verify that <replyText> appears on the message trail
        And number of replies text updated to "1"


    Examples:
            | messageText   | messageTime        | messageAfterTime       | replyText                 |
            | "Test Message"| "a few seconds ago"| "Last Updated Just Now"| "Replying to your message"|
