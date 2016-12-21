var LoginPage = require('../../pageobjects/login.page');

module.exports = function() {
  this.When(/^I log in$/, function () {
    LoginPage.username.setValue('sumana.user@fourth.com');
    LoginPage.password.setValue('Salesforce12$');
    LoginPage.submit();
  });
};
