// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let ul = document.createElement("ul");
let theBody = document.querySelector("body");
theBody.appendChild(ul);

for(let i = 0; i < countries.length; i++){
    let li = document.createElement("li");
    li.innerText = countries[i];
    ul.appendChild(li);
}

console.log(theBody);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

let eliminar = document.querySelector(".fn-remove-me");
eliminar.remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let ulDos = document.createElement("ul");
let theDiv = document.querySelector("[data-function='printHere']");
theDiv.appendChild(ulDos);

for(let i = 0; i < cars.length; i++){
    let liDos = document.createElement("li");
    liDos.innerText = cars[i];
    ulDos.appendChild(liDos);
}

console.log(theDiv);

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const countriesDos = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for(let i= 0; i < countriesDos.length; i++){

    let divCountries = document.createElement("div");
    divCountries.classList.add("cada-elemento");

    let h4Div = document.createElement("h4");
    h4Div.innerText = countriesDos[i].title;

    let imgDiv = document.createElement("img");
    imgDiv.src = countriesDos[i].imgUrl;

    let buttonDiv = document.createElement("button");
    buttonDiv.innerText = "eliminar div";
    
    divCountries.appendChild(h4Div);
    divCountries.appendChild(imgDiv);
    divCountries.appendChild(buttonDiv);
    document.body.appendChild(divCountries);

    //funcion para borrar el div 
    buttonDiv.addEventListener("click" , function () {
        document.body.removeChild(divCountries);
    });
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la serie de divs.

let button = document.createElement("button");
button.innerText = "Borrar el último div";
theBody.appendChild(button);

//seleccionar el último elemento div con la clase cada-elemento y agregarle una clase
let divs = document.querySelectorAll(".cada-elemento");
if (divs.length > 0) {
    let ultimoDiv = divs[divs.length - 1];
    ultimoDiv.classList.add("ultimo-elemento");
}

let borrarUltimoDiv = () => {
    
    let divToDelete = document.querySelector(".ultimo-elemento");
    console.log(divToDelete);
    //borrar el último div
    theBody.removeChild(divToDelete);
};

button.addEventListener("click", borrarUltimoDiv);

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// divs que elimine ese mismo elemento del html.
