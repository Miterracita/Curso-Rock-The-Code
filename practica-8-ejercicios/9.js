// Dado el siguiente javascript:
// - Usa for of para recorrer el array de películas, 
// - genera un nuevo array con las categorías de las películas (Para filtrar las categorías puedes ayudarte de la función .includes().)
// - imprime por consola el array de categorías.
// Ten en cuenta que las categorías no deberían repetirse.


const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const newCategories = new Set();

for (const movie of movies) {

  movie.categories.forEach(category => {
    newCategories.add(category);
  });

}

console.log(newCategories);