// var LoginPage = require('../../pageobjects/login.page');
// var MainPage = require('../../pageobjects/main.page');
// //var WhenPage = require('../../features/support/when');
// const MessagesPage = require('../../pageobjects/messages.page');
//
// module.exports = function() {
//     this.Then(/^I see the "([^"]*)" side panel button$/, function(text) {
//         MainPage.sidePanelFeedBtn.waitForVisible();
//         expect(MainPage.leftSidePanel.element('=' + text).isVisible()).toBe(true);
//     });
//
//     this.Then(/^I see "([^"]*)" login error$/, function(text) {
//         LoginPage.errorMsg.waitForVisible();
//         expect(LoginPage.errorMsg.getText()).toMatch(text);
//     });
//
//     this.Then(/^I see the new Feed post$/, function() {
//         // Write code here that turns the phrase above into concrete actions
//         return 'pending';
//     });
//
//     this.Then(/^I see that count of number of unread notifications increase by (\d+)$/, function(arg1) {
//         //first get the current count
//         // second expect the count to be current+1
//
//         //expect(LoginPage.errorMsg.getText()).toMatch(text);
//
//         console.log("After post creations" + MainPage.notificationCount.getText());
//         //  console.log("!!!!!"+WhenPage.whenCurrentNotificationCount.getText());
//     });
//
//     //Then I verify Message body to contain "Test Message" and last updated Time to be "a few seconds ago"
//     this.Then(/^I verify Message body to contain "([^"]*)" and last updated Time to be "([^"]*)"$/, (text, time) => {
//         //let message = "Test Message"; //FIXME: can we have generic message with test message in the argument
//         let result = MessagesPage.hasMessageNodeWithMessage(text); //.waitForVisible(5000);
//           browser.pause(8000);
//         expect(result.result).toEqual(true);
//         //MessagesPage.lastUpdatedTime.waitForVisible();
//         browser.pause(8000);// this should be the actual performance cut off time
//         expect(MessagesPage.lastUpdatedTime.getText()).toEqual(time);
//
//     });
//
//     this.Then(/^I verify message details in "([^"]*)" and "([^"]*)"$/, (messageText,messageAfterTime) => {
//
//         MessagesPage.messageBodyText.waitForVisible();
//         expect(MessagesPage.messageBodyText.getText() == messageText).toEqual(true);
//         //  expect(browser.$(".feed-element .list .item:first-child .relative-time-element").getText()).toEqual("Last Updated Just Now");
//         expect(MessagesPage.lastUpdatedTimeOnMessageDetails.getText()).toEqual(messageAfterTime);
//
//     });
//
//     //  Then I verify that <replyText> appears on the message trail
//    this.Then(/^I verify that "([^"]*)" appears on the message trail$/, function (replyText) {
//
//       MessagesPage.commentItem.waitForVisible();
//
// //console.log(MessagesPage.commentItem.getText());
// expect(MessagesPage.commentItem.getText()).toContain(replyText);
// });
//   //Replying to your message
//   this.Then(/^I close the current tab$/, function () {
//     browser.close();
//     });
// };
