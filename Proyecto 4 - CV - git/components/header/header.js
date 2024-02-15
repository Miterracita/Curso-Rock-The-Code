import { datos } from '../../datos.js';
import "./header.css";

export const cvHeader = () => {

  return `
    <header>
      <div class="flex" >
        <div id="saludo" class="f-left">
            <h5>${datos.iam}</h5>
            <h1>${datos.saludo}</h1>
            <p>${datos.txt}</p>
            <button>LinkedIn</button>
        </div>
        <div id="my-image" class="f-right cont-avatar">
            <img src="${datos.avatar}" />
        </div>
      </div>
    </header>
  `;
};