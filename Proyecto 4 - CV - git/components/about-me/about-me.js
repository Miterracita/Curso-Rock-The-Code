import { datos } from '../../datos.js';
import "./about-me.css"

export const cvAboutMe = () => {

  return `
    <section id="about-me" class="about-me">
      <div class="wrapper">
        <h2>About me</h2>
        <p>${datos.description}</p>
        <div class="see-experience" id="see-experience">
          <p class="txt">Do you want to see my experience?<p>
          <div class="ico-flecha">
            <svg data-bbox="19 56 162 89" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="19 56 162 89" role="presentation" aria-hidden="true">
              <g><polygon points="181,64 173,56 100,128 27,56 19,64 100,145 "></polygon></g>
            </svg>
          </div>
        </div>
      </div>
    </section>
    `;
};
