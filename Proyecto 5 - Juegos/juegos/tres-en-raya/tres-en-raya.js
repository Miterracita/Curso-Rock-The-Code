let turno = "";
let juegoTerminado = false;
let tNaranja = document.querySelector('.jugador-naranja');
let tVerde = document.querySelector('.jugador-verde');

let partidaTitle = document.querySelector('#partida');
let turnoTitle = document.querySelector('#turno');
let tresEnRaya = document.querySelector('.tres-en-raya');

let btnReiniciar = document.querySelector('#btn-reiniciar');
let btnVolver = document.querySelector('#btn-inicio');
let boxBotones = document.querySelector('.botones');

//casillas tablero
let item1 = document.querySelector('.item-1');
let item2 = document.querySelector('.item-2');
let item3 = document.querySelector('.item-3');
let item4 = document.querySelector('.item-4');
let item5 = document.querySelector('.item-5');
let item6 = document.querySelector('.item-6');
let item7 = document.querySelector('.item-7');
let item8 = document.querySelector('.item-8');
let item9 = document.querySelector('.item-9');

//fichas
let fichaNaranja = document.createElement('div');
let fichaVerde = document.createElement('div');
fichaNaranja.classList.add("circulo");
fichaVerde.classList.add("cruz");

//contador para las tiradas
let tirada = 0;

//Seleccionar el turno del jugador al INICIO DE LA PARTIDA

tNaranja.addEventListener('click', function() {
    turno = "naranja";
    seleccionTurno();
});

tVerde.addEventListener('click', function() {
    turno = "verde";
    seleccionTurno();
});

const seleccionTurno = () => {

    partidaTitle.classList.add('invisible');
    turnoTitle.classList.remove('invisible');
    tresEnRaya.classList.remove('invisible');
    boxBotones.classList.remove('invisible');

    if (turno === "naranja"){
        tNaranja.classList.add('turno');
        tVerde.classList.remove('turno');
    } else {
        tVerde.classList.add('turno');
        tNaranja.classList.remove('turno');
    }
}

//ACTUALIZAR TURNO

const cambiarTurno = () => {
    turno = (turno === "naranja") ? "verde" : "naranja";
}

// Al pulsar sobre las casillas del tablero

item1.addEventListener('click', function() {
    if(juegoTerminado){
        alert ('La partida ha terminado. Por favor, reinicia el juego.');
        return;
    }
    if(item1.children.length > 0){
        alert('Esta casilla ya está ocupada');
    } else if (tirada < 9){
        pintarFicha(item1);
        tirada++;
        comprobarJuego(item1);
    } else {
        alert('Vaya!!! esta partida ya ha terminado. Habéis quedado en tablas.');
    }
});
item2.addEventListener('click', function() {
    if(juegoTerminado){
        alert ('La partida ha terminado. Por favor, reinicia el juego.');
        return;
    }
    if(item2.children.length > 0){
        alert('Esta casilla ya está ocupada');
    } else if (tirada < 9){
        pintarFicha(item2);
        tirada++;
        comprobarJuego(item2);
    } else {
        alert('Vaya!!! esta partida ya ha terminado. Habéis quedado en tablas.');
    }
});
item3.addEventListener('click', function() {
    if(juegoTerminado){
        alert ('La partida ha terminado. Por favor, reinicia el juego.');
        return;
    }
    if(item3.children.length > 0){
        alert('Esta casilla ya está ocupada');
    } else if (tirada < 9){
        pintarFicha(item3);
        tirada++;
        comprobarJuego(item3);
    } else {
        alert('Vaya!!! esta partida ya ha terminado. Habéis quedado en tablas.');
    }
});
item4.addEventListener('click', function() {
    if(juegoTerminado){
        alert ('La partida ha terminado. Por favor, reinicia el juego.');
        return;
    }
    if(item4.children.length > 0){
        alert('Esta casilla ya está ocupada');
    } else if (tirada < 9){
        pintarFicha(item4);
        tirada++;
        comprobarJuego(item4);
    } else {
        alert('Vaya!!! esta partida ya ha terminado. Habéis quedado en tablas.');
    }
});
item5.addEventListener('click', function() {
    if(juegoTerminado){
        alert ('La partida ha terminado. Por favor, reinicia el juego.');
        return;
    }
    if(item5.children.length > 0){
        alert('Esta casilla ya está ocupada');
    } else if (tirada < 9){
        pintarFicha(item5);
        tirada++;
        comprobarJuego(item5);
    } else {
        alert('Vaya!!! esta partida ya ha terminado. Habéis quedado en tablas.');
    }
});
item6.addEventListener('click', function() {
    if(juegoTerminado){
        alert ('La partida ha terminado. Por favor, reinicia el juego.');
        return;
    }
    if(item6.children.length > 0){
        alert('Esta casilla ya está ocupada');
    } else if (tirada < 9){
        pintarFicha(item6);
        tirada++;
        comprobarJuego(item6);
    } else {
        alert('Vaya!!! esta partida ya ha terminado. Habéis quedado en tablas.');
    }
});
item7.addEventListener('click', function() {
    if(juegoTerminado){
        alert ('La partida ha terminado. Por favor, reinicia el juego.');
        return;
    }
    if(item7.children.length > 0){
        alert('Esta casilla ya está ocupada');
    } else if (tirada < 9){
        pintarFicha(item7);
        tirada++;
        comprobarJuego(item7);
    } else {
        alert('Vaya!!! esta partida ya ha terminado. Habéis quedado en tablas.');
    }
});
item8.addEventListener('click', function() {
    if(juegoTerminado){
        alert ('La partida ha terminado. Por favor, reinicia el juego.');
        return;
    }
    if(item8.children.length > 0){
        alert('Esta casilla ya está ocupada');
    } else if (tirada < 9) {
        pintarFicha(item8);
        tirada++;
        comprobarJuego(item8);
    } else {
        alert('Vaya!!! esta partida ya ha terminado. Habéis quedado en tablas.');
    }
});
item9.addEventListener('click', function() {
    if(juegoTerminado){
        alert ('La partida ha terminado. Por favor, reinicia el juego.');
        return;
    }
    if(item9.children.length > 0){
        alert('Esta casilla ya está ocupada');
    } else if (tirada < 9){
        pintarFicha(item9);
        tirada++;
        comprobarJuego(item9);
    } else {
        alert('Vaya!!! esta partida ya ha terminado. Habéis quedado en tablas.');
    }
});

