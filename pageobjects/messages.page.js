var Page = require('./page.js');

var MessagesPage = Object.create(Page, {
  searchUserModal: { get: function() { return browser.element('.search-people-modal'); } },
  searchBoxInput: { get: function() { return browser.element('.search-people-modal #search-input'); } },//try just #search-input
  searchResultsList: { get: function() { return browser.element('.search-people-modal .modal-content'); } },
  searchResultTargetUser: { get: function() { return browser.element('.search-people-modal .mention-search:first-child'); } },
  messageBox: { get: function() { return browser.element('textarea#post-textarea'); } },
  lastUpdatedTime: { get: function() { return browser.$('.list .item:first-child .relative-time-element'); } },
  messageBodyText: { get: function() { return browser.$('.feed-element .list p.content-text'); } },
  lastUpdatedTimeOnMessageDetails:{ get: function() { return browser.$('.feed-element .list .item:first-child .relative-time-element'); } },
  messageElement: { get: function() { return browser.$('.list .item:first-child'); } },// FIXME: can be done ina better way in future check with Team n devs
  messageTextArea: { get: function() { return browser.element('#post-textarea'); } },
  postButton: { get: function() { return browser.element('.primary-button'); } },
  commentItem: { get: function() { return browser.element('.comment-item'); } },

  messageMentionedUser : { get: function(){
    return browser.$(".view-container .feeds .item:first-child .feed-header");
  }},
  messageTimestamp : { get: function(){
    return browser.$(".view-container .feeds .item:first-child .relative-time-element");
  }},
  messageContent : { get: function(){
    return browser.$(".view-container .feeds .item:first-child .content-text");
  }},

  numberOfRepliesText : {
    get : function(){
      let elem = browser.$(".view-container .feeds .item:first-child .comment-counter>div:last-child .subdued");
      browser.pause(10000);
      if(elem){
        return elem;
      }
    }
  },

  numberOfRepliesTextInMessageDetailsPage : {
    get : function(){
      let elem = browser.$(".list .item:first-child .comment-counter>div:last-child .subdued");
      browser.pause(5000);
      if(elem){
        return elem;
      }
    }
  }
  //.primary-button
});

MessagesPage.hasMessageNodeWithMessage = function(messageText){
    let _selector = `.list p.content-text`;
    let _elem = browser.element(_selector);
    let result = _elem.getText() == messageText ? true : false;
    return {elem: _elem, result :result};
};

MessagesPage.hasReplyButtonForMessage = function(btnText){
    let elem = browser.$(".view-container .feeds .item:first-child .comment-counter .subdued");
    elem.waitForVisible(10000);
    if(elem && elem.value){
      return elem.getText() === btnText ? true : false;
    }else{
      return false;
    }
};

module.exports = MessagesPage;
