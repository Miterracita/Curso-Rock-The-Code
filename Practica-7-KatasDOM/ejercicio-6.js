// Elimina el elemento que tenga la clase .fn-remove-me.

let remove = document.querySelector(".fn-remove-me");
let body = document.querySelector("body");
body.removeChild(remove);