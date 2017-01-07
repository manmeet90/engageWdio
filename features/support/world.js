module.exports = {
	checkAndSwitchTab: function () {
		var currentTab = browser.getCurrentTabId();
		var firstTab = browser.getTabIds()[0];
		var secondTab = browser.getTabIds()[1];
		currentTab === firstTab ? browser.switchTab(secondTab) : browser.switchTab(firstTab);
	}
};
