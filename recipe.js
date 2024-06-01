function showTab(event, tabId) {
    event.preventDefault();
    var tabContents = document.querySelectorAll(".tab-pane");
    tabContents.forEach(function (tabContent) {
        tabContent.classList.remove("show", "active");
    });

    var tabLinks = document.querySelectorAll(".nav-link");
    tabLinks.forEach(function (tabLink) {
        tabLink.classList.remove("active");
    });

    document.getElementById(tabId).classList.add("show", "active");
    event.currentTarget.classList.add("active");
}