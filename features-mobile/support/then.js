var MainPage = require('../../pageobjects/main.page');

module.exports = function() {
  this.Then(/^I see an unique interface element$/, function () {
    MainPage.writeFeedBtn.waitForVisible();
  });
};
