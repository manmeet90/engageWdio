var MainPage = require('../../pageobjects/main.page');
var MessagesPage = require('../../pageobjects/messages.page');
var UserMentionPage = require('../../pageobjects/usermention.page');

var AddPostModal = require('../../pageobjects/addpost.modal');
var SignOutModal = require('../../pageobjects/signout.modal');

module.exports = function() {
	this.Given(/^I load the (:?QAI|PROD|PERFDEV|DEV) environment$/, function(environment) {
		var env = {
			qai: 'https://qapartial-fourth-app.cs87.force.com/fmplogin',
			prod: 'https://secure.fourth.com/fmplogin',
			perfdev: 'https://perfdev-fourth-app.cs89.force.com/fmplogin',
			dev: 'localhost'
		};
		browser.url(env[environment.toLowerCase()]);
	});

	this.Given(/^I click the "([^"]*)" side panel button$/, function(text) {
		MainPage.leftSidePanel.waitForVisible();
		browser.moveToObject('span*=' + text);
		MainPage.leftSidePanel.click('span*=' + text);
	});

	this.Given(/^I do a @mention in message for "([^"]*)"$/, function(text) {
		if (text && text.indexOf('receiver:') !== -1) {
			let searchText = text.replace('receiver:', '');
			MessagesPage.searchUserModal.waitForVisible(); // or use MessagesPage.searchBoxInput.waitForVisible()
			MessagesPage.searchBoxInput.setValue(searchText);
			MessagesPage.searchResultsList.waitForVisible();
			try
			{
				MessagesPage.searchResultTargetUser.waitForVisible();
			} catch (e) {}
			if (MessagesPage.searchResultTargetUser && MessagesPage.searchResultTargetUser.value) {
				MessagesPage.searchResultTargetUser.click();
			}
		}
	});

	this.When(/^I click the "([^"]*)" button$/, function(text) {
		AddPostModal.modalHeader.waitForVisible();
		for (var i = 0; i < AddPostModal.modalHeader.value.length; i++) {
			var element = AddPostModal.modalHeader.value[i].ELEMENT;
			if (browser.elementIdText(element).value === text) {
				browser.elementIdClick(element);
				break;
			}
		}
	});
};
