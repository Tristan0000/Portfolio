var navHidden = true;
var transContainer = document.getElementById("transContainer");
var nav = document.getElementById("nav");
var home = document.getElementById("home");
var overmij = document.getElementById("overmij");
var myskills = document.getElementById("myskills");
var contact = document.getElementById("contact");

setTimeout(function() {
    transContainer.style.animationName = "none";
    transContainer.style.animationDuration = "2s";
}, 700);

function navHandler() {
    if (navHidden) {
        navHidden = false;
        nav.style.left = "0";
    } else {
        navHidden = true;
        nav.style.left = "-300px";
    }
}

function navi(location) {
    transContainer.style.animationName = "transition";
    setTimeout(function() {
        home.style.display = "none";
        overmij.style.display = "none";
        myskills.style.display = "none";
        contact.style.display = "none";
        document.getElementById(location).style.display = "block";
    }, 700);
    setTimeout(function () {
        transContainer.style.animationName = "none";
    },2000);
}