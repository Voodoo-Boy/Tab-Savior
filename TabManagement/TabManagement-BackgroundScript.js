chrome.runtime.onInstalled.addListener(function () {
    console.log("Tab Savior Installed - TabManagement");
});

chrome.commands.onCommand.addListener(function (command) {
    console.log('Command:', command);
    var ret = chrome.tabs.query({
        currentWindow: true
    }, function (tabs){
        console.log("total tabs in current window="+tabs.length);

        var totalTabsNumber = tabs.length;
        chrome.tabs.query({
            currentWindow: true,
            active: true
        }, function (currentTab) {
            console.log("current tab index=" + currentTab[0].index);

            var currentTabIndex = currentTab[0].index;
            var tabsToRemove = [];
            for (var i = currentTabIndex + 1; i < totalTabsNumber; i++) {
                tabsToRemove.push(tabs[i].id);
            }
            
            console.log("tabs to remove=" + tabsToRemove);

            chrome.tabs.remove(tabsToRemove, function()
            {
                console.log("Right tabs removed");
            });
        });
    });
});