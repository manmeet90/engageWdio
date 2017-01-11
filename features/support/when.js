var MainPage = require('../../pageobjects/main.page');
var MessagesPage = require('../../pageobjects/messages.page');
var UserMentionPage = require('../../pageobjects/usermention.page');

var AddPostModal = require('../../pageobjects/addpost.modal');
var SignOutModal = require('../../pageobjects/signout.modal');

var World = require('./world');

module.exports = function () {
	this.When(/^I log in with (:?QAI|PROD|PERFDEV|DEV) (:?MP user|MP approver|MP final approver|ESS-only|PS-only) credentials$/, function (environment, account) {
		var credentials = {
			qai: {
				'mp user': {
					user: 'test.user1@fourth.com', pass: 'Password_001'
				},
				'mp approver': {
					user: 'lionel.adams@fourth.com', pass: 'Password3'
				},
				'mp final approver': {

				},
				'ess-only': {

				},
				'ps-only': {

				}
			},
			prod: {
				'mp user': {
					user: 'sumana.user@fourth.com', pass: 'Salesforce12$'
				},
				'mp approver': {
					user: 'sumana.gundlapalli@fourth.com', pass: 'Salesforce14$'
				},
				'mp final approver': {
					user: 'sumana.finalapprover@fourth.com', pass: 'Fourth54321$$'
				},
				'ess-only': {

				},
				'ps-only': {

				}
			}
		};
		World.logMeIn(credentials[environment.toLowerCase()][account.toLowerCase()].user, credentials[environment.toLowerCase()][account.toLowerCase()].pass);
	});

	this.When(/^I log in with "([^"]*)" and "([^"]*)"$/, function (username, password) {
		World.logMeIn(username, password);
	});

	this.When(/^I click the "([^"]*)" button$/, function (text) {
		AddPostModal.modalHeader.waitForVisible();
		for (var i = 0; i < AddPostModal.modalHeader.value.length; i++) {
			var element = AddPostModal.modalHeader.value[i].ELEMENT;
			if (browser.elementIdText(element).value === text) {
				browser.elementIdClick(element);
				break;
			}
		}
	});

	this.When(/^I do a @mention in feed for "([^"]*)"$/, function (text) {
		AddPostModal.modalMentionUser.waitForVisible();
		AddPostModal.modalMentionUser.click();
		UserMentionPage.mentionSearchInput.waitForVisible();
		UserMentionPage.mentionSearchInput.setValue(text);
		UserMentionPage.mentionSearchResults.waitForVisible();
		UserMentionPage.mentionSearchResults.click();
        });

		this.When(/^I do a @mention in message for "([^"]*)"$/, function (text) {
			if (text && text.indexOf('receiver:') !== -1) {
				let searchText = text.replace('receiver:', '');
				MessagesPage.searchUserModal.waitForVisible(); // or use MessagesPage.searchBoxInput.waitForVisible()
				MessagesPage.searchBoxInput.setValue(searchText);
				MessagesPage.searchResultsList.waitForVisible();
				MessagesPage.searchResultTargetUser.waitForVisible();
				if (MessagesPage.searchResultTargetUser && MessagesPage.searchResultTargetUser.value)
				{
					MessagesPage.searchResultTargetUser.click();
				}
			}
		});
	// this.When(/^I do a @mention for "([^"]*)"$/, function (text) {
  //       // TODO: Change receiver: to be a Persona-style thing.
	// 	if (text && text.indexOf('receiver:') !== -1) {
	// 		let searchText = text.replace('receiver:', '');
	// 		MessagesPage.searchUserModal.waitForVisible(); // or use MessagesPage.searchBoxInput.waitForVisible()
	// 		MessagesPage.searchBoxInput.setValue(searchText);
	// 		MessagesPage.searchResultsList.waitForVisible(5000);
	// 		if (MessagesPage.searchResultTargetUser && MessagesPage.searchResultTargetUser.value) {
	// 			MessagesPage.searchResultTargetUser.click();
	// 		}
	// 	} else {
	// 		AddPostModal.modalMentionUser.waitForVisible();
	// 		AddPostModal.modalMentionUser.click();
	// 		UserMentionPage.mentionSearchInput.waitForVisible();
	// 		UserMentionPage.mentionSearchInput.setValue(text);
	// 		UserMentionPage.mentionSearchResults.waitForVisible();
	// 		UserMentionPage.mentionSearchResults.click();
	// 	}
	// });

	this.When(/^I add a new post "([^"]*)"$/, function (text) {
		MainPage.writeFeedBtn.waitForVisible();
		MainPage.writeFeedBtn.click();
		AddPostModal.modal.waitForVisible();
		AddPostModal.modalTextArea.setValue(text);
	});

	this.When(/^I click on "([^"]*)" button$/, function (button) {
		browser.click('button=' + button);
	});

	this.When(/^I click the "([^"]*)" modal button$/, function (text) {
		if (text === 'Sign Out' || text === 'Cancel') {
			SignOutModal.modalButtons.waitForVisible();
			SignOutModal.modalButtons.click('button*=' + text);
		} else {
      // TODO: To be completed when other modal buttons are required to be clicked.
		}
	});

	this.When(/^I check its load performance$/, function () {
		var timing = browser.execute(function () {
			return window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
		});
		console.log('It took the Connected App ' + timing.value + ' milliseconds to load.');
	});
};
