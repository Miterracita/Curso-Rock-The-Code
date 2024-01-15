// Crea una función llamada swap que reciba un array y dos parametros que sean indices del array. 

// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. 

// Retorna el array resultante.


const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap (array, index1, index2){

  console.log(`Este es la array antes de modificarse. ${array}`);

   //cambiar posicicion par1 al par2
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;

   return array;
}

const resultado = swap(fantasticFour, 3, 0);
console.log(resultado);