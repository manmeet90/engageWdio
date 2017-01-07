var Page = require('./page.js');

var FeedPage = Object.create(Page, {
    searchUserModal: {
        get: function() {
            return browser.element('.search-people-modal');
        }
    },
    searchBoxInput: {
        get: function() {
            return browser.element('.search-people-modal #search-input');
        }
    }, //try just #search-input
    // submitModalButton: {
    //   get: function() {
    //       return browser.element('.primary-button');
    //   }
    // },
    searchResultsList: {
        get: function() {
            return browser.element('.search-people-modal .modal-content');
        }
    },
    searchResultTargetUser: {
        get: function() {
            return browser.element('.search-people-modal .mention-search:first-child');
        }
    },
    messageBox: {
        get: function() {
            return browser.element('textarea#post-textarea');
        }
    },
    lastUpdatedTime: {
        get: function() {
            return browser.getText('.list > .item:first-child p.relative-time-element');
        }
    },
    messageBodyText: {
        get: function() {
            return browser.element('.feed-element .list p.content-text');
        }
    },
    lastUpdatedTimeOnMessageDetails: {
        get: function() {
            return browser.element('.feed-element .list .item:first-child .relative-time-element');
        }
    },
    messageElement: {
        get: function() {
            return browser.element('.list .item:first-child');
        }
    }, // FIXME: can be done ina better way in future check with Team n devs
    messageTextArea: {
        get: function() {
            return browser.element('#post-textarea');
        }
    },
    postButton: {
        get: function() {
            return browser.element('.primary-button');
        }
    },
    commentItem: {
        get: function() {
            return browser.element('.comment-item');
        }
    }
});

FeedPage.hasFeedNodeWithPost = function(PostText) {
    let selector = `.list p.content-text`;
    let elem = browser.element(selector);
    let result = elem.getText() == PostText
        ? true
        : false;
    return {elem: elem, result: result};
};

module.exports = FeedPage;
