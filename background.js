'use strict'

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({In: '#3aa757'}, function() {
        console.log("The color is green.");
      });
      alert("Tab savior installed");
})

// Create menu item for "Link" context type.