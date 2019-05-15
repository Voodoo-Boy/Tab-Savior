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
chrome.contextMenus.onClicked.addListener(function() {
    console.log("context menu clicked");

    chrome.tabs.query({currentWindow: true}, function(tabs) {
        // Extract the favIcon, title, url of tabs in current window.
        var tabToSave = [];
        tabs.forEach(tab => {
            tabToSave.push({favIconUrl: tab.favIconUrl, title: tab.title, url: tab.url})
        });

        // Save to storage.
        var jsonString = JSON.stringify(tabToSave, null, '\t');
        chrome.storage.sync.set({tabs_1: tabToSave}, function() {
            console.log("Saved");
        });

        // chrome.storage.sync.get("tabs_1", function(items) {
        //     console.log("Get: ", items);
        // });

        chrome.storage.sync.getBytesInUse(null, function(bytesInUse) {
            console.log("Bytes in use: ", bytesInUse);
        });
    });
});

chrome.runtime.onStartup.addListener(function() {
    console.log("Starting...");
    chrome.browserAction.setBadgeText({text: ""});
});

chrome.runtime.onSuspend.addListener(function() {
    console.log("Unloading...");
    chrome.browserAction.setBadgeText({text: ""});
});