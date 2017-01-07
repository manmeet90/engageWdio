var Page = require('../../pageobjects/page');
var MainPage = require('../../pageobjects/main.page');
var GroupsPage = require('../../pageobjects/groups.page');
var path = require("path");

module.exports = function() {

    this.Given(/^I visit the "([^"]*)" group$/, function(text) {
        GroupsPage.groupsList.waitForVisible();
        GroupsPage.groupsList.click('=' + text);
    });

    this.Then(/^click on attachment button$/, function() {
        GroupsPage.attachmentIcon.waitForVisible();
        GroupsPage.attachmentIcon.click();
    });

    this.Then(/^attach file "([^"]*)"$/, function(fileName) {
        var filePath = path.join(__dirname, "../../" + fileName);
        browser.chooseFile("#postFileField", filePath);
    });

    this.Then(/^I should see that file "([^"]*)" in attachment section on create post form$/, function(fileName) {
        GroupsPage.attachedFileName.waitForVisible();
        expect(GroupsPage.attachedFileName.getText()).toEqual(fileName);
    });

    this.Then(/^i verify the file name to be "([^"]*)" on the attachment preview page$/, function(fileNameText) {
        if (browser.element('.backdrop').waitForVisible(15000, true)) {
            browser.refresh();
            GroupsPage.feedAttachment.waitForVisible();
            GroupsPage.feedAttachment.click();
            GroupsPage.filePreview.waitForVisible();
            expect(GroupsPage.filePreview.getText()).toEqual(fileNameText);
        }
    });

};
