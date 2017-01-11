var MainPage = require('../../pageobjects/main.page');

var AllApplicationsModal = require('../../pageobjects/allapplications.modal');

var world = require('../support/world.js');

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
		world.checkAndSwitchTab();

		browser.waitForExist('div', 60000); // TODO: Still to be improved...
	});
};
