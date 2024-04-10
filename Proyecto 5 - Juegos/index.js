let tresEnRaya = document.querySelector('.tres-en-raya');
let memory = document.querySelector('.memory');
let ppt = document.querySelector('.ppt');

//abrir juego tres en raya
tresEnRaya.addEventListener('click', function(event) {
    //esta línea evita que se recargue la página 
    event.preventDefault();
    window.location.href = 'juegos/tres-en-raya/tres-en-raya.html';

});

//abrir juego memory
memory.addEventListener('click', function(event) {
    //esta línea evita que se recargue la página 
    event.preventDefault();
    window.location.href = 'juegos/memory-game/memory-game.html';
});

//abrir juego piedra, papel, tijera
ppt.addEventListener('click', function(event) {
    //esta línea evita que se recargue la página 
    event.preventDefault();
    window.location.href = 'juegos/piedra-papel-tijera/piedra-papel-tijera.html';

});
