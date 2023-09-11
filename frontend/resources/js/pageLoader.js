//https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

$(document).ready(function() {
    let pageRequest = "";
    if (getParameterByName("p", window.location.href) != null) {
        pageRequest = getParameterByName("p", window.location.href);
    } else {
        pageRequest = getParameterByName("page", window.location.href);
    }
    if (pageRequest == "teaching" || pageRequest == "teach" ||
        pageRequest == "editing" || pageRequest == "edit") { pageRequest = "teaching"; }
    //console.log("Break");
    // $.get({
    //     url: "../pages/" + pageRequest + ".html",
    //     success: function(pageData) {
    //         console.log("Break");
    //         $("#contentContainer").html(pageData);
    //     }, 
    //     dataType: "html"
    // });

    $("#contentContainer").load("../pages/" + pageRequest + ".html");

    // $("#homePageButton").click(function() {
    //     $("#contentContainer").load("../pages/home.html");
    // });

    // $("#aboutPageButton").click(function() {
    //     $("#contentContainer").load("../pages/about.html");
    // });
});

function manuallyLoadPage(pageData) {
    $("#contentContainer").html(pageData);
}
