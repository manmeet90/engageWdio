var Page = require('./page.js');

var MainPage = Object.create(Page, {
  writeFeedBtn: { get: function() { return browser.element('.icon-editorial-pencil-write'); } },
  sidePanelFeedBtn: { get: function() { return browser.element('.icon-building-house-live'); } },
  allApplicationsBtn: { get: function() { return browser.element('#applications-all-apps'); } },

  leftSidePanel: { get: function() { return browser.elements('.menu-left .item-complex'); } },
  firstConnectedApps: { get: function() { return browser.elements('#applications .menu-no-link'); } },

  sidePanelSignOutBtn: { get: function() { return browser.element('.icon-interface-power'); } },
//notificationCount: { get: function() { return browser.element('[ng-if='notifications.alerts > 0']'); } },
// messages elements to follow
 //_addNewMessageButton: { get: function() { return browser.element('.nav-bar-block .right-buttons .button-icon:first-child'); } },
_addNewMessageButton: { get: function() { return browser.element('.icon-uniE90C'); } },

  open: { value: function() {
    Page.open.call(this, 'apex/FMPApp#/app/dashboard');
  } }
});

module.exports = MainPage;
