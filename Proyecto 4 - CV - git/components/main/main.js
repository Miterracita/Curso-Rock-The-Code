import { cvAboutMe } from '../about-me/about-me.js';
import { cvExperience } from '../experience/experience.js';
import { cvEducation } from '../education/education.js';
import "./main.css"

export const cvMain = () => {
  return `<main>
    ${cvAboutMe()}
    ${cvExperience()}
    ${cvEducation()}
  </main>`;
};