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

    this.Then(/^refresh the feed page$/, function(){
        browser.refresh();
        GroupsPage.feeds.waitForVisible();
        GroupsPage.feedElement.click();
    });

    this.When(/^I click on Like button$/, function(){
        GroupsPage.groupFeedDetailElement.waitForVisible();
        GroupsPage.groupFeedDetailElementLikeButton.click();
    });

    this.When(/^I verify that number of likes on the post become ([^"]*)$/, function(likesCount){
        browser.waitUntil(function(){
            return GroupsPage.groupFeedDetailElementLikeButtonText === "liked";
        });
        var numberOfLikes = GroupsPage.groupFeedDetailElementLikesCountElement.getText();
        expect(numberOfLikes).toEqual(likesCount);
    });

    this.When(/^I click on delete button$/, function(){
        GroupsPage.groupFeedDetailElementDeleteButton.waitForVisible();
        GroupsPage.groupFeedDetailElementDeleteButton.click();
    });

    this.When(/^I confirm the deletion$/, function(){
        GroupsPage.DeletePostModalButtons.waitForVisible();
        GroupsPage.DeletePostModalButtons.click("button*=Delete");
    });

    this.Then(/^I verify that post is successfully deleted from the feed trail$/, function(){
        GroupsPage.feeds.waitForVisible();
        
        var feedTimeMatched = GroupsPage.getFeedTimestampNode(GroupsPage.feedElement).getText().toLowerCase() == "last updated just now" ? true : false;
        var feedTextContentMatched = GroupsPage.getFeedContentNode(GroupsPage.feedElement).getText().toLowerCase() == "test feed" ? true : false;
        if(feedTimeMatched){ // when all tests run together feedTime may match but feed content should not matched
            if(!feedTextContentMatched){
                expect(true).toEqual(true);
            }
        }else if(!feedTextContentMatched && !feedTimeMatched){ // when scenario for delete feed test ran alone neither feedtime nor feedtext should match
            expect(true).toEqual(true);
        }else{
            expect(true).toEqual(false);
        }
    });

    

    

    

    
    

};
