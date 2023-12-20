// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const showMe = document.querySelector(".showme");
console.log(showMe);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const pillado = document.querySelector("#pillado");
console.log(pillado);

// 1.3 Usa querySelector para mostrar por consola todos los p

const todosP = document.querySelectorAll("p");
console.log(todosP);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con 
// la clase.pokemon

const todosPokemon = document.querySelectorAll(".pokemon");
console.log(todosPokemon);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con 
// el atributo data-function="testMe".

const todosTestMe = document.querySelectorAll('[data-function="testMe"]');
console.log(todosTestMe);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".

const todosTestMe2 = document.querySelectorAll('[data-function="testMe"]');
console.log(todosTestMe2[3]);