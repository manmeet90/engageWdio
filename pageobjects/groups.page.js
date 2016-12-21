var Page = require('./page.js');

var GroupsPage = Object.create(Page, {
  groupsList: { get: function() { return browser.elements('.groups .item-complex'); } }
});

module.exports = GroupsPage;
