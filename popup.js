let bigButton = document.getElementById('bigButton');

bigButton.onclick = function(event) {
    // let color = element.target.value;
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //   chrome.tabs.executeScript(
    //       tabs[0].id,
    //       {code: 'document.body.style.backgroundColor = "' + color + '";'});
    // });
    
        // chrome.storage.sync.get("tabs_1", function(items) {
        //     console.log("Get: ", items);
        // });

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