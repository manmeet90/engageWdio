//     Then I see that count of number of unread notifications increase by 1

var Page = require('../../pageobjects/page');
var MainPage = require('../../pageobjects/main.page');
var AddPostModal = require('../../pageobjects/addpost.modal');
var MessagesPage = require('../../pageobjects/messages.page');
var FeedPage = require('../../pageobjects/feed.page');
var NotificationPage = require("../../pageobjects/notificationList");
module.exports = function() {

    this.Given(/^I note the current notification count$/, function() {

        MainPage.leftSidePanel.waitForVisible();
        try {
            MainPage.NotificationCount.waitForVisible();
            if (MainPage.notificationIsExisting) {
                MainPage.count = MainPage.NotificationCount.getText();
            }
        } catch (e) {
            // fails means no notification present
            MainPage.count = 0;
        }
    });

    this.Then(/^I see that count of number of unread notifications increase by 1$/, function() {
        MainPage.NotificationCount.waitForVisible();
        NotificationPage.waitForNotificationToUpdate(MainPage.count);
        expect(parseInt(MainPage.NotificationCount.getText())).toEqual(parseInt(MainPage.count) + 1);

    });
};
