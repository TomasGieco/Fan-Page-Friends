"use strict"

var boton = document.querySelector(".btn");

boton.addEventListener("click", function () {
    if (window.location.href.includes("Friends.html")) {
        window.location.replace("Pagina2.html");
    } else {
        window.location.replace("Friends.html");
    }
});