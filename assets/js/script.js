function navAppear() {
    displayType = document.getElementById("mobile-navigation-overlay");

    if (displayType.classList[1] === "hidden") {
        displayType.classList.remove("hidden");
        displayType.classList.add("displayed");
    } else {
        displayType.classList.remove("displayed");
        displayType.classList.add("hidden");
    }
}