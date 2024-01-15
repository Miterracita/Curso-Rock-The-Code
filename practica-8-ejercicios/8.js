// 8.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando .filter() y usa .reduce() para conseguir la media de sus .score. 
// La función .find() también podría ayudarte para el contrar el genero 'RPG' en el 
// array .gender.

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10},
]

const gendersRPG = videogames.filter (videogame => videogame.genders.includes('RPG'));
const sumaScore = gendersRPG.reduce((acumulador, juego) => acumulador + juego.score, 0);
const mediaScore = sumaScore / gendersRPG.length;

console.log(`Estos son los juegos que contienen el genders RPG ${gendersRPG}`);
console.log(`Esta es la suma de todos los score de los juegos que contienen RPG ${sumaScore}`);
console.log(`Esta es la media de los score de los juegos que contienen RPG ${mediaScore}`);