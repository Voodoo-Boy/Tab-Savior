let saveTabsButton = document.getElementById('saveTabs');
let restoreTabsButton = document.getElementById('restoreTabs');

saveTabsButton.onclick = function(event) {
    chrome.tabs.query({currentWindow: true}, function(tabs) {
        // Extract the favIcon, title, url of tabs in current window.
        var tabToSave = [];
        tabs.forEach(tab => {
            tabToSave.push({favIconUrl: tab.favIconUrl, title: tab.title, url: tab.url})
        });

        // Save to storage.
        chrome.storage.sync.set({tabs_1: tabToSave}, function() {
            console.log("Saved");
        });

        log2Background("Save tabs");
        var jsonString = JSON.stringify(tabToSave, null, '\t');
        log2Background(jsonString);

        chrome.storage.sync.getBytesInUse(null, function(bytesInUse) {
            log2Background(`Storage Used:${bytesInUse}/${chrome.storage.sync.QUOTA_BYTES}`);
        });
    });
};

restoreTabsButton.onclick = function(event) {
    chrome.storage.sync.get("tabs_1", function(items) {
        let urlToOpen = [];
        items.tabs_1.forEach(item => {
            urlToOpen.push(item.url);
        });
        log2Background(urlToOpen);
        chrome.windows.create({url: urlToOpen});
    });
    log2Background("Finish");
};


var log2Background = chrome.extension.getBackgroundPage().console.log;