// Feature: Engage -- Groups
//
//   As an Engage user
//   I want Groups functionality
//   So that I can direct my communications to specific groups
//
// @watch
//   Background:
//     Given I visit "fmplogin"
//     And I log in with "lionel.adams@fourth.com" and "Password3"
//
//   Scenario: Add a new Feed Item with attachment and @mention
//     Given I click the "Groups" side panel button
//     And I visit the "TS_QAI" group
//     When I add a new post
//     And I do a @mention for "Approver Testington"
//     And I click the "Submit" modal button
    //Then I see the new Feed post

    module.exports = function() {
    this.Then(/^I see the new Feed post$/, function() {
    //         // Write code here that turns the phrase above into concrete actions
             return 'pending';
    //
     });
   };
