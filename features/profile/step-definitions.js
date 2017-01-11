var Profile = require('../../pageobjects/profile.page');

var firstname = 'QA';
var lastname = 'Tester';
var oldFirstname, oldLastname, oldNotifications;

module.exports = function () {
	this.When(/^I check if the registered email matches "([^"]*)"$/, function (text) {
		Profile.username.waitForVisible();
		expect(Profile.username.getText()).toMatch(text);
	});

	this.When(/^I wait until the url "([^"]*)" loaded$/, function (url) {
		browser.waitUntil(function () {
			return (
                browser.getUrl().indexOf(url) >= 0 &&
                browser.execute(function () {
					return document.readyState.toLowerCase() === 'complete';
				})
			);
		});
	});

    // the url should/would/empty/etc contain(s)|have|has|be "string"
	this.When(/^the url( ([^\s]*)\b|\b) (:?contain(s\b|\b)|have|has|be) "([^"]*)"$/, function (one, two, three, four, url) {
		expect(browser.getUrl().indexOf(url) >= 0).toBeTruthy();
	});

    // go into editing mode
	this.When(/^I am on edit mode$/, function () {
        // save initial data to revert
		Profile.lastname.waitForVisible();
		oldFirstname = Profile.firstname.getText();
		oldLastname = Profile.lastname.getText();
        // get email notification from html/angular side! 😱
		oldNotifications = browser.execute(function () {
			var scope = angular.element(document.querySelector('input[ng-model="user.Email_Opt_Out"]')).scope().$parent;
			return scope.user.Email_Opt_Out;
		}).value;

		Profile.edit.click();
		Profile.firstnameTextField.waitForVisible();
	});

	this.When(/^I update and save ([^"]*)$/, function (text) {
		switch (text) {
			case 'my details':
				updateContactDetails(browser, false); // force email notifications = false
				break;

			default:
				console.log('nothing to update');
		}
	});

	this.Then(/^after a window refresh, ([^"]*) remain as saved$/, function (text) {
		browser.refresh();
		switch (text) {
			case 'my details':
				validateContactDetails(browser);
				break;
			default:
				console.log('nothing to validate');
		}
	});

	this.Then(/^I revert the original data$/, function () {
		firstname = oldFirstname;
		lastname = oldLastname;
		Profile.edit.click();
		Profile.firstnameTextField.waitForVisible();
		updateContactDetails(browser, oldNotifications);
	});
};

function updateContactDetails(browser, notifications) {
    // change values
	Profile.firstnameTextField.setValue(firstname);
	Profile.lastnameTextField.setValue(lastname);
	Profile.save.click();
	Profile.backdrop.waitForVisible(5000, true); // wait for backdrop NOT visible
    // force checkbox from html/angular side! 😓
	browser.execute(function (notifications) {
		var scope = angular.element(document.querySelector('input[ng-model="user.Email_Opt_Out"]')).scope().$parent;
		scope.user.Email_Opt_Out = notifications;
		scope.updateUser(false);
	}, notifications);
	Profile.backdrop.waitForVisible(5000, true);
}

function validateContactDetails(browser) {
    // this isn't perfect, it should check if ajax has been loaded properly
	Profile.lastname.waitForVisible();
	expect(Profile.firstname.getText()).toMatch(firstname);
	expect(Profile.lastname.getText()).toMatch(lastname);
	var notif = browser.execute(function () {
		var scope = angular.element(document.querySelector('input[ng-model="user.Email_Opt_Out"]')).scope().$parent;
		return scope.user.Email_Opt_Out;
	}).value;
	expect(notif).toBeFalsy();
}
