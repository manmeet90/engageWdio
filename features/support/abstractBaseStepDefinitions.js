var Page = require('../../pageobjects/page');
var MainPage = require('../../pageobjects/main.page');
var GroupsPage = require('../../pageobjects/groups.page');
var LoginPage = require('../../pageobjects/login.page');
var MessagesPage = require('../../pageobjects/messages.page');
var AddPostModal = require('../../pageobjects/addpost.modal');
var UserMentionPage = require('../../pageobjects/usermention.page');

module.exports = function() {

    this.Given(/^I visit "([^"]*)"$/, function(text) {
        Page.open(text);
    });

    this.When(/^I log in with "([^"]*)" and "([^"]*)"$/, function(username, password) {
        LoginPage.username.setValue(username);
        LoginPage.password.setValue(password);
        LoginPage.submit();
    });

    this.When(/^I do a @mention for "([^"]*)"$/, function(text) {
        if (text && text.indexOf("receiver:") !== -1) {
            let searchText = text.replace("receiver:", "");
            MessagesPage.searchUserModal.waitForVisible(); // or use MessagesPage.searchBoxInput.waitForVisible()
            MessagesPage.searchBoxInput.setValue(searchText);
            MessagesPage.searchResultsList.waitForVisible(5000);
            browser.pause(4000);
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

    this.When(/^I click the "([^"]*)" modal button$/, function(text) {
        AddPostModal.modalHeader.waitForVisible();
        for (var i = 0; i < AddPostModal.modalHeader.value.length; i++) {
            var element = AddPostModal.modalHeader.value[i].ELEMENT;
            if (browser.elementIdText(element).value === text) {
                browser.elementIdClick(element);
                break;
            }
        }
    });

    this.When(/^I add a new post "([^"]*)"$/, function(text) {
        MainPage.writeFeedBtn.waitForVisible();
        MainPage.writeFeedBtn.click();
        AddPostModal.modal.waitForVisible();
        AddPostModal.modalTextArea.setValue(text);
    });

    this.Given(/^I visit the "([^"]*)" group$/, function(text) {
        GroupsPage.groupsList.waitForVisible();
        GroupsPage.groupsList.click('=' + text);
    });

    this.When(/^I click on "([^"]*)" button$/, function (button) {
        browser.click('button=' + button);
    });

    this.Given(/^I click the "([^"]*)" side panel button$/, function(text) {
        MainPage.leftSidePanel.waitForVisible();
        MainPage.leftSidePanel.click('*=' + text);
        });
};
