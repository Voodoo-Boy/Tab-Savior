'use strict'

// Create "copy link text" item in context menu
chrome.runtime.onInstalled.addListener(function() {
    console.log("Installing...");
    chrome.contextMenus.create({
        "id": "tabsavior-contextmenu-id",
        "title": "copy link text",
        "contexts": ["link"]
      });
})

// Register listener for the context menu item..
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    console.log("context menu clicked");

    chrome.tabs.executeScript({
        file: 'copyLink.js'
    });

    console.log(`The active element=${link}`);
});

chrome.runtime.onStartup.addListener(function() {
    console.log("Starting...");
    chrome.browserAction.setBadgeText({text: ""});
});

chrome.runtime.onSuspend.addListener(function() {
    console.log("Unloading...");
    chrome.browserAction.setBadgeText({text: ""});
});