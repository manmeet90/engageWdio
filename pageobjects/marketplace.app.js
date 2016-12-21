var Page = require('./page.js');

var MarketPlaceApp = Object.create(Page, {
  heroContent: { get: function() { return browser.element('.hero--content'); } }
});

module.exports = MarketPlaceApp;
