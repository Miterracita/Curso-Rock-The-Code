// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers[0]);

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

const avengers1 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

const eliminar = avengers1.shift();
const anyadir = avengers1.unshift("IRONMAN");
console.log(avengers1);

// 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

const avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers2.length);

// 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
// Muestra en consola el último personaje del array
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
const more = rickAndMortyCharacters.push("Morty","Summer");
console.log(rickAndMortyCharacters);

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
const deleteRickAndMortyCharacters = rickAndMortyCharacters2.pop();
console.log(`El elemento eliminado es ${deleteRickAndMortyCharacters}`);
console.log(rickAndMortyCharacters2[0]);
console.log(rickAndMortyCharacters2[4]);


// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

const rickAndMortyCharacters3 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
const deleteSecond = rickAndMortyCharacters3.splice(1,1);

console.log(`Se ha eliminado: ${deleteSecond}. La array ahora queda de la siguiente manera: ${rickAndMortyCharacters3}`);