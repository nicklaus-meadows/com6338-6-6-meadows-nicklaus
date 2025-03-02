document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.querySelector(".hamburger-btn");
    const menu = document.querySelector(".hamburger-menu");

    function closeMenu() {
        menu.classList.remove("show-menu");
        hamburgerBtn.setAttribute("aria-expanded", "false");
    }

    hamburgerBtn.addEventListener("click", function (e) {
        const isExpanded = hamburgerBtn.getAttribute("aria-expanded") === "true";

        // Toggle the show-menu class
        menu.classList.toggle("show-menu");

        // Update the aria-expanded attribute
        hamburgerBtn.setAttribute("aria-expanded", !isExpanded);

    });

    document.addEventListener("click", function (e) {
        if (!menu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && menu.classList.contains("show-menu")) {
            closeMenu();

        }
    });
});