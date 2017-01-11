var LoginPage = require('../../pageobjects/login.page');

module.exports = function () {
	this.Then(/^I see "([^"]*)" login error$/, function (text) {
		LoginPage.errorMsg.waitForVisible();
		expect(LoginPage.errorMsg.getText()).toMatch(text);
	});
};
