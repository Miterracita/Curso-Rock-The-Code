import { myHeader } from './src/components/myHeader/myHeader';
import { galery } from './src/components/galery/galery';
import { myFooter } from './src/components/myFooter/myFooter';
import './style.css';

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

//API
const accesKey = '1dOFFfJI0z9kZ6TbdKydN3WjjpkK5-RcpJuW9gA8Qho';
const endPoint = 'https://api.unsplash.com/search/photos';

//hace la llamada al api para recuperar las imagenes según el input
async function getImages(query) {
  const response = await fetch(`${endPoint}?query=${query}&client_id=${accesKey}`);
  const jsonResponse = await response.json();
  const imagesList = jsonResponse.results;
  createImages(imagesList);
}

//pintar las imagenes
function createImages(imagesList) {
  
  for (let i = 0; i < imagesList.length; i++) {
    //aquí tengo que pintar las imagenes según me interese, diseño "tarjeta imagen"
    const imageLi = document.createElement('li');
    const image = document.createElement('img');
    image.src = imagesList[i].urls.small;
    image.alt = imagesList[i].description;
    imageLi.appendChild(image);

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
    mainHtml.appendChild(ulHtml);
  }
}

//pintar imagenes según la busqueda del input
const inputBuscador = document.querySelector('#buscador');
const btnBuscador = document.querySelector('#btn-buscar');

btnBuscador.addEventListener('click', function () {
  const query = inputBuscador.value; 
  //limpiar el contenido anterior
  ulHtml.innerHTML = ' ';
  // Llamar a la función getImages cada vez que el usuario escriba en el campo de búsqueda
  getImages(query);
});


//realizar búsqueda al pulsar sobre el botón buscar
const buttonSearch = document.querySelector('#btn-buscar');
  buttonSearch.addEventListener('onClick', function (query) {
    //limpiar el contenido anterior
    mainHtml.innerHTML = ' ';
    getImages(query);
});


//cargar por defecto imagenes aleatorias

