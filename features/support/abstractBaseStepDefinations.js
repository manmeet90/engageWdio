var Page = require('../../pageobjects/page');
var MainPage = require('../../pageobjects/main.page');
var GroupsPage = require('../../pageobjects/groups.page');
var LoginPage = require('../../pageobjects/login.page');
const MessagesPage = require('../../pageobjects/messages.page');
var AddPostModal = require('../../pageobjects/addpost.modal');
var UserMentionPage = require('../../pageobjects/usermention.page');

module.exports = function() {
    //         Given I visit "fmplogin"
    this.Given(/^I visit "([^"]*)"$/, function(text) {
        Page.open(text);
    });

    //         And I log in with "lionel.adams@fourth.com" and "Password3"
    this.When(/^I log in with "([^"]*)" and "([^"]*)"$/, function(username, password) {
        LoginPage.username.setValue(username);
        LoginPage.password.setValue(password);
        LoginPage.submit();
    });

    //         And I do a @mention for "message_block:Buyee"
    this.When(/^I do a @mention for "([^"]*)"$/, function(text) {
        if (text && text.indexOf("message_block:") !== -1) {
            let _searchText = text.replace("message_block:", "");
            MessagesPage.searchUserModal.waitForVisible(); // or use MessagesPage.searchBoxInput.waitForVisible()
            MessagesPage.searchBoxInput.setValue(_searchText);
            MessagesPage.searchResultsList.waitForVisible(5000);
            browser.pause(5000);
            if (MessagesPage.searchResultTargetUser) {
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

    //         When I click the "Submit" modal button
    this.When(/^I click the "([^"]*)" modal button$/, function(text) {
        AddPostModal.modalHeader.waitForVisible();
        //console.log(AddPostModal.modalHeader);
        for (var i = 0; i < AddPostModal.modalHeader.value.length; i++) {
            var element = AddPostModal.modalHeader.value[i].ELEMENT;
            if (browser.elementIdText(element).value === text) {
                browser.elementIdClick(element);
                break;
            }
        }
    });

    this.When(/^I add a new post "([^"]*)"$/, function (text) {
      MainPage.writeFeedBtn.waitForVisible();
      MainPage.writeFeedBtn.click();
      AddPostModal.modal.waitForVisible();
      AddPostModal.modalTextArea.setValue(text);
          });
  

    this.Given(/^I visit the "([^"]*)" group$/, function(text) {
        GroupsPage.groupsList.waitForVisible();
        GroupsPage.groupsList.click('=' + text);
    });
};
