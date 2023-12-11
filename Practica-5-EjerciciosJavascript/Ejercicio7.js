// Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne , numberTwo) {
    if(numberOne > numberTwo ){
        console.log('numberOne es mayor que numberTwo');
    } else if (numberTwo > numberOne ){
        console.log('numberTwo es mayor que numberOne');
    } else{
        console.log(`El número ${numberOne} y el número ${numberTwo} son iguales`);
    }
}

sum(27, 36);