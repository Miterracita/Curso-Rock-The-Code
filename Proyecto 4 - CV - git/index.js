// import { data } from '.data.js';
import { cvHeader } from './components/header/header';
import { cvFooter } from './components/footer/footer';
import { cvMain } from './components/main/main';


// hay que insertar todo desde el body, el html debe estar limpio
const bodyHtml = document.querySelector('#cvBody');

window.addEventListener('load', function () {
  bodyHtml.innerHTML= `
    ${cvHeader()}
    ${cvMain()}
    ${cvFooter()}
  `
  const btnSeeExperience = document.querySelector('#see-experience');

  btnSeeExperience.addEventListener('click', function () {

    let myExperienceHtml = document.querySelector('#experience');
    let clase = myExperienceHtml.classList.contains('hidden');
    let txt = document.querySelector('.txt');
    let arrow = document.querySelector('.ico-flecha');
    
    if(clase === true){

      myExperienceHtml.classList.remove('hidden');
      txt.innerText = "Do you want to hidden my experience?";
      txt.classList.add('txt-dark');
      arrow.classList.add('rotate');

    } else {

      myExperienceHtml.classList.add('hidden');
      txt.innerText = "Do you want to see my experience?";
      txt.classList.remove('txt-dark');
      arrow.classList.remove('rotate');
    }
      
  });

  const btnSeeMore = document.querySelector('#see-more');

  btnSeeMore.addEventListener('click', function () {

    let myeducationHtml = document.querySelector('#education');
    let clase = myeducationHtml.classList.contains('hidden');
    
    if(clase === true){
      myeducationHtml.classList.remove('hidden');
    } else {
      myeducationHtml.classList.add('hidden');
    }
      
  });

});