//COMPROBAR JUEGO
const comprobarJuego = () => {
    const fila1 = [item1, item2, item3];
    const fila2 = [item4, item5, item6];
    const fila3 = [item7, item8, item9];
    const columnas = [[item1, item4, item7], [item2, item5, item8], [item3, item6, item9]];
    const diagonales = [[item1, item5, item9], [item3, item5, item7]];
    
    const lineasGanadoras = [fila1, fila2, fila3, ...columnas, ...diagonales];
    
    for (const linea of lineasGanadoras) {
        const ficha1 = linea[0].querySelector('.circulo') || linea[0].querySelector('.cruz');
        const ficha2 = linea[1].querySelector('.circulo') || linea[1].querySelector('.cruz');
        const ficha3 = linea[2].querySelector('.circulo') || linea[2].querySelector('.cruz');
        
        if (ficha1 && ficha2 && ficha3 && ficha1.classList.contains(ficha2.classList[0]) && ficha1.classList.contains(ficha3.classList[0])) {
            const ganador = ficha1.classList.contains('circulo') ? 'Naranja' : 'Verde';
            alert(`¡Enhorabuena jugador ${ganador}! Has ganado la partida.`);
            juegoTerminado = true;
            return ganador;
        }
    }
    
    if (tirada === 9) {
        alert('Vaya!!! esta partida ya ha terminado. Habéis quedado en tablas.');
    }
};

const pintarFicha = (item) => {

    //si el div está vacío
    if(item.children.length === 0){
    
        //si está vacío pintará ficha del jugador que tiene el turno

        if (turno === "naranja"){      
            item.append(fichaNaranja.cloneNode(true));
            tVerde.classList.add('turno');
            tNaranja.classList.remove('turno');

        } else {      
            item.append(fichaVerde.cloneNode(true));
            tNaranja.classList.add('turno');
            tVerde.classList.remove('turno');

        }
        //actualizará el turno, cambiará al siguiente jugador
        cambiarTurno();
    }
}

//Reiniciar partida

btnReiniciar.addEventListener('click', function() {
    juegoTerminado = false;
    tirada = 0;
    item1.innerHTML = "";
    item2.innerHTML = "";
    item3.innerHTML = "";
    item4.innerHTML = "";
    item5.innerHTML = "";
    item6.innerHTML = "";
    item7.innerHTML = "";
    item8.innerHTML = "";
    item9.innerHTML = "";
});

btnVolver.addEventListener('click', function() {
    window.location.href = '../../index.html';
});