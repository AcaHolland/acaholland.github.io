//var workSheetID = "";

//function setWorkSheetID (wsID) { workSheetID = wsID }

//Format for news article

/* {
    "id": ,
    "title": "",
    "date": "",
    "author": "",
    "body": "",
    "attachment": ""
} */

const getLocal = true;

// function parseMarkdown (markdown) {
//     let returnHTML = "";
//     for (i = 0; i < markdown.length; i++) {
//         if (markdown[i] == "#" && markdown[i-1] != "\\")
//     }
// }

function loadFeed (feed, newsDiv, articleCount) {
    if (!getLocal) {
        // Get remote feed.
    } else {
        newsDiv.html(function() {
            let returnData = "";
            for (i = 0; i < feed.articles.length; i++){
                let article = feed.article[i];
                
            }
        });
    }
}

$(document).ready(function() { if (!getLocal) loadFeed($("#news")); });