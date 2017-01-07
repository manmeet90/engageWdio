var Page = require('../../pageobjects/page');
var MainPage = require('../../pageobjects/main.page');
var AddPostModal = require('../../pageobjects/addpost.modal');
var FeedPage = require('../../pageobjects/feed.page');

module.exports = function() {
    this.Then(/^I verify Feed body to contain "([^"]*)" and last updated Time to be "([^"]*)"$/, function(text, time) {
        browser.waitUntil(function () {
  		      return (FeedPage.lastUpdatedTime === time);
          });
        let result = FeedPage.hasFeedNodeWithPost(text);
        expect(result.result).toEqual(true);
        expect(FeedPage.lastUpdatedTime=== (time));
    });
};
