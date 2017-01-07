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
        MainPage.selectFileAsAttachment(filePath);
    });

    this.Then(/^I should see that file "([^"]*)" in attachment section on create post form$/, function(fileName) {
        GroupsPage.attachedFileName.waitForVisible();
        expect(GroupsPage.attachedFileName.getText()).toEqual(fileName);
    });

    this.Then(/^i verify the file name to be "([^"]*)" on the attachment preview page$/, function(fileNameText) {
        if (browser.element('.backdrop').waitForVisible(15000, true)) {
            browser.refresh();
            let flag = true;
            setTimeout(function(){
                if(!flag){return;}
                flag =false;
                throw new Error("Newly created feed not found on Feeds Page");
            }, 5000);
            // This loop will keep finding the first feed element with attachment which has text content and last updated for new feed.
            while(flag){
                GroupsPage.feedElement.waitForVisible();
                var isFeedContent = GroupsPage.getFeedAttachmentElement(GroupsPage.feedElement).isExisting();
                if(isFeedContent){
                    let text = GroupsPage.getFeedContentNode(GroupsPage.feedElement).getText();
                    let lastUpdateText = GroupsPage.getFeedTimestampNode(GroupsPage.feedElement).getText();
                    if(text=="Test Feed" && lastUpdateText == "Last Updated Just Now"){
                        flag = false;
                        // Got feed Element
                        GroupsPage.getFeedAttachmentElement(GroupsPage.feedElement).waitForVisible();
                        GroupsPage.getFeedAttachmentElement(GroupsPage.feedElement).click();
                        GroupsPage.filePreview.waitForVisible();
                        expect(GroupsPage.filePreview.getText()).toEqual(fileNameText);
                        browser.close();
                    }
                }
            }
            // GroupsPage.feedAttachment.waitForVisible();
            // expect(GroupsPage.feedAttachment)
            // GroupsPage.feedAttachment.click();
            // GroupsPage.filePreview.waitForVisible();
            // expect(GroupsPage.filePreview.getText()).toEqual(fileNameText);
        }
    });

};
