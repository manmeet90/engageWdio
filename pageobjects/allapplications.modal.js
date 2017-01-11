var Page = require('./page.js');

var AllApplicationsModal = Object.create(Page, {
  allApplications: { get: function() { return browser.elements('#apps-popup .app-label'); } }
});

module.exports = AllApplicationsModal;
