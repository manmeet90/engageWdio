// var LoginPage = require('../../pageobjects/login.page');
// var MainPage = require('../../pageobjects/main.page');
// var UserMentionPage = require('../../pageobjects/usermention.page');
// var AddPostModal = require('../../pageobjects/addpost.modal');
// const MessagesPage = require('../../pageobjects/messages.page');
//
// module.exports = function() {
//     this.When(/^I log in with "([^"]*)" and "([^"]*)"$/, function(username, password) {
//         LoginPage.username.setValue(username);
//         LoginPage.password.setValue(password);
//         LoginPage.submit();
//     });
//
//     this.When(/^I add a new post$/, function() {
//         //  MainPage.notificationCount.waitForVisible();
//         //       console.log("Before Post Creation-----"+MainPage.notificationCount.getText());
//         // if(browser.isExisting(MainPage.notificationCount))
//         // console.log("Before Post Creation-----"+MainPage.notificationCount.getText());
//
//         MainPage.writeFeedBtn.waitForVisible();
//         MainPage.writeFeedBtn.click();
//         AddPostModal.modal.waitForVisible();
//         AddPostModal.modalTextArea.setValue('Test--Adding a new post for... ');
//     });
//
//     this.When(/^I do a @mention for "([^"]*)"$/, function(text) {
//         if (text && text.indexOf("message_block:") !== -1) {
//             let _searchText = text.replace("message_block:", "");
//             MessagesPage.searchUserModal.waitForVisible();// or use MessagesPage.searchBoxInput.waitForVisible()
//             MessagesPage.searchBoxInput.setValue(_searchText);
//             MessagesPage.searchResultsList.waitForVisible(5000);
//             browser.pause(5000);
//             if (MessagesPage.searchResultTargetUser) {
//                 MessagesPage.searchResultTargetUser.click();
//             }
//         } else {
//             AddPostModal.modalMentionUser.waitForVisible();
//             AddPostModal.modalMentionUser.click();
//             UserMentionPage.mentionSearchInput.waitForVisible();
//             UserMentionPage.mentionSearchInput.setValue(text);
//             UserMentionPage.mentionSearchResults.waitForVisible();
//             UserMentionPage.mentionSearchResults.click();
//         }
//     });
//
//     this.When(/^I add an attachment$/, function() {
//         // Write code here that turns the phrase above into concrete actions
//         return 'pending';
//     });
//
//     this.When(/^I click the "([^"]*)" modal button$/, function(text) {
//         // Write code here that turns the phrase above into concrete actions
//         AddPostModal.modalHeader.waitForVisible();
//         //console.log(AddPostModal.modalHeader);
//         for (var i = 0; i < AddPostModal.modalHeader.value.length; i++) {
//             var element = AddPostModal.modalHeader.value[i].ELEMENT;
//             if (browser.elementIdText(element).value === text) {
//                 browser.elementIdClick(element);
//                 break;
//             }
//         }
//         // AddPostModal.modalHeader.click('='+text);
//         //return 'pending';
//     });
//     // this.When(/^I click the "Submit" modal button$/, function() {
//     //     // Write code here that turns the phrase above into concrete actions
//     // AddPostModal.modalSubmit.waitForVisible();
//     // AddPostModal.modalSubmit.click();
//     //     //return 'pending';
//     // });
//
//     // // //////
//     //   this.When(/^When I click on first notification$/, function() {
//     //       NotificationListPage.messageBody.waitForVisible();
//     //       NotificationListPage.messageBody.click();
//     //   });
//     //Messages to follow
//     this.When(/^I click on Add new message$/, () => {
//         // browser.pause(2000);// FIXME:use waitForVisible
//
//         MainPage._addNewMessageButton.waitForVisible();
//         //   let _addNewMessageButton = browser.element(".nav-bar-block .right-buttons .button-icon:first-child");
//         MainPage._addNewMessageButton.click();
// });
// //   this.When(/^I check its load performance$/, function () {
// //     var timing = browser.execute(function() {
// //       return window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
// // console.log('It took the Connected App ' + timing.value + ' milliseconds to load.');
// // }
// //     });
//
//     this.When(/^I write the message body$/, () => {
//         MessagesPage.messageBox.setValue("Test Message");
//     });
//
//     this.When(/^I click on message$/, () => {
//
//         if (MessagesPage.messageElement) {
//             MessagesPage.messageElement.click();
//         }
//
//     });
//     //  When I add <replyText>
//     this.When(/^I add "([^"]*)"$/, function (replyText) {
//         MessagesPage.messageTextArea.waitForVisible();
//         MessagesPage.messageTextArea.setValue(replyText);
//       });
// //  And I click on Post
//       this.When(/^I click on Post$/, function () {
//           // Write code here that turns the phrase above into concrete actions
//           MessagesPage.postButton.click();
//         });
//
//
//
// };
