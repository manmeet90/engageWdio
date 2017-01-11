var Page = require('./page.js');

var ProfilePage = Object.create(Page, {
    edit: {
        get: function () {
            return browser.element('.right-buttons button.edit-button');
        }
    },
    save: {
        get: function () {
            return browser.element('.right-buttons button.save-button');
        }
    },
    username: {
        get: function () {
            return browser.element('#details .username');
        }
    },
    firstname: {
        get: function () {
            return browser.element('#details .first-name');
        }
    },
    lastname: {
        get: function () {
            return browser.element('#details .last-name');
        }
    },
    firstnameTextField: {
        get: function () {
            return browser.element("input[ng-model='user.FirstName']");
        }
    },
    lastnameTextField: {
        get: function () {
            return browser.element("input[ng-model='user.LastName']");
        }
    },
    backdrop: {
        get: function () {
            return browser.element('.backdrop');
        }
    },
    notifications: {
        get: function () {
            return browser.element('input[ng-model="user.Email_Opt_Out"]');
        }
    }
});

module.exports = ProfilePage;
