(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const n={name:"Ana Rodríguez",iam:"Web designer and Front-end developer",address:"Palma de mallorca",email:"anadiseny@email.com",linkedin:"http://linkedin.com/in/anadisseny",avatar:"./assets/img/perfil-byn.jpg",saludo:"Hi There, <span>I'm Ana Rodríguez</span>",txt:"Wellcome to my portfolio of captivating digital experiences. Explore my work and let's create something extraordinary together.",description:"I'm Ana Rodríguez, a Frontend developer dedicated to crafting intuitive and visually stunning digital experiences. With a passion for design and developer, I transform ideas into functional and beautiful interfaces. Let's collaborate and shape the future of design together.",education:[{degree:"Desarrollo páginas web - Javascript",university:"Palma Activa",graduationYear:2020},{degree:"Certificado profesionalidad nivel 3, Desarrollo de aplicaciones con tecnologías web",university:"Muévete formación",graduationYear:2017},{degree:"SEO - Posicionamiento en buscadores",university:"U.N.E.D",graduationYear:1999},{degree:"Diseño web avanzado - Bootstrap y JQuery",university:"Academia Animartec",graduationYear:1999},{degree:"Diseño gráfico",university:"Academia Creativa",graduationYear:1999},{degree:"Fundamentos del diseño, diseño y comunicación visual.",university:"Academia Idea",graduationYear:1998},{degree:"Bachillerato Artes plásticas, imagen y diseño",university:"Escola superior de disseny",graduationYear:1996}],workExperience:[{position:"Frontend developer",company:"Meliá Hotels International",startDate:"octubre 2019",endDate:"Actualidad",description:"Frontend developer (html5, css3, Javascript, React). Magnolia Front-End Certificate."},{position:"Diseñadora web",company:"Indra",startDate:"Marzo 2009",endDate:"Marzo 2016",description:"Diseño y maquetación web (html, css, bootstrap, jquery y javascript). Diseño y desarrollo de aplicaciones web con el cms Drupal (php). Estudio y aplicación de mejoras en accesibilidad y usabilidad en varios proyectos web. Mantenimiento de aplicaciones web. Diseño y desarrollo de nuevas funcionalidades. Gestión de contenidos."},{position:"Diseñadora gráfica y web",company:"Logitravel",startDate:"Mayo 2000",endDate:"Marzo 2009",description:"Responsable departamento diseño y contenidos proyecto Orizonia (Grupo Iberostar). Diseño y maquetación web (html, css, flash). Diseño gráfico"},{position:"Diseñadora gráfica",company:"Impresión Digital",startDate:"Abril 2000",endDate:"Mayo 2002",description:"Responsable del departamento de diseño e impresión. Diseño gráfico. Impresión digital."},{position:"Diseñadora gráfica",company:"Editorial Norte",startDate:"Diciembre 1999",endDate:"Abril 2000",description:"Diseño gráfico y maquetación de callejeros y mapas de Mallorca."},{position:"Diseñadora gráfica",company:"BSB Izy Publicidad",startDate:"Abril 1999",endDate:"Diciembre 1999",description:"Diseño gráfico (Campañas publicitarias, Imagen corporativa , folletos, catalogos ...)."}],skills:["HTML5","CSS3","JavaScript","React","Git","Frontend Development"],projects:[]},d=()=>`
    <header>
      <div class="flex" >
        <div id="saludo" class="f-left">
            <h5>${n.iam}</h5>
            <h1>${n.saludo}</h1>
            <p>${n.txt}</p>
            <a class="btn" href="${n.linkedin}" target="_blank">LinkedIn</a>
        </div>
        <div id="my-image" class="f-right cont-avatar">
            <img src="${n.avatar}" />
        </div>
      </div>
    </header>
  `,c=()=>`<footer>
  <p>2024 - Palma de Mallorca</p>
  </footer>`,l=()=>`
    <section id="about-me" class="about-me">
      <div class="wrapper">
        <h2>About me</h2>
        <p>${n.description}</p>
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
    `,p=()=>{let t=n.workExperience,a="";for(let e=0;e<t.length;e++)a+=`
      <div class="flex-experience">
        <div class="line-experience">
          <div class="line">
            <div class="circle"></div>
          </div>
        </div>
        <div class="experience">
          <p class="position">${t[e].position}</p>
          <p class="company">${t[e].company}</p>
          <p class="date">${t[e].startDate} - ${t[e].endDate}</p>
          <p class="description">${t[e].description}</p>
        </div>
      </div>
    `;return`
  <section id="experience" class="hidden">
    <h2>my experience</h2>
    <div class="cont-experiences">
      ${a}
    </div>
    <div class="see-more" id="see-more">
      <button>See more</button>
    </div>
  </section>
    `},u=()=>{let t=n.education,a="";for(let e=0;e<t.length;e++)a+=` 
    <div class="education">
      <p class="degree">${t[e].degree}</p>
      <p class="university">${t[e].university}</p>
      <p class="graduationYear">${t[e].graduationYear}</p>
    </div>
  `;return`
  <section id="education" class="hidden">
    <h2>My education</h2>
      <div class="flex-education">
        ${a}
      </div>
  </section>
    `},m=()=>`<main>
    ${l()}
    ${p()}
    ${u()}
  </main>`,v=document.querySelector("#cvBody");window.addEventListener("load",function(){v.innerHTML=`
    ${d()}
    ${m()}
    ${c()}
  `;const t=document.querySelector("#see-experience"),a=document.querySelector("#see-more");t.addEventListener("click",function(){let e=document.querySelector("#experience"),s=e.classList.contains("hidden"),i=document.querySelector(".txt"),o=document.querySelector(".ico-flecha");if(s===!0)e.classList.remove("hidden"),i.innerText="Do you want to hidden my experience?",i.classList.add("txt-dark"),o.classList.add("rotate");else{e.classList.add("hidden"),i.innerText="Do you want to see my experience?",i.classList.remove("txt-dark"),o.classList.remove("rotate");let r=document.querySelector("#education");a.textContent==="See less"?r.classList.remove("hidden"):r.classList.add("hidden")}}),a.addEventListener("click",function(){let e=document.querySelector("#education");e.classList.contains("hidden")===!0?(e.classList.remove("hidden"),a.innerHTML="<button>See less</button>"):(e.classList.add("hidden"),a.innerHTML="<button>See more</button>")})});
