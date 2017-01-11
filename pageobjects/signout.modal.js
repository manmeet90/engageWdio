var Page = require('./page.js');

var SignOutModal = Object.create(Page, {
  modalButtons : { get: function() { return browser.elements('.popup-buttons .button'); } }
});

module.exports = SignOutModal;
