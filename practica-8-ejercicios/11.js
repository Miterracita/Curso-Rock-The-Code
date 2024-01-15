// Dado el siguiente javascript usa forof y forin para saber cuantas veces ha 
// sido cada sonido agregado por los usuarios a favorito.

// Para ello recorre la lista de usuarios y usa forin para recoger el nombre 
// de los sonidos que el usuario tenga como favoritos.

// Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada 
// vez que ese sonido se repita como favorito en cada usuario.

const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Pedro",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Cristina",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

//contador canciones
const cancionesRepetidas = {};

//bucle para recorrer cada usuario
for (const user of users) {

  //bucle para recorrer cada uno de los las canciones favoritas de los usuarios
  for(const cancion in user.favoritesSounds){

    //si la canción está repetido aumentamos en contador
    cancionesRepetidas[cancion] = (cancionesRepetidas[cancion] || 0) + 1; 
  }
}

// Mostrar el contador de cada canción favorita
for (const cancion in cancionesRepetidas) {
  console.log(`El sonido ${cancion} se repite ${cancionesRepetidas[cancion]} veces.`);
}