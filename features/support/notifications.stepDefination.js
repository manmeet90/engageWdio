//     Then I see that count of number of unread notifications increase by 1

var Page = require('../../pageobjects/page');
var MainPage = require('../../pageobjects/main.page');
var AddPostModal = require('../../pageobjects/addpost.modal');

module.exports = function() {
    //     Given I note the current notification count
    this.Given(/^I note the current notification count$/, function() {
        browser.pause(8000);
        if (MainPage.notificationIsExisting) {
          MainPage.count = MainPage.initialNotificationCount.getText();
        } else {
            MainPage.count = 0;
        }
    });

    this.Then(/^I see that count of number of unread notifications increase by 1$/, function() {
        //  MainPage.m2.waitForVisible();
        browser.pause(5000);
        expect(parseInt(MainPage.newNotificationCount.getText())).toEqual(parseInt(MainPage.count) + 1);
    });
};
