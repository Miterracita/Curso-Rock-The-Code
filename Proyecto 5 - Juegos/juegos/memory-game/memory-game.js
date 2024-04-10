let puntos = 0;
let tarjetasVisibles = 0;
let parejas = false;

let btnPlay = document.querySelector('.btn-play');
let btnRestart = document.querySelector('.btn-restart');
let boxPlay = document.querySelector('.box-play');
let boxPuntos = document.querySelector('.box-puntos');
let tablero = document.querySelector('.tablero-memory-game');

let btnVolver = document.querySelector('.btn-inicio');

btnVolver.addEventListener('click', function() {
    window.location.href = '../../index.html';
});

//tarjetas juego
let tarjeta1 = document.querySelector('.card-1');
let tarjeta2 = document.querySelector('.card-2');
let tarjeta3 = document.querySelector('.card-3');
let tarjeta4 = document.querySelector('.card-4');
let tarjeta5 = document.querySelector('.card-5');
let tarjeta6 = document.querySelector('.card-6');
let tarjeta7 = document.querySelector('.card-7');
let tarjeta8 = document.querySelector('.card-8');
let tarjeta9 = document.querySelector('.card-9');
let tarjeta10 = document.querySelector('.card-10');
let tarjeta11 = document.querySelector('.card-11');
let tarjeta12 = document.querySelector('.card-12');
let tarjeta13 = document.querySelector('.card-13');
let tarjeta14 = document.querySelector('.card-14');
let tarjeta15 = document.querySelector('.card-15');
let tarjeta16 = document.querySelector('.card-16');
let tarjeta17 = document.querySelector('.card-17');
let tarjeta18 = document.querySelector('.card-18');

const tarjetas = [
    tarjeta1, tarjeta2, tarjeta3, tarjeta4,
    tarjeta5, tarjeta6, tarjeta7, tarjeta8,
    tarjeta9, tarjeta10, tarjeta11, tarjeta12,
    tarjeta13, tarjeta14, tarjeta15, tarjeta16,
    tarjeta17, tarjeta18
];

const iconos = [
    'fi-ss-crab', 'fi-ss-crab',
    'fi-sr-elephant', 'fi-sr-elephant',
    // 'fi-sr-dolphin', 'fi-sr-dolphin',
    'fi-ss-bird', 'fi-ss-bird',
    'fi-sr-lobster', 'fi-sr-lobster',
    'fi-sr-kiwi-bird', 'fi-sr-kiwi-bird',
    'fi-sr-sheep', 'fi-sr-sheep',
    'fi-ss-cat', 'fi-ss-cat',
    'fi-ss-whale','fi-ss-whale',
    'fi-ss-hippo','fi-ss-hippo',
];

//Botón arrancar juego
btnPlay.addEventListener('click', function() {
    boxPlay.classList.add("oculto");
    boxPuntos.classList.remove("oculto");
    tablero.classList.remove("oculto");
    pintarTarjetas(iconos, tarjetas);
});

//Botón reiniciar juego
btnRestart.addEventListener('click', function() {

    reiniciarPartida();
    //iniciar nueva partida
    pintarTarjetas(iconos, tarjetas);
});

const reiniciarPartida = () => {
    // Eliminar todos los elementos hijos de las tarjetas
    tarjetas.forEach(tarjeta => {
        tarjeta.innerHTML = ''; // Eliminar el contenido de la tarjeta
    });

    // Remover la clase 'activo' de todas las tarjetas
    tarjetas.forEach(tarjeta => {
        tarjeta.classList.remove('activo');
        tarjeta.classList.remove('inactivo');
    });

    // Restablecer las variables puntos y tarjetasVisibles
    puntos = 0;
    tarjetasVisibles = 0;
}

// Función para mezclar aleatoriamente un arreglo (algoritmo de Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// funcion  pintar la cartas de forma aleatoria
const pintarTarjetas = (iconos, tarjetas) => {

    //tengo 9 elementos diferentes, tengo que crear dos elementos de cada uno de ellos y repartirlos en el tablero de forma aleatoria.

     // Mezclar aleatoriamente el arreglo de iconos
     shuffleArray(iconos);

     //pintar los iconos en las tarjetas
     tarjetas.forEach((tarjeta, index) => {
        const icono = document.createElement('i');
        icono.classList.add('ico', 'fi', iconos[index]);
        tarjeta.appendChild(icono);
    });
}

const mostrarTarjeta = (tarjeta)=> {
    //aplicar clase visible al div que contiene el contenido de la tarjeta
    tarjeta.classList.add('activo');
};

const ocultarTarjetas = (tarjeta)=> {
    //aplicar clase ocultar al div que contiene el contenido de la tarjeta
    tarjeta.classList.remove('activo');
};

const sumarPuntos = (puntos) => {
    puntos++;
};

// Agregamos el evento de clic a cada tarjeta
for (let i = 0; i < tarjetas.length; i++) {
    tarjetas[i].addEventListener('click', function() {
        tarjeta = tarjetas[i];
        juegoTarjetas(tarjeta);
    });
}

const comprobarParejas = () => {
    //primero tengo que recorrer el array de tarjetas y comprobar cual de ellas tiene la clase activa asignada
    let tarjetasActivas = [];
        
    // Iterar sobre las tarjetas y buscar las activas
    tarjetas.forEach(tarjeta => {
        if (tarjeta.classList.contains('activo')) {
            tarjetasActivas.push(tarjeta);
        }
    });

    // Si hay dos tarjetas activas
    if (tarjetasActivas.length === 2) {
        const icono1 = tarjetasActivas[0].querySelector('i').classList;
        const icono2 = tarjetasActivas[1].querySelector('i').classList;

        // Comprobar si los iconos son iguales
        const icono1Nombre = Array.from(icono1).find(className => className.startsWith('fi-'));
        const icono2Nombre = Array.from(icono2).find(className => className.startsWith('fi-'));

        if (icono1Nombre === icono2Nombre) {
            // Los iconos son iguales, se ha encontrado una pareja
            sumarPuntos();
            tarjetasActivas.forEach(tarjeta => {
                tarjeta.classList.remove('activo');
                tarjeta.classList.add('inactivo');
            });
            tarjetasVisibles = 0;
            return true;

        } else {
            // Los iconos no son iguales, desactivar las tarjetas
            tarjetasActivas.forEach(tarjeta => {
                tarjeta.classList.remove('activo');
            });
            tarjetasVisibles = 0;
            return false;
        }
    }
    tarjetasVisibles = 0;

    return false; // No se encontraron suficientes tarjetas activas
};

// cada vez que hacemos click sobre una tarjeta lanzamos la funcion juegoTarjetas
const juegoTarjetas = (tarjeta) => {

    if (tarjetasVisibles < 2){ 
        //cuando el número de tarjetas visibles sea inferior a 2 lanzamos mostrarTarjeta().
        mostrarTarjeta(tarjeta);
        tarjetasVisibles++;

    } else { //cuando el número de tarjetas visibles es dos   
        comprobarParejas();
    }

};