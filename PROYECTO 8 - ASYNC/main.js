// import { createApi } from "unsplash-js";
import { myHeader } from './src/components/myHeader/myHeader';
import { galery } from './src/components/galery/galery';
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

//Creamos el contenido de cada una de las imagenes de la galería

function createImages(imagesList) {
  
  for (let i = 0; i < imagesList.length; i++) {

    //Creamos un li img y sus atributos para cada una de las imagenes
    const imageLi = document.createElement('li');
    const image = document.createElement('img');
    image.src = imagesList[i].urls.small;
    image.alt = imagesList[i].description;
    imageLi.appendChild(image);

    //Creamos un div con el botón de descarga e info del perfil 
    const infoDiv = document.createElement('div');
    infoDiv.className = 'cont-info';
    imageLi.appendChild(infoDiv);
  
    infoDiv.innerHTML=`
      <div class="cont-user">
        <p class="btn-user"><a href="${imagesList[i].user.links.html}" target="_blank">${imagesList[i].user.name}</a></p>
        <p class="user-name">@${imagesList[i].user.username}</p>
        </div>
      </div>
      <div class="cont-buttons">
        <p class="btn-download">
          <a href="${imagesList[i].urls.full}" target="_blank">
            <svg class="m9vYO" width="15" height="15" viewBox="0 0 24 24" version="1.1" aria-hidden="false"><desc lang="en-US">Arrow pointing down</desc><path fill="#ffffff" d="m19.35 11.625-5.85 5.4V1.5h-3v15.525l-5.85-5.4-2.025 2.25L12 22.425l9.375-8.55-2.025-2.25Z"></path></svg>
          </a>
        </p>
      </div>
    `;
    ulHtml.appendChild(imageLi);
  }
      
  mainHtml.appendChild(ulHtml);
}


// API
const accesKey = '1dOFFfJI0z9kZ6TbdKydN3WjjpkK5-RcpJuW9gA8Qho';
const endPoint = 'https://api.unsplash.com/search/photos';

//hace la llamada al api para recuperar las imagenes según el input
async function getImages(query) {
  const response = await fetch(`${endPoint}?query=${query}&client_id=${accesKey}`);
  const jsonResponse = await response.json();
  const imagesList = jsonResponse.results;
  createImages(imagesList);
}

//API
// const unsplash = createApi({
//   accessKey: import.meta.env.VITE_ACCESS_KEY,
// })

// console.log(VITE_ACCESS_KEY);

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
  // searchPhotos(inputTxt);
  getImages(inputTxt);
});


  // btnBuscador.addEventListener("click", async () => {   
  //   const inputTxt = inputBuscador.value;
  //   console.log(inputTxt);
  //   const images = await searchPhotos(inputTxt);
  //   ulHtml.innerHTML = ' ';
  //   createImages(images.response);
  // })

//cargar por defecto imagenes aleatorias