chrome.runtime.onInstalled.addListener(function () {
    console.log("Tab Savior Installed - Context Menu - CopyLinkName");
    chrome.contextMenus.create({
        "id": "CopyLinkName",
        "title": "Copy Link Text",
        "contexts": ["selection"]
//        "contexts": ["link"]
    }, function () {
        console.log("Context Menu for copy link name created")
    }
    );
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    
    //console.log(info);

    var ae = document.activeElement;
    console.log(ae);
});
