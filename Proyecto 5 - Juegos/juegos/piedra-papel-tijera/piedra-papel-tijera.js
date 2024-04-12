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

let btnVolver = document.querySelector('.btn-inicio');

btnVolver.addEventListener('click', function() {
    window.location.href = '../../index.html';
});

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
    jugadaPlayer = "Piedra";
    juegoAleatorio();
    jugadaMachine = juegoAleatorio();
    lanzarJuego();
});
papel.addEventListener('click', function() {
    jugadaPlayer = "Papel";
    juegoAleatorio();
    jugadaMachine = juegoAleatorio();
    lanzarJuego();
});
tijera.addEventListener('click', function() {
    jugadaPlayer = "Tijera";
    juegoAleatorio();
    jugadaMachine = juegoAleatorio();
    lanzarJuego();
});

// juego aleatorio para jugada maquina
const juegoAleatorio = () => {
    const cartas = ['Piedra', 'Papel', 'Tijera'];
    const valorAleatorio  = cartas[Math.floor(Math.random() * cartas.length)];
    return valorAleatorio;
}

//lanzar juego para comparar carta jugador y máquina y obtener ganador

const lanzarJuego = () => {

    if(
        (jugadaPlayer === "Piedra" && jugadaMachine === 'Tijera') ||
        (jugadaPlayer === "Papel" && jugadaMachine === 'Piedra') ||
        (jugadaPlayer === "Tijera" && jugadaMachine === 'Papel') 
    ){
        boxMensajeGanador.innerHTML = `
            <p>${jugadaPlayer} y ${jugadaMachine}</p>
            <h5>¡¡¡ Enhorabuena has ganado este juego !!!</h5>
        `;
        puntosPlayer++
        puntosPlayerBox.innerText = puntosPlayer;
        actualizarPuntos();
    }
    if(
        (jugadaPlayer === "Piedra" && jugadaMachine === 'Papel') ||
        (jugadaPlayer === "Papel" && jugadaMachine === 'Tijera') ||
        (jugadaPlayer === "Tijera" && jugadaMachine === 'Piedra') 
    ){
        boxMensajeGanador.innerHTML = `
            <p>${jugadaPlayer} y ${jugadaMachine}</p>
            <h5><< Este juego lo ha ganado Pepita >></h5>
        `;
        puntosMachine++
        puntosMachineBox.innerHTML = puntosMachine;
        actualizarPuntos();
    } if(
        (jugadaPlayer === "Piedra" && jugadaMachine === 'Piedra') ||
        (jugadaPlayer === "Papel" && jugadaMachine === 'Papel') ||
        (jugadaPlayer === "Tijera" && jugadaMachine === 'Tijera') 
    ) {
        boxMensajeGanador.innerHTML = `
            <p>${jugadaPlayer} y ${jugadaMachine}</p>
            <h5>Vaya, en este juego habéis quedado en empate.</h5>
            <h5>-- En este juego nadie suma puntos --</h5>
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

    if (jugadaPlayer === "Piedra") {
        boxPlayer.innerHTML = `<div class="box-piedra"><img src="img/piedra.jpg" alt="imagen-piedra"/></div>`;
    } else if (jugadaPlayer === "Papel"){
        boxPlayer.innerHTML = `<div class="box-papel"><img src="img/papel.jpg" alt="imagen-papel"/></div>`;
    } else if (jugadaPlayer === "Tijera"){
        boxPlayer.innerHTML = `<div class="box-tijera"><img src="img/tijera.jpg" alt="imagen-tijera"/></div>`;
    } 

    //pintar juego machine
    
    if (jugadaMachine === "Piedra") {
        boxMachine.innerHTML = `<div class="box-piedra"><img src="img/piedra.jpg" alt="imagen-piedra"/></div>`;
    } else if (jugadaMachine === "Papel"){
        boxMachine.innerHTML = `<div class="box-papel"><img src="img/papel.jpg" alt="imagen-papel"/></div>`;
    } else if (jugadaMachine === "Tijera"){
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