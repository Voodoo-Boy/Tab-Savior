'use strict'

// Create "copy link text" item in context menu
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "id": "tabsavior-contextmenu-id",
        "title": "copy link text",
        "contexts": ["link"]
      });
})

// Register listener for the context menu item..
chrome.contextMenus.onClicked.addListener(function() {
    console.log("context menu clicked");
    console.log(document)
});
