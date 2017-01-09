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
    let notificationCountElement = browser.element('.menu [href="#/app/notifications"] .badge');
    browser.waitForVisible('.menu [href="#/app/notifications"] .badge');
    browser.waitUntil(function() {
    return parseInt(notificationCountElement.getText().trim()) === parseInt(previousCount);
    }, 10000);
};

module.exports = NotificationPage;
