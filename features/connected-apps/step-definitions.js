var MainPage = require('../../pageobjects/main.page');

var AllApplicationsModal = require('../../pageobjects/allapplications.modal');

var World = require('../support/world.js');

module.exports = function () {
	this.Given(/^I open the Connected App directory$/, function () {
		MainPage.firstConnectedApps.waitForVisible();
		MainPage.allApplicationsBtn.click();
	});

	this.Given(/^I click the "([^"]*)" Connected App$/, function (text) {
		AllApplicationsModal.allApplications.waitForVisible();
		AllApplicationsModal.allApplications.click('*=' + text);

		while (browser.getTabIds().length === 1) {
			browser.pause(500);
		}
		World.checkAndSwitchTab();

		switch (text) {
			case 'MarketPlace':
				// We wait for the loading spinner to be first visible and then invisible, so that MP2 loads completely.
				browser.waitForVisible('.loading-spinner--side', 60000);
				browser.waitForVisible('.loading-spinner--side', 60000, true);
				break;
			default:
				browser.waitForVisible('div', 60000);
		}
	});
};
