import "./styles.css";

export const galery = () => {
    return `<ul class="cont-galery" id="cont-galery"></ul>`
};

//Creamos el listado con el contenido de cada una de las imagenes de la galería

  export const createImages = (imagesList) => {

    const ulHtml = document.querySelector('#cont-galery');
  
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
  }