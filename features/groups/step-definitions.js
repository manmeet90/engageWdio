var Page = require('../../pageobjects/page');
var MainPage = require('../../pageobjects/main.page');
var GroupsPage = require('../../pageobjects/groups.page');
var path = require("path");

module.exports = function() {

    this.Given(/^I visit the "([^"]*)" group$/, function(text) {
        GroupsPage.groupsList.waitForVisible();
        GroupsPage.groupsList.click('div*=' + text);
    });

    this.When(/^I click on attachment button$/, function() {
        GroupsPage.attachmentIcon.waitForVisible();
        GroupsPage.attachmentIcon.click();
    });

    this.Then(/^I attach file "([^"]*)"$/, function(fileName) {
        var filePath = path.join(__dirname, "../../" + fileName);
        MainPage.selectFileAsAttachment(filePath);
    });

    this.Then(/^I see file "([^"]*)" in attachment section on create post form$/, function(fileName) {
        GroupsPage.attachedFileName.waitForVisible();
        expect(GroupsPage.attachedFileName.getText()).toEqual(fileName);
    });

    this.Then(/^i verify the file name to be "([^"]*)" on the attachment preview page$/, function(fileNameText) {
        if (browser.element('.backdrop').waitForVisible(15000, true)) {
            browser.refresh();
            //FIXME following code needs revisiting in future to incoorporate other feed types like Announcements and orders
            GroupsPage.feedAttachment.waitForVisible();
            GroupsPage.feedAttachment.click();
            GroupsPage.filePreview.waitForVisible();
            expect(GroupsPage.filePreview.getText()).toEqual(fileNameText);
        }
    });

    this.Given(/^I refresh the groups feed page$/, function() {
        browser.refresh();
        GroupsPage.feeds.waitForVisible();
        GroupsPage.feedElement.click();
    });

    this.When(/^I click on Like button$/, function() {
        GroupsPage.groupFeedDetailElementLikeButton.waitForVisible();
        GroupsPage.groupFeedDetailElementLikeButton.click();
    });

    this.When(/^I verify that number of likes on the post become ([^"]*)$/, function(likesCount) {
        browser.waitUntil(function() {
            return GroupsPage.groupFeedDetailElementLikeButtonText === "liked";
        });
        var numberOfLikes = GroupsPage.groupFeedDetailElementLikesCountElement.getText();
        expect(numberOfLikes).toEqual(likesCount);
    });

    this.When(/^I click on delete button$/, function() {
        GroupsPage.groupFeedDetailElementDeleteButton.waitForVisible();
        GroupsPage.groupFeedDetailElementDeleteButton.click();
    });

    this.When(/^I confirm the deletion$/, function() {
        GroupsPage.DeletePostModalButtons.waitForVisible();
        GroupsPage.DeletePostModalButtons.click("button*=Delete");
    });

    this.Then(/^I verify that post "([^"]*)" is successfully deleted from the feed trail$/, function(postMessage) {
        GroupsPage.feeds.waitForVisible();
        var testResult = GroupsPage.getFeedContentNode(GroupsPage.feedElement).getText() !== postMessage ? true :  GroupsPage.getFeedTimestampNode(GroupsPage.feedElement).getText().toLowerCase() !== "last updated just now" ? true : false;
        expect(testResult).toEqual(true);
    });

    this.When(/^I edit the feed text to "([^"]*)"$/, function(editedGroupFeedText) {
        GroupsPage.groupFeedDetailElementEditButton.waitForVisible();
        GroupsPage.groupFeedDetailElementEditButton.click();
        GroupsPage.addPostTextArea.waitForVisible();
        GroupsPage.addPostTextArea.setValue(editedGroupFeedText);
    });

    this.When(/^I verify that feed text change to "([^"]*)"$/, function(editedGroupFeedText) {
        browser.waitUntil(function() {
            return (GroupsPage.groupFeedDetailElementContent === editedGroupFeedText);
        });
    });

    this.When(/^I add "([^"]*)" in the reply section$/, function(replyText) {
        GroupsPage.feedReplyTextBox.waitForVisible();
        GroupsPage.feedReplyTextBox.setValue(replyText);
        GroupsPage.feedReplyPostButton.click();
    });

    this.Then(/^I verify that "([^"]*)" appears on the feed trail$/, function(replyText) {
        GroupsPage.feedReplyCommentPost.waitForVisible();
        expect(GroupsPage.feedReplyCommentPostContent).toEqual(replyText);
    });

    this.Then(/^number of replies text to post updated to "([^"]*)"$/, function(repliesCount) {
        expect(GroupsPage.groupFeedDetailElementRepliesCountElement.getText()).toEqual(repliesCount);
    });

    this.When(/^I click on the post$/, function() {
      GroupsPage.feeds.waitForVisible();
      GroupsPage.feedElement.click();
    });

    this.Then(/^I verify that delete option is unavailable$/, function() {
      GroupsPage.feedReplyPostButton.waitForVisible();
      expect(GroupsPage.groupFeedDetailElementDeleteButton.waitForExist(2000, true)).toEqual(true);
    });
};
