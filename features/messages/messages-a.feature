Feature: Engage -- Messages
    As an Engage user
    I want Message functionality
    So that people can send me private messages and vice versa

    Background:
        Given I load the QAI environment
        And I log in with QAI MP user credentials
        And I click the "Messages" side panel button

    Scenario: Verify a user can't @mention himself in the message
        Given I click on Add new message
        When I do a @mention in message for "receiver:Buyee"
        Then search result should be empty

    Scenario Outline: Verify generation of reply on new message
        Given I click on Add new message
        And I do a @mention in message for "receiver:Approver Testington"
        And I write <messageText> in the message body
        And I click the "Submit" button
        And message has number of replies text with value "0"
        And I click on message
        When I add <replyText>
        And I click on "Post" button
        Then I verify that <replyText> appears on the message trail
        And number of replies text updated to "1"

    Examples:
              | messageText    | messageTime         | messageAfterTime        | replyText                  |
              | "Test Message" | "a few seconds ago" | "Last Updated Just Now" | "Replying to your message" |

    Scenario Outline: Verify generation of a new message
        Given I click on Add new message
        And I do a @mention in message for "receiver:Approver Testington"
        When I write <messageText> in the message body
        And I click the "Submit" button
        And I click on message
        Then I verify message details in <messageText> and <messageAfterTime>

   Examples:
            | messageText    | messageTime         | messageAfterTime        | replyText                  |
            | "Test Message" | "a few seconds ago" | "Last Updated Just Now" | "Replying to your message" |
