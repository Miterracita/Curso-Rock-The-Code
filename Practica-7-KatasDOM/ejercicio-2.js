// 1.1 Inserta dinamicamente en un html un div vacio con javascript.

let newDiv = document.createElement("div");
let insertDiv = document.querySelector("body");

insertDiv.appendChild(newDiv);

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

let newDivDos = document.createElement("div");
newDivDos.classList.add("div-con-p");

let newP = document.createElement("p");

newDivDos.appendChild(newP);

let body = document.querySelector("body");

body.appendChild(newDivDos);

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
// 	loop con javascript.

// aquí creo el div contenedor, la añado la clase y lo inserto dentro del body
let newDivTres = document.createElement("div");
newDivTres.classList.add("div-con-p-tres");

let bodyTres = document.querySelector("body");
bodyTres.appendChild(newDivTres);

let div = document.querySelector(".div-con-p-tres");

for (let i = 0; i < 6; i++){
    let newPTres = document.createElement("p");
    div.appendChild(newPTres);
}

console.log(div);

// 1.4 Inserta dinamicamente con javascript en un html una p con el 
// 	texto 'Soy dinámico!'.

let bodyHtml = document.querySelector("body");
let parrafo = document.createElement("p");
parrafo.innerText ="Soy dinámico!";
bodyHtml.appendChild(parrafo);

console.log(parrafo);

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

let h2 = document.createElement("h2");
h2.classList.add(".fn-insert-here");
h2.innerText = "Wubba Lubba dub dub";
console.log(h2);


// 1.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];


const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let ul = document.createElement("ul");

for(let i = 0; i < apps.length; i++){
    let li = document.createElement("li");
    li.innerText = apps[i];
    ul.appendChild(li);
}
console.log(ul);

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let theBody = document.querySelector("body");
let conClase = document.querySelectorAll(".fn-remove-me");

for(i=0; i<conClase.length; i++){
    conClase[i].remove();
}

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

let pVoy = document.createElement("p");
pVoy.innerText = "Voy en medio!";
let primerDiv = document.querySelector("div.fn-insert-here");


document.body.insertBefore(pVoy, primerDiv);
console.log(theBody);

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
// 	.fn-insert-here

let losDivs = document.querySelectorAll("div.fn-insert-here");

for(let i = 0; i < losDivs.length; i++){
    let pInsert = document.createElement("p");
    pInsert.innerText = "Voy dentro!";
    losDivs[i].appendChild(pInsert);
}

console.log(theBody);