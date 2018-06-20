"use strict"

//********************************
//*** Ventana de alerta

const video = document.querySelector('.bostonVideo');

video.addEventListener("ended", function () {
   alert("MENSAJE \n\n El video ha terminado");
});