var MainPage = require('../../pageobjects/main.page');

module.exports = function () {
	this.Then(/^I see the "([^"]*)" side panel button$/, function (text) {
		MainPage.leftSidePanel.waitForVisible();
		expect(MainPage.leftSidePanel.element('span*=' + text).isVisible()).toBe(true);
	});

	this.Then(/^I close the current tab$/, function () {
		browser.close();
	});
};
