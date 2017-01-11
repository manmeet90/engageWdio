module.exports = function () {
	this.Then(/^I see "([^"]*)"$/, function (text) {
		browser.waitForVisible('span*=' + text);
		expect(browser.element('span*=' + text).getText()).toMatch(text);
	});
};
