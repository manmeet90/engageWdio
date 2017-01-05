var Page = require('./page.js');

var GroupsPage = Object.create(Page, {
  groupsList: { get: function() { return browser.elements('.groups .item-complex'); } },
  attachmentIcon: { get: function() { return browser.element('.modal-add-post .post-feed-footer button.icon-attachment2'); } },
  attachedFileName: { get: function() { return browser.element(".modal-add-post .post-feed-footer .filename"); } },
  feedAttachment: { get: function() { return browser.element(".feeds .item:first-child .file-thumbnail>img"); } },
  filePreview:{ get: function() { return browser.element(".media-modal .file-name"); } }
});

module.exports = GroupsPage;
