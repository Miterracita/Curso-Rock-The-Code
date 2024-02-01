import { createApi } from "unsplash-js";
import { myHeader } from './src/components/myHeader/myHeader';
import { galery, createImages } from './src/components/galery/galery';
import { myFooter } from './src/components/myFooter/myFooter';

import './style.css';

//aquí pintamos el contenido de header, footer y main

//HEADER
const headerHtml = document.querySelector('header');
headerHtml.innerHTML = myHeader();

//FOOTER
const footerHtml = document.querySelector('footer');
footerHtml.innerHTML = myFooter();

//MAIN
const mainHtml = document.querySelector('main');
mainHtml.innerHTML = galery();
const ulHtml = document.querySelector('#cont-galery');

// API
const unsplash = createApi({
  accessKey: import.meta.env.VITE_ACCESS_KEY,
})
const endPoint = 'https://api.unsplash.com/search/photos';


// Obtener imágenes de Unsplash según una consulta
async function getImages(inputTxt) {
  try {
    // const response = await unsplash.search.getPhotos({
    //   query: inputTxt,
    //   page: 1,
    //   perPage: 20,

    // });
    const query = inputTxt;
    const response = await fetch(`${endPoint}?query=${query}&client_id=${import.meta.env.VITE_ACCESS_KEY}`);

    if (!response.ok) {
      throw new Error(`Error en la respuesta de la API: ${response.statusText}`);
    }

    const data = await response.json();
    const imagesList = data.results;
    
    if (!imagesList || imagesList.length === 0) {
      throw new Error('No se encontraron resultados de imágenes.');
    }

    createImages(imagesList);
  } catch (error) {
    console.error('Error al obtener imágenes:', error);
  }
}



// const searchPhotos = async (keyword) => {
//   try {
//     const images = await unsplash.search.getPhotos({
//       query: keyword,
//       page: 1,
//       perPage: 30,
//     });
//     return images;
//   } catch (error) {
//     console.error('No se han encontrado resultados o encontramos el siguiente error: ', error);
//     return [];
//   }
// };

// Realizar búsqueda y llamar a la función de pintado de imagenes
const inputBuscador = document.querySelector('#buscador');
const btnBuscador = document.querySelector('#btn-buscar');

btnBuscador.addEventListener('click', function () {
  // recogemos los datos del input
  const inputTxt = inputBuscador.value; 
  // limpiar el contenido anterior
  ulHtml.innerHTML = ' ';
  
  // Llamar a la función que conecta con la api y nos devuelve los resultados enviandole la busqueda del input
  getImages(inputTxt);
});


//cargar por defecto imagenes aleatorias
window.addEventListener('load', function () {
  getImages('random'); // 'random' es una consulta para obtener imágenes aleatorias
});