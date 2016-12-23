// var Page = require('../../pageobjects/page');
// var MainPage = require('../../pageobjects/main.page');
// var GroupsPage = require('../../pageobjects/groups.page');
//
// var MarketPlaceApp = require('../../pageobjects/marketplace.app');
//
// module.exports = function() {
//     this.Given(/^I visit "([^"]*)"$/, function(text) {
//         Page.open(text);
//     });
//
//     this.Given(/^I click the "([^"]*)" side panel button$/, function(text) {
//         MainPage.leftSidePanel.waitForVisible(10000);
//         MainPage.leftSidePanel.click('*=' + text);
//     });
//
//     this.Given(/^I open the "([^"]*)" Connected App$/, function(text) {
//         MainPage.firstConnectedApps.waitForVisible();
//         var ids = MainPage.firstConnectedApps;
//         var t0 = process.hrtime();
//         for (var i = 0; i < ids.value.length; i++) {
//             var element = ids.value[i].ELEMENT;
//             if (browser.elementIdText(element).value === text) {
//                 browser.elementIdClick(element);
//                 break;
//             }
//         }
//
//         var first_tab = browser.getCurrentTabId();
//         browser.pause(1000);
//         var second_tab = browser.getTabIds()[1];
//         browser.switchTab(second_tab);
//
//         MarketPlaceApp.heroContent.waitForVisible();
//         var t1 = process.hrtime();
//         console.log(t0, t1, '1000');
//         // var t0 = performance.now();
//         // var t1 = performance.now();
//         // console.log("Opening " + text + " took " + (t1 - t0) + " milliseconds.");
//     });
//
//     this.Given(/^I visit the "([^"]*)" group$/, function(text) {
//         GroupsPage.groupsList.waitForVisible();
//         GroupsPage.groupsList.click('=' + text);
//     });
//
// };
