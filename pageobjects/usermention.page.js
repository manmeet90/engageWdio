var Page = require('./page.js');

var UserMentionPage = Object.create(Page, {
  mentionSearchInput: { get: function() { return browser.element('#search-input'); } },
  // FIXME: We're only grabbing the first result from the drop-down. We should probably do this better (.elements maybe?).
  mentionSearchResults: { get: function() { return browser.element('.mention-search .autocomplete-label'); } }
});

module.exports = UserMentionPage;
