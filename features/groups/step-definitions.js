var Page = require('../../pageobjects/page');
var MainPage = require('../../pageobjects/main.page');
var GroupsPage = require('../../pageobjects/groups.page');
var path = require("path");

module.exports = function() {

    this.Given(/^I visit the "([^"]*)" group$/, function(text) {
        GroupsPage.groupsList.waitForVisible();
        GroupsPage.groupsList.click('div*=' + text);
    });

    this.When(/^I click on attachment button$/, function() {
        GroupsPage.attachmentIcon.waitForVisible();
        GroupsPage.attachmentIcon.click();
    });

    this.Then(/^I attach file "([^"]*)"$/, function(fileName) {
        var filePath = path.join(__dirname, "../../" + fileName);
        MainPage.selectFileAsAttachment(filePath);
    });

    this.Then(/^I see file "([^"]*)" in attachment section on create post form$/, function(fileName) {
        GroupsPage.attachedFileName.waitForVisible();
        expect(GroupsPage.attachedFileName.getText()).toEqual(fileName);
    });

    this.Then(/^i verify the file name to be "([^"]*)" on the attachment preview page$/, function(fileNameText) {
        if (browser.element('.backdrop').waitForVisible(15000, true)) {
            browser.refresh();
            //FIXME following code needs revisiting in future to incoorporate other feed types like Announcements and orders
            GroupsPage.feedAttachment.waitForVisible();
            GroupsPage.feedAttachment.click();
            GroupsPage.filePreview.waitForVisible();
            expect(GroupsPage.filePreview.getText()).toEqual(fileNameText);
        }
    });

};
