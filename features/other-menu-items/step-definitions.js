module.exports = function () {
	this.When(/^I click the "([^"]*)" item$/, function (text) {
		browser.element('.listing-item').click('div*=' + text);
	});

	this.Then(/^I see "([^"]*)" item$/, function (text) {
		browser.waitForVisible('div*=' + text);
		expect(browser.element('div*=' + text).getText()).toMatch(text);
	});

	this.Then(/^I see relevant (:?supplier|service|notice|help) information$/, function (sidepanelType) {
		switch (sidepanelType) {
			case 'supplier':
				browser.waitForVisible('.nav-bar-title label');
				expect(browser.element('.nav-bar-title label').getText().toLowerCase()).toMatch(sidepanelType);
				break;
			case 'notice':
				browser.waitForVisible('.nav-bar-title label');
				expect(browser.element('.nav-bar-title label').getText().toLowerCase()).toMatch(sidepanelType);
				break;
			case 'help':
				browser.waitForVisible('.nav-bar-title label');
				expect(browser.element('.nav-bar-title label').getText().toLowerCase()).toMatch(sidepanelType);
				break;
			case 'service':
				browser.waitForVisible('.services-details header > h1');
				expect(browser.element('.services-details header > h1').getText().length > 0).toBeTruthy();
				expect(browser.element('.services-details header > h1').getText().match(/^\s*$/)).toBeNull();
				break;
		}
	});
};
