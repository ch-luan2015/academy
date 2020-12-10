// Sidebar toggle

var toggleBtn = document.querySelector(".sidebar-mini__button");
var sidebarMini = document.querySelector(".sidebar-mini");
var switchBtn = document.querySelector("#checkbox");


toggleBtn.addEventListener("click", function () {
    sidebarMini.classList.toggle("is-opened")
})
