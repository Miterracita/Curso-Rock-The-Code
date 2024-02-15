import { datos } from '../../datos.js';
import "./experience.css"

export const cvExperience = () => {

  let experiences = datos.workExperience;
  let experienceHTML = '';

  for (let i = 0; i < experiences.length; i++ ){

    experienceHTML += `
      <div class="flex-experience">
        <div class="line-experience">
          <div class="line">
            <div class="circle"></div>
          </div>
        </div>
        <div class="experience">
          <p class="position">${experiences[i].position}</p>
          <p class="company">${experiences[i].company}</p>
          <p class="date">${experiences[i].startDate} - ${experiences[i].endDate}</p>
          <p class="description">${experiences[i].description}</p>
        </div>
      </div>
    `;
  }

  return `
  <section id="experience" class="hidden">
    <h2>my experience</h2>
    <div class="cont-experiences">
      ${experienceHTML}
    </div>
    <div class="see-more" id="see-more">
      <button>See more</button>
    </div>
  </section>
    `;
};