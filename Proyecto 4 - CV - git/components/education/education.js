import { datos } from '../../datos.js';
import "./education.css"

export const cvEducation = () => {
  let education = datos.education;
  let educationHtml = '';

  for (let i = 0; i < education.length; i++){
    educationHtml += ` 
    <div class="education">
      <p class="degree">${education[i].degree}</p>
      <p class="university">${education[i].university}</p>
      <p class="graduationYear">${education[i].graduationYear}</p>
    </div>
  `;
  }
  return `
  <section id="education" class="hidden">
    <h2>My education</h2>
      <div class="flex-education">
        ${educationHtml}
      </div>
  </section>
    `;
};