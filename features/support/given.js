var MainPage = require('../../pageobjects/main.page');

module.exports = function () {
	this.Given(/^I load the (:?QAI|PROD|PERFDEV|DEV) environment$/, function (environment) {
		switch (environment.toLowerCase()) {
			case 'qai':
				browser.url('https://qapartial-fourth-app.cs87.force.com/fmplogin');
				break;
			case 'prod':
				browser.url('https://secure.fourth.com/fmplogin');
				break;
			case 'perfdev':
				browser.url('https://perfdev-fourth-app.cs89.force.com/fmplogin');
				break;
			case 'dev':
				browser.url('localhost');
				break;
		}
	});

	this.Given(/^I click the "([^"]*)" side panel button$/, function (text) {
		MainPage.leftSidePanel.waitForVisible();
		browser.moveToObject('span*=' + text);
		MainPage.leftSidePanel.click('span*=' + text);
	});
};
