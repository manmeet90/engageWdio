// Feature: Engage -- Groups
//
//   As an Engage user
//   I want Groups functionality
//   So that I can direct my communications to specific groups
//
// @watch
//   Background:
//     Given I visit "fmplogin"
//     And I log in with "test.user1@fourth.com" and "Password_001"
//
//   Scenario: Add a new Feed Item with attachment and @mention
//     Given I click the "Groups" side panel button
//     And I visit the "TS_QAI" group
//     When I add a new post
//     And I do a @mention for "Approver Testington"
//     And I click the "Submit" modal button
    //Then I see the new Feed post

    module.exports = function() {
      this.When(/^I click on new post button$/, function(){
        if(browser.waitForVisible(".nav-bar-container [nav-bar='active'] .right-buttons .button-icon",5000)){
        let addNewPostButton = browser.element(".nav-bar-container [nav-bar='active'] .right-buttons .button-icon");
          addNewPostButton.click();
        }
      });

      this.Then(/^click on attachment button$/, function(){
        if(browser.waitForVisible(".modal-add-post .post-feed-footer button.icon-attachment2")){
          browser.element(".modal-add-post .post-feed-footer button.icon-attachment2").click();
        }else{
          throw new Error("Attachment button not Found");
        }
      });

      this.Then(/^attach file "([^"]*)"$/, function(fileUrl){
        // browser.execute(function(){
        //   document.querySelector("#postFileField").style.display = "block";
        // });
        browser.chooseFile("#postFileField",fileUrl);
        // browser.element("#postFileField").setValue( fileUrl);
      });

      this.Then(/^I should see that file "([^"]*)" in attachment section on create post form$/, function(fileName){
        browser.pause(4000);
        expect(browser.element(".modal-add-post .post-feed-footer .filename").getText()).toEqual(fileName);
      });

      this.Then(/^I add post content "([^"]*)"$/, function(postMessage){
        browser.element(".modal-add-post .feed-text-area").setValue(postMessage);
      });

      this.Then(/^click on "Submit" button$/, function(){
        browser.pause(5000);
        let elem = browser.element(".modal-header button.primary-button:last-child");
        console.log(elem);
        if(elem && elem.value){
          elem.click();
        }else{
          throw new Error("Submit button not found on UI");
        }
      });

      this.Then(/^I should see the post on Feed$/, function(){
        let submitDone = browser.waitForVisible(".modal-add-post", 10000, true);
        if(submitDone){
          browser.refresh();
          browser.waitForVisible(".feeds .item:first-child", 8000);
          browser.waitForVisible(".feeds .item:first-child .file-thumbnail>img");
          browser.element(".feeds .item:first-child .file-thumbnail>img").click();
          browser.waitForVisible(".media-modal");
          expect(browser.element(".media-modal .file-name").getText()).toEqual("wrold.jpg");
        }
      });
    };
