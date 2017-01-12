var Page = require('../../pageobjects/page');
var MainPage = require('../../pageobjects/main.page');
var GroupsPage = require('../../pageobjects/groups.page');
var LoginPage = require('../../pageobjects/login.page');
var MessagesPage = require('../../pageobjects/messages.page');
var AddPostModal = require('../../pageobjects/addpost.modal');

module.exports = function() {


    this.Given(/^I click on Add new message$/, function() {
        //MainPage.addNewMessageButton.waitForExist();
        browser.waitForExist('.click-block-hide');
        MainPage.addNewMessageButton.waitForVisible();
        MainPage.addNewMessageButton.click();
    });

    this.Given(/^I write "([^"]*)" in the message body$/, function(messageText) {
		MessagesPage.messageBox.waitForVisible();
        MessagesPage.messageBox.setValue(messageText);
    });

    this.Then(/^I verify Message body to contain "([^"]*)" and last updated Time to be "([^"]*)"$/, function(messageText, messageTime) {
            browser.waitUntil(function() {
      return browser.getText("//p[contains(@class, \"relative-time-element\")][contains(text(), \"a few seconds ago\")]")[0] === messageTime;
      });
        if (MessagesPage.messageContent.getText() === messageText) {
            MessagesPage.messageTime.waitForVisible();
            expect(MessagesPage.messageTime.getText()).toEqual(messageTime);
        }
    });

  //   this.Given(/^I click on message$/, function() {
  //      browser.waitUntil(function() {
  //   		return browser.getText('.message-element .relative-time-element')[0] === 'a few seconds ago';
	// 	 }, 15000);
  // //  console.log(MessagesPage.messageTime);
  //   //    MessagesPage.messageTime.waitForVisible();
  //       if (typeof MessagesPage.messageElement !== 'undefined') {
  //           MessagesPage.messageElement.click();
  //       }
  //   });
    this.When(/^I click on message$/, function() {
    		browser.waitUntil(function() {
                var timestampText = browser.getText('.item:first-child .relative-time-element');
                // console.log(timestampText);
        		return timestampText.indexOf('a few seconds ago')!=-1;
    		}, 20000);
            // MessagesPage.messageTime.waitForExist(15000);
            if (typeof MessagesPage.messageElement !== 'undefined') {
                MessagesPage.messageElement.click();
            }
        });
    this.Then(/^I verify message details in "([^"]*)" and "([^"]*)"$/, function(messageText, messageAfterTime) {
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
        MessagesPage.numberOfRepliesText.waitForVisible();
        expect(MessagesPage.hasReplyButtonForMessage(btnText)).toEqual(true);
    });

    this.Given(/^message has number of replies text with value "([^"]*)"$/, function(repliesCount) {

       browser.waitUntil(function() {
   		return browser.getText('.message-element .relative-time-element')[0] === 'a few seconds ago';
	 	}, 15000);
  // //  console.log(MessagesPage.messageTime);
    //  MessagesPage.numberOfRepliesText.waitForVisible();
         if (typeof MessagesPage.messageElement !== 'undefined') {
          expect(MessagesPage.numberOfRepliesText.getText()).toEqual(repliesCount);
        }
       else {
           console.log("else executed");
         }
        //  MessagesPage.numberOfRepliesText.waitForVisible();
      //  expect(MessagesPage.numberOfRepliesText.getText()).toEqual(repliesCount);
    });

    this.Then(/^number of replies text updated to "([^"]*)"$/, function(repliesCount) {
        MessagesPage.numberOfRepliesTextInMessageDetailsPage.waitForVisible();
        expect(MessagesPage.numberOfRepliesTextInMessageDetailsPage.getText()).toEqual(repliesCount);
    });

    this.Then(/^search result should be empty$/, function() {
        expect(MessagesPage.emptySearchresult.waitForExist(2000, true)).toEqual(true);
    });
};
