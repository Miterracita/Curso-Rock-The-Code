/*
Calcular un promedio (media) es una tarea extremadamente común. 
Puedes usar este array para probar tu función:
*/

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numbers) {
    let suma = 0;
    for(let i = 0; i < numbers.length; i++) {
    suma += numbers[i];
    }
    let average = suma / numbers.length;
    return average;
}

console.log(average(numbers));