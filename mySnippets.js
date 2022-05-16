// Main
$(document).ready(function() {
    console.log("My Snippets is running...");

    let initialBoard = "";
    chrome.storage.local.get(["allContent", "allStyle", "allType"], function(data) {
        console.log("Getting data from storage...");
        let snippet = document.createElement("div");
        if (data) {
            initialBoard = "<div id='init'>Good to go.</div>";
            let tmpStyle = JSON.parse(data.allStyle[0]);
            snippet.innerHTML = data.allContent[0];
            // let tmpStyle = data.allStyle[0];
            console.log(tmpStyle);
            let finalStyle = "";
            for (const [key, value] of Object.entries(tmpStyle)) {
                // if (!Number.isNaN(key)) {
                //     continue;
                // }
                console.log(key +'='+'"'+value+'"');
                finalStyle += (key + ': ' + value + '; ');
                // snippet.style.setProperty(key, value);
            }
            console.log(finalStyle);
            // snippet.style.cssText = finalStyle;
            // snippet.setAttribute("style", finalStyle);
            // snippet.setAttribute("style", JSON.parse(data.allStyle[0]));
            Object.assign(snippet.style, JSON.parse(data.allStyle[0]))
            // snippet.style.cssText = JSON.parse(data.allStyle[0]);
            // console.log(JSON.parse(data.allStyle[0]));
            console.dir(snippet);
        } else {
            initialBoard = "<div id='init'>There is currently no snippets.</div>";
        }
        $('.wrap').append(initialBoard);
        $('.wrap').append(snippet);
    });
});