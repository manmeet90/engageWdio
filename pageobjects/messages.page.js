var Page = require('./page.js');

var MessagesPage = Object.create(Page, {
  searchUserModal: { get: function() { return browser.element('.search-people-modal'); } },
  searchBoxInput: { get: function() { return browser.element('.search-people-modal #search-input'); } },//try just #search-input
  searchResultsList: { get: function() { return browser.element('.search-people-modal .modal-content'); } },
  searchResultTargetUser: { get: function() { return browser.element('.search-people-modal .mention-search:first-child'); } },
  messageBox: { get: function() { return browser.element('textarea#post-textarea'); } },
  lastUpdatedTime: { get: function() { return browser.element('.list .item:first-child .relative-time-element'); } },
  messageBodyText: { get: function() { return browser.element('.feed-element .list p.content-text'); } },
  lastUpdatedTimeOnMessageDetails:{ get: function() { return browser.element('.feed-element .list .item:first-child .relative-time-element'); } },
  messageElement: { get: function() { return browser.element('.list .item:first-child'); } },// FIXME: can be done ina better way in future check with Team n devs
  messageTextArea: { get: function() { return browser.element('#post-textarea'); } },
  postButton: { get: function() { return browser.element('.primary-button'); } },
  commentItem: { get: function() { return browser.element('.comment-item'); } },
  messageTime: { get: function() { return browser.element("//p[contains(@class, \"relative-time-element\")][contains(text(), \"a few seconds ago\")]"); } },
  messageMentionedUser : { get: function(){
    return browser.element(".view-container .feeds .item:first-child .feed-header");
  }},

  messageTimestamp : { get: function(){
    return browser.element(".view-container .feeds .item:first-child .relative-time-element");
  }},

  messageContent : { get: function(){
    return browser.element(".view-container .feeds .item:first-child .content-text");
  }},

  numberOfRepliesText : {
    get : function(){
      let element = browser.element(".view-container .feeds .item:first-child .comment-counter>div:last-child .subdued");
      if(element){
        return element;
      }
    }
  },

  numberOfRepliesTextInMessageDetailsPage : {
    get : function(){
      let element = browser.element(".list .item:first-child .comment-counter>div:last-child .subdued");
      if(element){
        return element;
      }
    }
  }
});

MessagesPage.hasMessageNodeWithMessage = function(messageText){
    let selector = `.list p.content-text`;
    let element = browser.element(selector);
    let result = element.getText() == messageText ? true : false;
    return {element: element, result :result};
};

MessagesPage.hasReplyButtonForMessage = function(buttonText){
    let element = browser.element(".view-container .feeds .item:first-child .comment-counter .subdued");
    element.waitForVisible(2000);
    if(element.value){
      return element.getText() === buttonText ? true : false;
    }else{
      return false;
    }
};

module.exports = MessagesPage;
