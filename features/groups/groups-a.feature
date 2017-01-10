Feature: Engage -- Groups
    As an Engage user
    I want Groups functionality
    So that I can direct my communications to specific groups

    Scenario Outline: I should be able to add a new Post with attachment in Group and verify the preview
        Given I load the QAI environment
        And I log in with QAI MP user credentials
        And I click the "Groups" side panel button
        And I visit the "TS_QAI" group
        When I add a new post "Test Feed"
        And I click on attachment button
        And I attach file "<fileNameText>"
        And I click the "Submit" button
        Then i verify the file name to be "<fileNameText>" on the attachment preview page

        Examples:
            | fileNameText |
            | Attachment.jpg |
