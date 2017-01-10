var Page = require('./page.js');

var NotificationPage = Object.create(Page, {

    lastUpdatedTime: {
        get: function() {
            return browser.getElementsByClassName('className').browser.element('#search-input');
        }
    },
    // FIXME: We're only grabbing the first result from the drop-down. We should probably do this better (.elements maybe?).
    messageBody: {
        get: function() {
            return browser.element('.mention-search .autocomplete-label');
        }
    }
});

NotificationPage.waitForNotificationToUpdate = function(count) {
    let previousCount = parseInt(count) + 1;
    let notificationCountElement = browser.element('.menu [ng-if="notifications.alerts > 0"]');
    browser.element('.backdrop').waitForVisible(15000, true)
    browser.waitUntil(function() {
        return parseInt(browser.getText('.menu [ng-if="notifications.alerts > 0"]').trim()) === parseInt(previousCount);
    }, 15000);
};

module.exports = NotificationPage;
