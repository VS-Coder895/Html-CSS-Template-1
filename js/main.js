// Menu bar
let menuBtn = document.querySelector("header .links .icon");
let navBarUL = document.querySelector("header .links ul");
let navBarLink = document.querySelectorAll("header .links ul > *");

menuBtn.onclick = () => {
    document.querySelector("header .links ul").classList.toggle("active");
};

navBarLink.forEach(link => {
    link.onclick = function () {
        navBarUL.classList.remove("active");
    }
})



// to-up Button

let toUpBtn = document.getElementById("to-up-btn");


window.onscroll = function () {
    if (window.scrollY > 750) {
        toUpBtn.classList.add("active");
    }
    else {
        toUpBtn.classList.remove("active");
    }
}