var Page = require('./page.js');

var MainPage = Object.create(Page, {
  writeFeedBtn: { get: function() { return browser.element('.icon-editorial-pencil-write'); } },
  sidePanelFeedBtn: { get: function() { return browser.element('.icon-building-house-live'); } },
  allApplicationsBtn: { get: function() { return browser.element('#applications-all-apps'); } },

  leftSidePanel: { get: function() { return browser.elements('.menu-left .item-complex'); } },
  firstConnectedApps: { get: function() { return browser.elements('#applications .menu-no-link'); } },

  sidePanelSignOutBtn: { get: function() { return browser.element('.icon-interface-power'); } },

  NotificationCount: { get: function() { return browser.element('.menu [href="#/app/notifications"] .badge'); } },
  notificationIsExisting: { get: function() { return browser.isExisting('.menu [href="#/app/notifications"] .badge');} },
  //newNotificationCount: { get: function() { return browser.element('[ng-if="notifications.alerts > 0"]'); } },

  addNewMessageButton: { get: function() { return browser.element('.icon-uniE90C'); } },

  open: { value: function() {
    Page.open.call(this, 'apex/FMPApp#/app/dashboard');
  } }
});

module.exports = MainPage;
