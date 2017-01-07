var MainPage = require('../../pageobjects/main.page');
var LoginPage = require('../../pageobjects/login.page');
var MessagesPage = require('../../pageobjects/messages.page');
var UserMentionPage = require('../../pageobjects/usermention.page');

var AddPostModal = require('../../pageobjects/addpost.modal');
// var SignOutModal = require('../../pageobjects/signout.modal');

module.exports = function () {
	this.When(/^I log in with (:?QAI|PROD|PERFDEV|DEV) (:?MP user|MP approver|MP final approver|ESS-only|PS-only) credentials$/, function (environment, account) {
		switch (environment.toLowerCase()) {
			case 'qai':
				switch (account.toLowerCase()) {
					case 'mp user':
						LoginPage.username.setValue('dan.iosif@fourth.com');
						LoginPage.password.setValue('qaz_XSW_12345');
						LoginPage.submit();
						break;
					case 'mp approver':
						LoginPage.username.setValue('lionel.adams@fourth.com');
						LoginPage.password.setValue('Password3');
						LoginPage.submit();
						break;
					case 'mp final approver':

						break;
					case 'ess-only':

						break;
					case 'ps-only':

						break;
				}
				break;
			case 'prod':
				switch (account.toLowerCase()) {
					case 'mp user':
						LoginPage.username.setValue('sumana.user@fourth.com');
						LoginPage.password.setValue('Salesforce12$');
						LoginPage.submit();
						break;
					case 'mp approver':
						LoginPage.username.setValue('sumana.gundlapalli@fourth.com');
						LoginPage.password.setValue('Salesforce14$');
						LoginPage.submit();
						break;
					case 'mp final approver':
						LoginPage.username.setValue('sumana.finalapprover@fourth.com');
						LoginPage.password.setValue('Fourth54321$$');
						LoginPage.submit();
						break;
					case 'ess-only':

						break;
					case 'ps-only':

						break;
				}
				break;
		}
	});

	this.When(/^I log in with "([^"]*)" and "([^"]*)"$/, function (username, password) {
		LoginPage.username.setValue(username);
		LoginPage.password.setValue(password);
		LoginPage.submit();
	});

	this.When(/^I click the "([^"]*)" modal button$/, function (text) {
		if (text === 'Sign Out' || text === 'Cancel') {
			SignOutModal.modalButtons.waitForVisible();
			SignOutModal.modalButtons.click('button*=' + text);
		} else {
			AddPostModal.modalHeader.waitForVisible();
        	for (var i = 0; i < AddPostModal.modalHeader.value.length; i++) {
            	var element = AddPostModal.modalHeader.value[i].ELEMENT;
            	if (browser.elementIdText(element).value === text) {
                	browser.elementIdClick(element);
                	break;
            }
        }
		}
	});

	this.When(/^I check its load performance$/, function () {
		var timing = browser.execute(function () {
			return window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
		});
		console.log('It took the Connected App ' + timing.value + ' milliseconds to load.');
	});

	    this.When(/^I do a @mention for "([^"]*)"$/, function(text) {
        // TODO: Change receiver: to be a Persona-style thing.
        if (text && text.indexOf("receiver:") !== -1) {
            let searchText = text.replace("receiver:", "");
            MessagesPage.searchUserModal.waitForVisible(); // or use MessagesPage.searchBoxInput.waitForVisible()
            MessagesPage.searchBoxInput.setValue(searchText);
            MessagesPage.searchResultsList.waitForVisible(5000);
            browser.pause(1000);
            if (MessagesPage.searchResultTargetUser && MessagesPage.searchResultTargetUser.value) {
                MessagesPage.searchResultTargetUser.click();
            }
        } else {
            AddPostModal.modalMentionUser.waitForVisible();
            AddPostModal.modalMentionUser.click();
            UserMentionPage.mentionSearchInput.waitForVisible();
            UserMentionPage.mentionSearchInput.setValue(text);
            UserMentionPage.mentionSearchResults.waitForVisible();
            UserMentionPage.mentionSearchResults.click();
        }
    });

	this.When(/^I add a new post "([^"]*)"$/, function(text) {
        MainPage.writeFeedBtn.waitForVisible();
        MainPage.writeFeedBtn.click();
        AddPostModal.modal.waitForVisible();
        AddPostModal.modalTextArea.setValue(text);
    });

	this.When(/^I click on "([^"]*)" button$/, function (button) {
        browser.click('button=' + button);
    });
};
