var Page = require('../../pageobjects/page');
var MainPage = require('../../pageobjects/main.page');
var AddPostModal = require('../../pageobjects/addpost.modal');
var FeedPage = require('../../pageobjects/Feed.page');

module.exports = function() {
this.Then(/^I verify Feed body to contain "([^"]*)" and last updated Time to be "([^"]*)"$/, function (text, time) {
  //let message = "Test Message"; //FIXME: can we have generic message with test message in the argument
  browser.pause(8000); // this should be the actual performance cut off time
  expect(FeedPage.lastUpdatedTime.getText()).toEqual(time);
  browser.pause(10000);
  let result = FeedPage.hasFeedNodeWithPost(text); //.waitForVisible(5000);
  console.log(result.elem.getText());
  expect(result.result).toEqual(true);
  //MessagesPage.lastUpdatedTime.waitForVisible();

      });
    };
