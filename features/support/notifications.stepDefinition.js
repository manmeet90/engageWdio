//     Then I see that count of number of unread notifications increase by 1

var Page = require('../../pageobjects/page');
var MainPage = require('../../pageobjects/main.page');
var AddPostModal = require('../../pageobjects/addpost.modal');
var MessagesPage = require('../../pageobjects/messages.page');

module.exports = function() {

    this.Given(/^I note the current notification count$/, function() {
        if (MainPage.notificationIsExisting) {
            MainPage.count = MainPage.initialNotificationCount.getText();
        } else {
            MainPage.count = 0;
        }
  });

    this.Then(/^I see that count of number of unread notifications increase by 1$/, function() {
        if (MainPage.leftSidePanel.hasFocus()) {
            expect(parseInt(MainPage.newNotificationCount.getText())).toEqual(parseInt(MainPage.count) + 1);
        }
    });
};
