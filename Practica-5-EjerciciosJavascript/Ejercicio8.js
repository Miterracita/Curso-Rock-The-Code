/*
Buscar la palabra más larga.
Completa la función que tomando un array de strings como argumento devuelva el más largo,
en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función:
*/

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(avengers) {

    let longWord = '';

    for (let i =0; i < avengers.length; i++) {

        if(avengers[i].length > longWord.length) {
            longWord = avengers[i];
        }
    
    }
    
    return longWord;
}
    
console.log(findLongestWord(avengers));