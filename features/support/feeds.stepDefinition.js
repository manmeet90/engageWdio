var Page = require('../../pageobjects/page');
var MainPage = require('../../pageobjects/main.page');
var AddPostModal = require('../../pageobjects/addpost.modal');
var FeedPage = require('../../pageobjects/feed.page');

module.exports = function() {
    this.Then(/^I verify Feed body to contain "([^"]*)" and last updated Time to be "([^"]*)"$/, function(text, time) {
        browser.pause(4000); // this should be the actual performance cut off time
        let result = FeedPage.hasFeedNodeWithPost(text); //.waitForVisible(5000);
        expect(result.result).toEqual(true);
        if(result.result)
        {
        expect(FeedPage.lastUpdatedTime.getText()).toEqual(time);
      }
    });
};
