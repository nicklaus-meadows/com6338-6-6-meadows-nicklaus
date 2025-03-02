document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.querySelector(".hamburger-btn");
    const menu = document.querySelector(".hamburger-menu");

    function closeMenu() {
        menu.classList.remove("show-menu");
        hamburgerBtn.setAttribute("aria-expanded", "false");
    }

    hamburgerBtn.addEventListener("click", function (e) {
        const isExpanded = hamburgerBtn.getAttribute("aria-expanded") === "true";

        // menu handling 
        menu.classList.toggle("show-menu");

        //not 100% on this portion, but it seems to be the only option the code likes more that i have currently hfound
        hamburgerBtn.setAttribute("aria-expanded", !isExpanded);

    });

    document.addEventListener("click", function (e) {
        if (!menu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
            closeMenu();
        }
    });

    //test right now seem to have a problem here, but functionality seems ok. need to run more test, maybe from my close menu function too 
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && menu.classList.contains("show-menu")) {
            closeMenu();

        }
    });
});
