console.log("popup js running...");


const drawBox = document.getElementById("draw-box");
const snippetsStorage = document.getElementById("snippets-storage");


drawBox.onclick = function(e) {
    e.preventDefault();
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id,
                                {greeting: "TAKE_ACTION"},
                                function(response) {
                                    console.log(response.farewell);
                                });
    });
    window.close();
};


snippetsStorage.onclick = function(e) {
    e.preventDefault();
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id,
                                {greeting: "TAKE_ACTION"},
                                function(response) {
                                    console.log(response.farewell);
                                });
    });
    window.close();
};



