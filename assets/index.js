const loaderDiv = document.querySelector("#loader-div");
window.addEventListener("load", function() {
    loaderDiv.classList.add("hidden");
})


const toggleNav = document.querySelector("#toggleNav");
const sideBar = document.querySelector("#sidebar");

toggleNav.addEventListener("click", function(e) {
    toggleNav.classList.toggle("collapsed");
    if(!toggleNav.classList.contains("collapsed")) {
        sideBar.classList.remove("max-h-0");
        sideBar.classList.add("max-h-[25rem]");
    }
    else {
        sideBar.classList.remove("max-h-[25rem]");
        sideBar.classList.add("max-h-0");
    }
})

const links = document.querySelectorAll("#sidebar li a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        toggleNav.classList.add("collapsed");
        sideBar.classList.remove("max-h-[25rem]");
        sideBar.classList.add("max-h-0");
    })
})

document.addEventListener("click", function(e) {
    if(!toggleNav.contains(e.target) && !sideBar.contains(e.target)) {
        toggleNav.classList.add("collapsed");
        sideBar.classList.remove("max-h-[25rem]");
        sideBar.classList.add("max-h-0");
    }
})