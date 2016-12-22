var Page = require('../../pageobjects/page');
var MainPage = require('../../pageobjects/main.page');
var GroupsPage = require('../../pageobjects/groups.page');
var LoginPage = require('../../pageobjects/login.page');
const MessagesPage = require('../../pageobjects/messages.page');
var AddPostModal = require('../../pageobjects/addpost.modal');

//var AllApplicationsModal = require('../../pageobjects/allapplications.modal');

module.exports = function() {

    //         Given I click the "Messages" side panel button
    this.Given(/^I click the "([^"]*)" side panel button$/, function(text) {
        MainPage.leftSidePanel.waitForVisible();
        MainPage.leftSidePanel.click('*=' + text);
    });

    //
    //     @watch
    //     Scenario Outline: Verify generation and reply on new message
    //         When I click on Add new message
    this.When(/^I click on Add new message$/, () => {
        // browser.pause(2000);// FIXME:use waitForVisible

        MainPage._addNewMessageButton.waitForVisible();
        //   let _addNewMessageButton = browser.element(".nav-bar-block .right-buttons .button-icon:first-child");
        MainPage._addNewMessageButton.click();
    });

    //         And I write the message body
    this.When(/^I write the message body$/, () => {
        MessagesPage.messageBox.setValue("Test Message");
    });

    //         Then I verify Message body to contain <messageText> and last updated Time to be <messageTime>
    this.Then(/^I verify Message body to contain "([^"]*)" and last updated Time to be "([^"]*)"$/, (text, time) => {
        //let message = "Test Message"; //FIXME: can we have generic message with test message in the argument

        //browser.pause(8000); // this should be the actual performance cut off time
        browser.waitForVisible("//p[contains(@class, \"relative-time-element\")][contains(text(), \"a few seconds ago\")]",10000);
        let ele = browser.element("//p[contains(@class, \"relative-time-element\")][contains(text(), \"a few seconds ago\")]");
        expect(ele.getText()).toEqual(time);
        // browser.pause(10000);
        let result = MessagesPage.hasMessageNodeWithMessage(text); //.waitForVisible(5000);
        expect(result.result).toEqual(true);
        //MessagesPage.lastUpdatedTime.waitForVisible();
    });

    //         When I click on message
    this.When(/^I click on message$/, () => {

        if (MessagesPage.messageElement) {
            MessagesPage.messageElement.click();
        }

    });

    //         Then I verify message details in <messageText> and <messageAfterTime>
    this.Then(/^I verify message details in "([^"]*)" and "([^"]*)"$/, (messageText, messageAfterTime) => {

        MessagesPage.messageBodyText.waitForVisible();
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

        //console.log(MessagesPage.commentItem.getText());
        expect(MessagesPage.commentItem.getText()).toContain(replyText);
    });
};
