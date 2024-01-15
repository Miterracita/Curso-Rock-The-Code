// Dado el siguiente javascript usa forof y forin para hacer la media del 
// volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { 
        format: "mp3", 
        volume: 50 
      },
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

//para guardar los volumenes sin duplicados
const volumenesFavoritesSounds = new Set();

//bucle para recorrer cada usuario
for (const user of users) {

  console.log(`Este es el nombre del usuario: ${user.name}`);

  //bucle para recorrer cada uno de los las canciones favoritas de los usuarios
    for(const cancion in user.favoritesSounds){
      console.log(`Este es el nombre de la canción favorita: ${cancion}`);
      
      // Obtener el volumen de cada una de las canciones favoritas
      const volumen = user.favoritesSounds[cancion].volume;
      console.log(`Este es el volumen: ${volumen}`);

      //guardar volumen
      volumenesFavoritesSounds.add(volumen);

    }
}

// Calcular la media de los volúmenes
const totalVolumenes = [...volumenesFavoritesSounds].reduce((total, volumen) => total + volumen, 0);
const mediaVolumenes = totalVolumenes / volumenesFavoritesSounds.size;
console.log(`La media de los volúmenes es: ${mediaVolumenes}`);