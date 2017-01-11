var Page = require('./page.js');

var MainPage = Object.create(Page, {
	writeFeedBtn: {
		get: function () {
			return browser.element('.icon-editorial-pencil-write');
		}
	},
	sidePanelFeedBtn: {
		get: function () {
			return browser.element('.icon-building-house-live');
		}
	},
	allApplicationsBtn: {
		get: function () {
			return browser.element('#applications-all-apps');
		}
	},
	leftSidePanel: {
		get: function () {
			return browser.elements('.menu-left .item');
		}
	},
	firstConnectedApps: {
		get: function () {
			return browser.elements('#applications .menu-no-link');
		}
	},
	sidePanelSignOutBtn: {
		get: function () {
			return browser.element('.icon-interface-power');
		}
	},
	NotificationCount: {
		get: function () {
			return browser.element('.menu [ng-if="notifications.alerts > 0"]');
		}
	},
	notificationIsExisting: {
		get: function () {
			return browser.isExisting('.menu [ng-if="notifications.alerts > 0"]');
		}
	},
	addNewMessageButton: {
		get: function () {
			return browser.element('.icon-uniE90C');
		}
	}
});

MainPage.selectFileAsAttachment = function (filePath) {
	browser.chooseFile('#postFileField', filePath);
};

module.exports = MainPage;
