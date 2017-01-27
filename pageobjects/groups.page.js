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
    feeds: {
        get: function() {
            return browser.elements(".menu-content .pane[nav-view='active'] .feeds .list .item");
        }
    },
    feedElement: {
        get: function() {
            return browser.element(".menu-content .pane[nav-view='active'] .feeds .list .item:first-child");
        }
    },
    groupFeedDetailElement: {
        get: function() {
            return browser.element(".menu-content .pane[nav-view='active'] .feed-element .list .item");
        }
    },
    groupFeedDetailElementContent: {
        get: function() {
            return browser.getText(".menu-content .pane[nav-view='active'] .feed-element .list .item .content-text");
        }
    },
    groupFeedDetailElementLikeButton: {
        get: function() {
return browser.element(".menu-content .pane[nav-view='active'] .feed-element .list .item:first-child footer>div>div:first-child");
        }
    },
    groupFeedDetailElementLikeButtonText: {
        get: function() {
            return browser.getText(".menu-content .pane[nav-view='active'] .feed-element .list .item:first-child footer>div>div:first-child .subdued");
        }
    },
    groupFeedDetailElementLikesCountElement: {
        get: function() {
            return browser.element(".menu-content .pane[nav-view='active'] .feed-element .list .item:first-child footer>div>div:last-child>div:first-child .subdued");
        }
    },
    groupFeedDetailElementRepliesCountElement: {
        get: function() {
            return browser.element(".menu-content .pane[nav-view='active'] .feed-element .list .item:first-child footer>div>div:last-child>div:last-child .subdued");
        }
    },
    groupFeedDetailElementDeleteButton: {
        get: function() {
            return browser.element(".icon-uniE708");
        }
    },
    groupFeedDetailElementEditButton: {
        get: function() {
            return browser.element(".menu-content .pane[nav-view='active'] .feed-element .list .item:first-child .feed-additional-buttons span[ng-if='edit_access']");
        }
    },
    DeletePostModalButtons: {
        get: function() {
            return browser.elements(".popup-buttons button");
        }
    },
    filePreview: {
        get: function() {
            return browser.element(".media-modal .file-name");
        }
    },
    addPostTextArea: {
        get: function() {
            return browser.element(".modal-add-post .feed-text-area");
        }
    },
    feedReplyTextBox: {
        get: function() {
            return browser.element(".comment-footer .feed-text-area");
        }
    },
    feedReplyPostButton: {
        get: function() {
            return browser.element(".comment-footer button.primary-button");
        }
    },
    feedReplyCommentPost: {
        get: function() {
            return browser.element(".menu-content .pane[nav-view='active'] .feed-element .comment-item");
        }
    },
    feedReplyCommentPostContent: {
        get: function() {
            return browser.getText(".menu-content .pane[nav-view='active'] .feed-element .comment-item header>div:first-child>p:last-child");
        }
    }

});

GroupsPage.getFeedAttachmentElement = function(feedElement) {
    return feedElement.element(".file-thumbnail>img");
};

GroupsPage.getFeedContentNode = function(feedElement) {
    return feedElement.element(".content-text");
};

GroupsPage.getFeedTimestampNode = function(feedElement) {
    return feedElement.element(".relative-time-element");
};

module.exports = GroupsPage;
