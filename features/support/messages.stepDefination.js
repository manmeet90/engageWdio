var Page = require('../../pageobjects/page');
var MainPage = require('../../pageobjects/main.page');
var GroupsPage = require('../../pageobjects/groups.page');
var LoginPage = require('../../pageobjects/login.page');
const MessagesPage = require('../../pageobjects/messages.page');
var AddPostModal = require('../../pageobjects/addpost.modal');

module.exports = function() {

    //         Given I click the "Messages" side panel button
    this.Given(/^I click the "([^"]*)" side panel button$/, function(text) {
        MainPage.leftSidePanel.waitForVisible();
        MainPage.leftSidePanel.click('*=' + text);
    });

    //         When I click on Add new message
    this.When(/^I click on Add new message$/, () => {
        MainPage.addNewMessageButton.waitForVisible();
        MainPage.addNewMessageButton.click();
    });

    //         And I write the message body
    this.When(/^I write the message body$/, () => {
        MessagesPage.messageBox.setValue("Test Message");
    });

    //         Then I verify Message body to contain <messageText> and last updated Time to be <messageTime>
  /*  this.Then(/^I verify Message body to contain "([^"]*)" and last updated Time to be "([^"]*)"$/, (text, time) => {
        //let message = "Test Message"; //FIXME: can we have generic message with test message in the argument
        browser.pause(8000); // this should be the actual performance cut off time
        expect(MessagesPage.lastUpdatedTime.getText()).toEqual(time);
        browser.pause(10000);
        let result = MessagesPage.hasMessageNodeWithMessage(text); //.waitForVisible(5000);
        expect(result.result).toEqual(true);
        //MessagesPage.lastUpdatedTime.waitForVisible();

    });*/
    this.Then(/^I verify Message body to contain "([^"]*)" and last updated Time to be "([^"]*)"$/, (text, time) => {
            //browser.pause(8000); // this should be the actual performance cut off time
            browser.waitForVisible("//p[contains(@class, \"relative-time-element\")][contains(text(), \"a few seconds ago\")]",10000);
            let ele = browser.element("//p[contains(@class, \"relative-time-element\")][contains(text(), \"a few seconds ago\")]");
            expect(ele.getText()).toEqual(time);
            // browser.pause(10000);
            // let result = MessagesPage.hasMessageNodeWithMessage(text); //.waitForVisible(5000);
            // expect(result.result).toEqual(true);
            expect(MessagesPage.messageContent.getText()).toEqual(text);

        });
    //         When I click on message
    this.When(/^I click on message$/, () => {

        if (MessagesPage.messageElement) {
            MessagesPage.messageElement.click();
        }

    });

    //         Then I verify message details in <messageText> and <messageAfterTime>
    this.Then(/^I verify message details in "([^"]*)" and "([^"]*)"$/, (messageText, messageAfterTime) => {
        MessagesPage.messageBodyText.waitForVisible(8000);
        expect(MessagesPage.messageBodyText.getText() == messageText).toEqual(true);
        //  expect(browser.$(".feed-element .list .item:first-child .relative-time-element").getText()).toEqual("Last Updated Just Now");
        expect(MessagesPage.lastUpdatedTimeOnMessageDetails.getText()).toEqual(messageAfterTime);

    });

    //  When I add <replyText>
    this.When(/^I add "([^"]*)"$/, function(replyText) {
        MessagesPage.messageTextArea.waitForVisible();
        MessagesPage.messageTextArea.setValue(replyText);
    });

    //  And I click on Post
    this.When(/^I click on Post$/, function() {
        // Write code here that turns the phrase above into concrete actions
        MessagesPage.postButton.click();
    });

    //  Then I verify that <replyText> appears on the message trail
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
         expect(browser.waitForExist(".search-people-modal .modal-content .mention-search", 2000, true)).toEqual(true);
     });
     
};
