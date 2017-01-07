var Page = require('../../pageobjects/page');
var MainPage = require('../../pageobjects/main.page');
var GroupsPage = require('../../pageobjects/groups.page');
var LoginPage = require('../../pageobjects/login.page');
var MessagesPage = require('../../pageobjects/messages.page');
var AddPostModal = require('../../pageobjects/addpost.modal');

module.exports = function() {

    this.When(/^I click on Add new message$/, function() {
        MainPage.addNewMessageButton.waitForVisible();
        MainPage.addNewMessageButton.click();
    });

    this.When(/^I write "([^"]*)" in the message body$/, function(messageText) {
        MessagesPage.messageBox.setValue(messageText);
    });

    this.Then(/^I verify Message body to contain "([^"]*)" and last updated Time to be "([^"]*)"$/, function(messageText, messageTime)  {

        if (MessagesPage.messageContent.getText() === messageText) {
        browser.waitForVisible("//p[contains(@class, \"relative-time-element\")][contains(text(), \"a few seconds ago\")]", 10000);
        let messageSecTime = browser.element("//p[contains(@class, \"relative-time-element\")][contains(text(), \"a few seconds ago\")]");
        expect(messageSecTime.getText()).toEqual(messageTime);
      }
    });

    this.When(/^I click on message$/, function() {
        if (MessagesPage.messageElement) {
            MessagesPage.messageElement.click();
        }
    });

    this.Then(/^I verify message details in "([^"]*)" and "([^"]*)"$/, function(messageText, messageAfterTime){
        MessagesPage.messageBodyText.waitForVisible(8000);
        expect(MessagesPage.messageBodyText.getText()).toEqual(messageText);
        expect(MessagesPage.lastUpdatedTimeOnMessageDetails.getText()).toEqual(messageAfterTime);
    });

    this.When(/^I add "([^"]*)"$/, function(replyText) {
        MessagesPage.messageTextArea.waitForVisible();
        MessagesPage.messageTextArea.setValue(replyText);
    });

    this.Then(/^I verify that "([^"]*)" appears on the message trail$/, function(replyText) {
        MessagesPage.commentItem.waitForVisible();
        expect(MessagesPage.commentItem.getText()).toContain(replyText);
    });

    this.Then(/^I verify message has "([^"]*)" button$/, function(btnText) {
        expect(MessagesPage.hasReplyButtonForMessage(btnText)).toEqual(true);
    });

    this.Then(/^message has number of replies text with value "([^"]*)"$/, function(repliesCount) {
          expect(MessagesPage.numberOfRepliesText.getText()).toEqual(repliesCount);
    });

    this.Then(/^number of replies text updated to "([^"]*)"$/, function(repliesCount) {
        expect(MessagesPage.numberOfRepliesTextInMessageDetailsPage.getText()).toEqual(repliesCount);
    });

    this.Then(/^search result should be empty$/, function(){
        expect(browser.waitForExist(MessagesPage.emptySearchresult, 2000, true)).toEqual(true);
    });
};
