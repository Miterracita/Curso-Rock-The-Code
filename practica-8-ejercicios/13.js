// Usando la función anterior beneficiate de poder conocer el indice [i] del array para crear una función llamada removeItem
// que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio)  
// llame a la función anteriormente creada findArrayIndex y obten el indice 
// para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.

// retorna el array.

function findArrayIndex (array, text) {
 
    for(let i=0; i< array.length; i++){
      if(array[i] == text){
        console.log(`El valor del elemento del array ${array[i]} coincide con el valor de ${text}, su posición es ${i}`);
        
        return i;
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

  ///

  function removeItem (array, text){
    const i= findArrayIndex(array, text);

    console.log(i);
    array.splice(i,1);
  }

  removeItem(Miarray, MyText);

  console.log(Miarray);