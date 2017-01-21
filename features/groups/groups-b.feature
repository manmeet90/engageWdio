Feature: Engage -- Groups
    As an Engage user
    I want Groups functionality
    So that I can direct my communications to specific groups

    Background:
        Given I load the QAI environment
        And I log in with QAI MP approver credentials
        And I click the "Groups" side panel button
        And I visit the "TS_QAI" group
    
    @watch
    Scenario: I should be able to like a group post
        Given I add a new post "Group Feed"
        And I click the "Submit" button
        Then refresh the feed page
        When I click on Like button
        Then I verify that number of likes on the post become 1

    @watch
    Scenario: I should be able to edit a group post
        Given I add a new post "Group Feed"
        And I click the "Submit" button
        Then refresh the feed page
        When I edit the feed text to "Edited Group Feed Text"
        And I click the "Submit" button
        Then I verify that feed text change to "Edited Group Feed Text"

    @watch
    Scenario: I should be able to reply a group post
        Given I add a new post "Test Feed"
        And I click the "Submit" button
        Then refresh the feed page
        When I add "reply to group post" in the reply section
        Then I verify that "reply to group post" appears on the feed trail
        And number of replies text to post updated to "1"
    
    @watch
    Scenario: I should be able to delete a group post
        Given I add a new post "Test Feed"
        And I click the "Submit" button
        Then refresh the feed page
        When I click on delete button
        And I confirm the deletion
        Then I verify that post is successfully deleted from the feed trail

    Scenario: I should not be able to delete posts of which I m not the creator
          Given I add a new post "Can not delete this Feed"
          And I click the "Submit" button
          And I click the "Sign Out" side panel button
          And I click the "Sign Out" modal button
          And I log in with QAI MP approver credentials
          And I click the "Groups" side panel button
          And I visit the "TS_QAI" group
          When I click on "Can not delete this Feed" post
          Then I verify that delete option is unavailable

    Scenario Outline: I should be able to see chatter feed and Announcements as Group posts
          Given I add a new post "Chatter Feed present in group post"
          When I click the "Submit" button
          Then I verify "Chatter Feed present in group post" appears in the group post
          And I verify <Announcement1> is also present in the group post

    Examples:
              | EditedGroupFeedText       | replyText              | Announcement1   |
              | "Edited Group Feed Text"  | "reply to group post" | "Announcement1" |

    