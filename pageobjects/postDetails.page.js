var Page = require('./page.js');

var PostDetails_Page = Object.create(Page, {

  lastUpdatedTime: { get: function() { return browser.getElementsByClassName('className') browser.element('#search-input'); } },
  // FIXME: We're only grabbing the first result from the drop-down. We should probably do this better (.elements maybe?).
  messageBody: { get: function() { return browser.element('.mention-search .autocomplete-label'); } }
  likeButton:
  CommentIcon:
  PostButton:

});

module.exports = PostDetails_Page;
