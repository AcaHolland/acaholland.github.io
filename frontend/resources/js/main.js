function toggleSideNav () {
    if ($("#sideNavBar").css("width") != "250px") {
        $("#sideNavBar").css({"width": "250px", "border-right": "4px steelblue double"});
        $("#core").css({"opacity": "50%"});
    } else {
        $("#sideNavBar").css({"width": "0", "border-right": "none"});
        $("#core").css({"opacity": "100%"});
    }
}

function toggleCredits () {
    if (!$("#footer").hasClass("is-fullheight")) {
        $("#footer").addClass("is-fullheight");
    } else $("#footer").removeClass("is-fullheight");
}

function togglePoems () {
    let sideNavBarDropdown = $("#sideNavBar .menu-list li ul");
    if (sideNavBarDropdown.hasClass("is-hidden")) {
        sideNavBarDropdown.removeClass("is-hidden");
    } else {
        sideNavBarDropdown.addClass("is-hidden"); 
    }
}

function loadSiteActivity () {
    toggleCredits();
}

$(document).ready(function() {

    $("#burger").click(function() {
        toggleSideNav();
    });

    $("#legal").click(function() {
        toggleCredits();
    });

    $("#sideNavBar .menu-list li a span").click(function() {
        togglePoems();
    });

});