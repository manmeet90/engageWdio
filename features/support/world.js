var LoginPage = require('../../pageobjects/login.page');

module.exports = {
	checkAndSwitchTab: function () {
		var currentTab = browser.getCurrentTabId();
		var firstTab = browser.getTabIds()[0];
		var secondTab = browser.getTabIds()[1];
		currentTab === firstTab ? browser.switchTab(secondTab) : browser.switchTab(firstTab);
	},
	logMeIn: function (user, pass) {
		LoginPage.username.waitForVisible();
		LoginPage.password.waitForVisible();
		LoginPage.username.setValue(user);
		LoginPage.password.setValue(pass);
		LoginPage.submit();
	}
};
