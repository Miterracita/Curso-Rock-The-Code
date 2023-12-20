const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

//Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

let divPrintHere = document.querySelector('[data-function="printHere"]');
let ul = document.createElement("ul");

for(let i = 0; i < places.length; i++){

    let li = document.createElement("li");
    li.innerText = places[i];   
    ul.appendChild(li);
}

divPrintHere.appendChild(ul);