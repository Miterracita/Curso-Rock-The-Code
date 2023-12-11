/*
Contador de repeticiones:
Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
Puedes usar este array para probar tu función:
*/

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(counterWords) {

    let wordRepeat =[];
    let suma = 0;

    for(let i=0; i < counterWords.length; i++){

      if (wordRepeat.indexOf(counterWords[i]) === -1){
        wordRepeat.push (counterWords[i]);
        suma++
      }
    }

    return suma;
  }


  function contarRepeticiones(array) {
    // Creamos un objeto para almacenar la frecuencia de cada palabra
    let frecuenciaPalabras = {};
  
    // Iteramos sobre cada palabra en el array
    for (let i = 0; i < array.length; i++) {
      // Obtener la palabra actual
      let palabra = array[i];
  
      // Verificar si la palabra ya está en el objeto frecuenciaPalabras
      if (frecuenciaPalabras[palabra]) {
        // Si existe, incrementar el contador
        frecuenciaPalabras[palabra]++;
      } else {
        // Si no existe, inicializar el contador en 1
        frecuenciaPalabras[palabra] = 1;
      }
    }
  
    // Devolvemos el objeto con la frecuencia de cada palabra
    return frecuenciaPalabras;
  }
  
  // Llamamos a la función con el array de ejemplo
  const frecuenciaPalabras = contarRepeticiones(counterWords);
  
  // Mostramos el resultado en la consola
  console.log(frecuenciaPalabras);
  