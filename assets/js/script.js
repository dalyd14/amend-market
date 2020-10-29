function navAppear() {
    mobileNavOverlay = document.getElementById("mobile-navigation-overlay");
    mobileNavbar = document.getElementById("mobile-navbar-header");

    if (mobileNavOverlay.classList.contains("overlay-hidden")) {
        mobileNavOverlay.classList.remove("overlay-hidden");
        mobileNavOverlay.classList.add("overlay-displayed");
        mobileNavbar.classList.add("mobile-navbar-header-overlay");

    } else {
        mobileNavOverlay.classList.remove("overlay-displayed");
        mobileNavOverlay.classList.add("overlay-hidden");
        mobileNavbar.classList.remove("mobile-navbar-header-overlay");
    }

    btnTopBar = document.getElementById("top-bar");
    btnBottomBar = document.getElementById("bottom-bar");

    if (btnTopBar.classList.contains("top-bar-overlay")) {
        btnTopBar.classList.remove("top-bar-overlay");
        btnBottomBar.classList.remove("bottom-bar-overlay");
    } else {
        btnTopBar.classList.add("top-bar-overlay");
        btnBottomBar.classList.add("bottom-bar-overlay");
    }

    amendLogo = document.getElementById("amend-logo");

    if (amendLogo.classList.contains("amend-logo-overlay")) {
        amendLogo.classList.remove("amend-logo-overlay")
        amendLogo.classList.add("amend-logo-normal")
    } else {
        amendLogo.classList.add("amend-logo-overlay")
        amendLogo.classList.remove("amend-logo-normal")
    }

    pageBody = document.body;

    if (pageBody.classList.contains("navigation-overlay")) {
        pageBody.classList.remove("navigation-overlay")
    } else {
        pageBody.classList.add("navigation-overlay")
    }
}