var MainPage = require('../../pageobjects/main.page');

module.exports = function () {
	this.Given(/^I load the (:?QAI|PROD|PERFDEV|DEV) environment$/, function (environment) {
		var env = {
			qai: 'https://qapartial-fourth-app.cs87.force.com/fmplogin',
			prod: 'https://secure.fourth.com/fmplogin',
			perfdev: 'https://perfdev-fourth-app.cs89.force.com/fmplogin',
			dev: 'localhost'
		};
		browser.url(env[environment.toLowerCase()]);
	});

	this.Given(/^I click the "([^"]*)" side panel button$/, function (text) {
		MainPage.leftSidePanel.waitForVisible();
		browser.moveToObject('span*=' + text);
		MainPage.leftSidePanel.click('span*=' + text);
	});
};
