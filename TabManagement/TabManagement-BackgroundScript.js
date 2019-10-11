chrome.runtime.onInstalled.addListener(function () {
    console.log("Tab Savior Installed - TabManagement");
});

var TM_LastActiveTabs = new Map();

// Hanlde keyboard commands
chrome.commands.onCommand.addListener(function (command) {
    console.log('Command:', command);

    switch (command) {
        case 'CloseTabOnRight':
            chrome.tabs.query({
                currentWindow: true
            }, function (tabs) {
                var totalTabsNumber = tabs.length;
                chrome.tabs.query({
                    currentWindow: true,
                    active: true
                }, function (currentTab) {
                    var currentTabIndex = currentTab[0].index;
                    var tabsToRemove = [];
                    for (var i = currentTabIndex + 1; i < totalTabsNumber; i++) {
                        tabsToRemove.push(tabs[i].id);
                    }

                    chrome.tabs.remove(tabsToRemove, function () {
                        console.log("Right tabs removed");
                    });
                });
            });
            break;
        case 'SwitchToPreviousTab':
            // Get current window.
            chrome.windows.getCurrent({}, function (window) {
                chrome.tabs.query({
                    currentWindow: true,
                    active: true
                }, function (currentTab) {
                    var currentWindowId = window.id;
                    var currentTabId = currentTab[0].id;

                    // Get previous tab from cache.
                    var previousTabQueue = TM_LastActiveTabs.get(currentWindowId);
                    // No previous tab in cache.
                    if (previousTabQueue == undefined || previousTabQueue.length == 0) {
                        TM_LastActiveTabs.set(currentWindowId, [currentTabId]);
                        switchToNextTab();
                        return;
                    }

                    var previousTabId = previousTabQueue[0];
                    //console.log(`previousTabId=${previousTabId}`);
                    // Try to switch to previous tab.
                    chrome.tabs.get(previousTabId, function (tab) {
                        if (chrome.runtime.lastError) {                 // Previous tab not exist.
                            console.log(chrome.runtime.lastError.message);
                            // Clear cache and switch to next sibling.
                            switchToNextTab();
                            previousTabQueue.shift();
                        } else if (tab.windowId != currentWindowId) {   // Previous tab not in the same window
                            // Clear cache and switch to next sibling.
                            switchToNextTab();
                            previousTabQueue.shift();
                        }
                        else {
                            chrome.tabs.update(previousTabId, { "active": true });
                        }
                    });
                });
            });

            break;
        case 'ScrollToTop':
            chrome.tabs.executeScript({
                code: 'window.scrollTo(0, 0);'
            });
            break;
        case 'ForTest':
            chrome.tabs.query({
                currentWindow: true
            }, function (tabs) {
                var tabList = [];
                tabs.forEach(function (tab) {
                    //tabList.push({ title: tab.title, url: tab.url });
                    tabList.push({ title: tab.title, url: tab.url, favicon: tab.favIconUrl});
                });
                    console.log(tabList);

                // //console.log(tabList);
                // var myJSON = JSON.stringify(obj);
                var blob = new Blob([JSON.stringify(tabList)], { type: 'application/json' });
                    console.log(blob.size);
                    console.log(JSON.stringify(tabList).length);
                    console.log(JSON.stringify(tabList));

                    var string = JSON.stringify(tabList);
                    alert("Size of sample is: " + string.length);
                    var compressed = LZString.compress(string);
                    alert("Size of compressed sample is: " + compressed.length);
                    string = LZString.decompress(compressed);
                    alert("Sample is: " + string);
            });

            // Storage.Sync usage
            //console.log(chrome.storage.sync);


            break;
    }
});

// Add listener to tab switch event to keep track of last actived tab.
chrome.tabs.onActivated.addListener(function (activeInfo) {
    //console.log(activeInfo);
    //console.log();
    var queue = TM_LastActiveTabs.get(activeInfo.windowId);
    if (queue == undefined) {
        queue = [];
    } else if (queue.length > 1) {
        queue.shift();
    }
    queue.push(activeInfo.tabId);

    TM_LastActiveTabs.set(activeInfo.windowId, queue);

    console.log(queue);
});

function switchToNextTab() {
    chrome.tabs.query({
        currentWindow: true
    }, function (tabs) {
        var totalTabsNumber = tabs.length;
        chrome.tabs.query({
            currentWindow: true,
            active: true
        }, function (currentTab) {
            var currentTabIndex = currentTab[0].index;
            var nextTabIndex = (currentTabIndex + 1) % totalTabsNumber;
            chrome.tabs.highlight({ "tabs": nextTabIndex });
        });
    });
}
