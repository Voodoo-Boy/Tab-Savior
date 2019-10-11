chrome.runtime.onInstalled.addListener(function () {
    console.log("Tab Savior Installed - Context Menu - CopyLinkName");
    chrome.contextMenus.create({
        "id": "CopyLinkName",
        "title": "Copy Link Text",
        "contexts": ["link"]
    }, function () {
        console.log("Context Menu for copy link name created")
    }
    );
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    // When the copy link text context menu is clicked, execute a injected code snippet to get the link text.
    chrome.tabs.executeScript({
        code: 'navigator.clipboard.writeText(document.activeElement.textContent);'
    });
    //console.log(document.activeElement.textContent);
});
