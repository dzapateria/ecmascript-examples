"use strict"

//********************************
//*** Ventana para ingreso de datos

const video = document.querySelector('.bostonVideo');

video.addEventListener("ended", function () {
   let email = prompt("Escribe tu correo para ver mas videos",  "data@info.com");
  
   if (email == null || email == "") {
        console.log("Sin datos");
    } else {
        console.log(email);
    }
});