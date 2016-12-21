module.exports = function() {
  this.Given(/^I launch the application$/, function () {
    browser.launch();
  });

  this.Given(/^I switch the context to the WebView$/, function () {
    browser.context("WEBVIEW_com.fourth.marketplace");
});
};
