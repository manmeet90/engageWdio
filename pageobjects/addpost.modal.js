var Page = require('./page.js');

var AddPostModal = Object.create(Page, {
  modal: { get: function() { return browser.element('.modal-add-post'); } },
  modalTextArea : { get: function() { return browser.element('.feed-text-area'); } },

  modalHeader : { get: function() { return browser.elements('.modal-header button'); } },
  modalSubmit : { get: function() { return browser.element('.primary-button'); } },
  modalCancel : { get: function() { return browser.element('.button .secondary-button'); } },

  modalMentionUser : { get: function() { return browser.element('.icon-user-single-add'); } },
  modalAddAttachment : { get: function() { return browser.element('.icon-attachment2'); } }
});

module.exports = AddPostModal;
