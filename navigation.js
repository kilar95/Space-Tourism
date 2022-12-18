// when someone clicks the hamburger button
// if the nav is closed, open it
// if the nav is open, close it

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const isOpen = nav.getAttribute("data-visible")

    if (isOpen === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }

    console.log(isOpen);
})