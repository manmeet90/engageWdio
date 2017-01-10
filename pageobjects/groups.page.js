var Page = require('./page.js');

var GroupsPage = Object.create(Page, {
    groupsList: {
        get: function() {
            return browser.element('.groups .item');
        }
    },
    attachmentIcon: {
        get: function() {
            return browser.element('.modal-add-post .post-feed-footer button.icon-attachment2');
        }
    },
    attachedFileName: {
        get: function() {
            return browser.element(".modal-add-post .post-feed-footer .filename");
        }
    },
    feedAttachment: {
        get: function() {
            return browser.element(".feeds .item .file-thumbnail>img");
        }
    },
    feedElement : {get : function(){
            return browser.element(".feeds .item");
    }},
    filePreview: {
        get: function() {
            return browser.element(".media-modal .file-name");
        }
    }
});

GroupsPage.getFeedAttachmentElement = function(feedElement){
    return feedElement.element(".file-thumbnail>img");
};

GroupsPage.getFeedContentNode = function(feedElement){
    return feedElement.element(".content-text");
};

GroupsPage.getFeedTimestampNode = function(feedElement){
    return feedElement.element(".relative-time-element");
};

module.exports = GroupsPage;
