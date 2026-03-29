let menu = document.querySelector("#menu-icon");
let menulist = document.querySelector("ul");

menu.addEventListener("click", () => {
    menulist.classList.toggle("open");
});