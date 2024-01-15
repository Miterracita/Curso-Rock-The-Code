// Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto
//  y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

// Haz varios ejemplos y compruebalos.

// Sugerencia de función:
// function findArrayIndex(array, text) {}


// const mainCharacters = [
//   "Luke",
//   "Leia",
//   "Han Solo",
//   "Chewbacca",
//   "Rey",
//   "Anakin",
//   "Obi-Wan",
// ];

function findArrayIndex (array, text) {

  for(let i=0; i< array.length; i++){
    if(array[i] == text){
      console.log(`El valor del elemento del array ${array[i]} coincide con el valor de ${text}, su posición es ${i}`);
    }
  }
}

const Miarray = [
  'Calamares',
  'Bocadillo',
  'Patatilla',
  'Jamón',
];

const MyText = 'Patatilla';

findArrayIndex(Miarray, MyText);