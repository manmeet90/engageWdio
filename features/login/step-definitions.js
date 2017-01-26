var LoginPage = require('../../pageobjects/login.page');

module.exports = function () {
	this.Then(/^I see "([^"]*)" login error$/, function (text) {
		LoginPage.errorMsg.waitForVisible();
		expect(LoginPage.errorMsg.getText()).toMatch(text);
	});

	this.Then(/^the login URL has "([^"]*)" branding$/, function (text) {
		LoginPage.username.waitForVisible();
		expect(browser.getUrl().indexOf(text) >= 0).toBeTruthy();
	});

	this.Then(/^I do not see the sidebar$/, function () {
		browser.waitForVisible('span*=like');
		expect(browser.isVisibleWithinViewport('ion-side-menu')).toBe(false);
	});
};
