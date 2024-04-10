let puntosPlayer = 0;
let puntosMachine = 0;

// Recuperar puntos localStorage
puntosPlayer = localStorage.getItem('puntosPlayer') ? parseInt(localStorage.getItem('puntosPlayer')) : 0;
puntosMachine = localStorage.getItem('puntosMachine') ? parseInt(localStorage.getItem('puntosMachine')) : 0;


// Actualizar la interfaz con los puntos recuperados
let puntosPlayerBox = document.getElementById('puntos-player-box');
let puntosMachineBox = document.getElementById('puntos-machine-box');
puntosPlayerBox.innerText = puntosPlayer;
puntosMachineBox.innerText = puntosMachine;

//
const actualizarPuntos = () => {
    localStorage.setItem('puntosPlayer', puntosPlayer);
    localStorage.setItem('puntosMachine', puntosMachine);
};


let iniciarPartida = document.getElementById('empezar-partida');
let boxInicio = document.querySelector('.box-inicio');
let boxPartida = document.querySelector('.box-partida');

let piedra = document.querySelector('.piedra');
let papel = document.querySelector('.papel');
let tijera = document.querySelector('.tijera');

let player = document.querySelector('.player');
let machine = document.querySelector('.machine');

let jugadaPlayer = "";
let jugadaMachine = "";

let boxMensajeGanador = document.querySelector('#mensaje-ganador');

let boxSeleccionJuego = document.querySelector('#seleccion-juego');
let boxResutadoJuego = document.querySelector('#resultado-juego');

//botones
let btnSeguirJugando = document.querySelector('#seguir');
let btnResetearPartida = document.querySelector('#reset');

//al pulsar sobre el botón iniciar partida de la pantalla inicial
iniciarPartida.addEventListener('click', function(event) {
    //esta línea evita que se recargue la página 
    event.preventDefault();
    const playerName = document.getElementById('player-name').value;
    let playerNameBox = document.getElementById('player-name-box');

    if(playerName===""){
        alert("Para poder continuar, debes indicar tu nombre");
    } else {     
        boxInicio.classList.add("oculto");
        boxPartida.classList.remove("oculto");
        playerNameBox.textContent= playerName;
    }
});


// Seleccionar juego player

piedra.addEventListener('click', function() {
    jugadaPlayer = "piedra";
    juegoAleatorio();
    jugadaMachine = juegoAleatorio();
    lanzarJuego();
});
papel.addEventListener('click', function() {
    jugadaPlayer = "papel";
    juegoAleatorio();
    jugadaMachine = juegoAleatorio();
    lanzarJuego();
});
tijera.addEventListener('click', function() {
    jugadaPlayer = "tijera";
    juegoAleatorio();
    jugadaMachine = juegoAleatorio();
    lanzarJuego();
});

// juego aleatorio para jugada maquina
const juegoAleatorio = () => {
    const cartas = ['piedra', 'papel', 'tijera'];
    const valorAleatorio  = cartas[Math.floor(Math.random() * cartas.length)];
    return valorAleatorio;
}

//lanzar juego para comparar carta jugador y máquina y obtener ganador

const lanzarJuego = () => {

    if(
        (jugadaPlayer === "piedra" && jugadaMachine === 'tijera') ||
        (jugadaPlayer === "papel" && jugadaMachine === 'piedra') ||
        (jugadaPlayer === "tijera" && jugadaMachine === 'papel') 
    ){
        boxMensajeGanador.innerHTML = `
            <p>${jugadaMachine} y ${jugadaPlayer}</p>
            <h5>Enhorabuena has ganado este juego</h5>
        `;
        puntosPlayer++
        puntosPlayerBox.innerText = puntosPlayer;
        actualizarPuntos();
    }
    if(
        (jugadaPlayer === "piedra" && jugadaMachine === 'papel') ||
        (jugadaPlayer === "papel" && jugadaMachine === 'tijera') ||
        (jugadaPlayer === "tijera" && jugadaMachine === 'piedra') 
    ){
        boxMensajeGanador.innerHTML = `
            <p>${jugadaMachine} y ${jugadaPlayer}</p>
            <h5>Este juego lo ha ganado Pepita</h5>
        `;
        puntosMachine++
        puntosMachineBox.innerHTML = puntosMachine;
        actualizarPuntos();
    } if(
        (jugadaPlayer === "piedra" && jugadaMachine === 'piedra') ||
        (jugadaPlayer === "papel" && jugadaMachine === 'papel') ||
        (jugadaPlayer === "tijera" && jugadaMachine === 'tijera') 
    ) {
        boxMensajeGanador.innerHTML = `
            <p>${jugadaMachine} y ${jugadaPlayer}</p>
            <h5>Vaya, en este juego habeis quedado en empate, esta vez nadie suma puntos</h5>
        `;
    }

    pintarJuego();
    jugadaMachine="";
    jugadaPlayer="";
}

const pintarJuego = () => {

    const boxPlayer = document.querySelector('.player');
    const boxMachine = document.querySelector('.machine');

    //ocultar contenedor elección jugada, pintar contenedor resultado juego
    boxResutadoJuego.classList.remove("oculto");
    boxSeleccionJuego.classList.add("oculto");

    //pintar juego player

    if (jugadaPlayer === "piedra") {
        boxPlayer.innerHTML = `<div class="box-piedra"><img src="img/piedra.jpg" alt="imagen-piedra"/></div>`;
    } else if (jugadaPlayer === "papel"){
        boxPlayer.innerHTML = `<div class="box-papel"><img src="img/papel.jpg" alt="imagen-papel"/></div>`;
    } else if (jugadaPlayer === "tijera"){
        boxPlayer.innerHTML = `<div class="box-tijera"><img src="img/tijera.jpg" alt="imagen-tijera"/></div>`;
    } 

    //pintar juego machine
    
    if (jugadaMachine === "piedra") {
        boxMachine.innerHTML = `<div class="box-piedra"><img src="img/piedra.jpg" alt="imagen-piedra"/></div>`;
    } else if (jugadaMachine === "papel"){
        boxMachine.innerHTML = `<div class="box-papel"><img src="img/papel.jpg" alt="imagen-papel"/></div>`;
    } else if (jugadaMachine === "tijera"){
        boxMachine.innerHTML = `<div class="box-tijera"><img src="img/tijera.jpg" alt="imagen-tijera"/></div>`;
    }
}

// seguir jugando
btnSeguirJugando.addEventListener('click', function(event) {
    //esta línea evita que se recargue la página 
    event.preventDefault();
    boxResutadoJuego.classList.add("oculto");
    boxSeleccionJuego.classList.remove("oculto");
});

//reiniciar partida
btnResetearPartida.addEventListener('click', function(event) {
    //esta línea evita que se recargue la página 
    event.preventDefault();

    boxInicio.classList.remove("oculto");
    boxPartida.classList.add("oculto");

    boxResutadoJuego.classList.add("oculto");
    boxSeleccionJuego.classList.remove("oculto");

    // Restablecer los puntos
    puntosPlayer = 0;
    puntosMachine = 0;

    // Actualizar localStorage
    localStorage.setItem('puntosPlayer', puntosPlayer);
    localStorage.setItem('puntosMachine', puntosMachine);

    // Actualizar la interfaz de usuario
    puntosPlayerBox.innerText = puntosPlayer;
    puntosMachineBox.innerText = puntosMachine;

    document.getElementById('player-name').value = '';
});