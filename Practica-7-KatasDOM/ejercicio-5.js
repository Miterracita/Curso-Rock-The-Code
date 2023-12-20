// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
// que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

let ul = document.createElement("ul");
let body = document.querySelector("body");

for(let i = 0; i < albums.length; i++){

    let li = document.createElement("li");
    li.innerText = albums[i];
    ul.appendChild(li);

}

body.appendChild(ul);