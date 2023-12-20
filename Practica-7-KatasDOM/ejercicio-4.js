// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

let button = document.createElement("button");
button.innerText = "Esto es un botón";
button.id = "btnToClick";
let body = document.querySelector("body");
body.appendChild(button);

button.addEventListener("click", function(event){
    console.log(event);
});

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

let focus = document.querySelector(".focus");

focus.addEventListener("focus", function(event){
    console.log(focus.value);
});

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

let input = document.querySelector(".input");

input.addEventListener("input", function(event){
    console.log(input.value);
});