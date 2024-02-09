(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function d(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var Z=S(function(e){return typeof e=="string"?e:null}),v=function(t){return t!=null};function S(e){return function(t){return v(e(t))}}var Y=function(t){return t.length>0},p=function(t){return Object.keys(t).reduce(function(n,r){var o,a=t[r];return s({},n,v(a)?(o={},o[r]=a,o):{})},{})};function O(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.length-1;return function(){for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];for(var m=t[0].apply(this,a),f=1;f<=r;f++)m=t[f].call(this,m);return m}}var _=S(function(e){return v(e)&&typeof e=="object"&&!Array.isArray(e)?e:null}),L=S(function(e){return Array.isArray(e)&&e.every(Z)&&Y(e)?e:null}),ee=S(function(e){return _(e)&&"errors"in e&&L(e.errors)?{errors:e.errors}:null}),te=function(t){return ee(t)?{errors:t.errors,source:"api"}:{errors:["Responded with a status code outside the 2xx range, and the response body is not recognisable."],source:"decoding"}},b=function(t){this.message=t},ne=function(t){return/application\/[^+]*[+]?(json);?.*/.test(t)},re=function(t){var n=t.headers.get("content-type");return v(n)&&ne(n)},k=function(t){if(re(t))return t.json().catch(function(n){throw new b("unable to parse JSON response.")});throw new b("expected JSON response from server.")},oe=function(t){return function(n){return(n.ok?t({response:n}).then(function(r){return{type:"success",status:n.status,response:r,originalResponse:n}}):k(n).then(function(r){return s({type:"error",status:n.status},te(r),{originalResponse:n})})).catch(function(r){if(r instanceof b)return{type:"error",source:"decoding",status:n.status,originalResponse:n,errors:[r.message]};throw r})}},l=function(){return function(t){var n=t.response;return k(n)}},ae=function(t){return function(n){Object.keys(t).forEach(function(r){return n.searchParams.set(r,t[r].toString())})}},ie=function(t){return function(n){n.pathname==="/"?n.pathname=t:n.pathname+=t}},se=function(t){var n=t.pathname,r=t.query;return function(o){var a=new URL(o);return ie(n)(a),ae(r)(a),a.toString()}},ce=function(t){var n={};return t.forEach(function(r,o){n[o]=r}),n},ue=function(t){var n=new URL(t),r=n.pathname,o=n.searchParams,a=ce(o);return{query:a,pathname:r==="/"?void 0:r}},u=function(t){return function(n,r){r===void 0&&(r={});var o=t(n),a=o.headers,c=o.query,m=d(o,["headers","query"]);return s({},m,r,{query:c,headers:s({},a,r.headers)})}},i=function(t){return t},le=function(t){var n=t.accessKey,r=t.apiVersion,o=r===void 0?"v1":r,a=t.apiUrl,c=a===void 0?"https://api.unsplash.com":a,m=t.headers,f=t.fetch,E=d(t,["accessKey","apiVersion","apiUrl","headers","fetch"]);return function(j){var B=j.handleResponse,D=j.handleRequest;return O(D,function(P){var K=P.pathname,J=P.query,C=P.method,x=C===void 0?"GET":C,z=P.headers,Q=P.body,W=P.signal,V=se({pathname:K,query:J})(c),G=s({method:x,headers:s({},m,z,{"Accept-Version":o},v(n)?{Authorization:"Client-ID "+n}:{}),body:Q,signal:W},E),X=f??fetch;return X(V,G).then(oe(B))})}},A="x-total",de=function(t){var n=t.headers.get(A);if(v(n)){var r=parseInt(n);if(Number.isInteger(r))return r;throw new b("expected "+A+" header to be valid integer.")}else throw new b("expected "+A+" header to exist.")},y=function(){return function(t){var n=t.response;return l()({response:n}).then(function(r){return{results:r,total:de(n)}})}},M=function(t){return v(t)?{collections:t.join()}:{}},he=function(t){return v(t)?{topics:t.join()}:{}},h=function(t){var n=t.page,r=t.perPage,o=t.orderBy;return p({per_page:r,order_by:o,page:n})},T="/collections",pe=function(){var e=function(n){var r=n.collectionId;return T+"/"+r+"/photos"};return i({getPathname:e,handleRequest:u(function(t){var n=t.collectionId,r=t.orientation,o=d(t,["collectionId","orientation"]);return{pathname:e({collectionId:n}),query:p(s({},h(o),{orientation:r}))}}),handleResponse:y()})}(),me=function(){var e=function(n){var r=n.collectionId;return T+"/"+r};return i({getPathname:e,handleRequest:u(function(t){var n=t.collectionId;return{pathname:e({collectionId:n}),query:{}}}),handleResponse:l()})}(),ve=function(){var e=function(){return T};return i({getPathname:e,handleRequest:u(function(t){return t===void 0&&(t={}),{pathname:e(),query:h(t)}}),handleResponse:y()})}(),fe=function(){var e=function(n){var r=n.collectionId;return T+"/"+r+"/related"};return i({getPathname:e,handleRequest:u(function(t){var n=t.collectionId;return{pathname:e({collectionId:n}),query:{}}}),handleResponse:l()})}(),q="/photos",ye=function(){var e=function(){return q};return i({getPathname:function(n){return e()},handleRequest:u(function(t){return t===void 0&&(t={}),{pathname:q,query:p(h(t))}}),handleResponse:y()})}(),Pe=function(){var e=function(n){var r=n.photoId;return q+"/"+r};return i({getPathname:e,handleRequest:u(function(t){var n=t.photoId;return{pathname:e({photoId:n}),query:{}}}),handleResponse:l()})}(),Ie=function(){var e=function(n){var r=n.photoId;return q+"/"+r+"/statistics"};return i({getPathname:e,handleRequest:u(function(t){var n=t.photoId;return{pathname:e({photoId:n}),query:{}}}),handleResponse:l()})}(),be=function(){var e=function(){return q+"/random"};return i({getPathname:e,handleRequest:u(function(t){var n=t===void 0?{}:t,r=n.collectionIds,o=n.contentFilter,a=n.topicIds,c=d(n,["collectionIds","contentFilter","topicIds"]);return{pathname:e(),query:p(s({},c,{content_filter:o},M(r),he(a))),headers:{"cache-control":"no-cache"}}}),handleResponse:l()})}(),qe={handleRequest:u(function(e){var t=e.downloadLocation,n=ue(t),r=n.pathname,o=n.query;if(!v(r))throw new Error("Could not parse pathname from url.");return{pathname:r,query:p(o)}}),handleResponse:l()},H="/search",Re=function(){var e=function(){return H+"/photos"};return i({getPathname:function(n){return e()},handleRequest:u(function(t){var n=t.query,r=t.page,o=t.perPage,a=t.orderBy,c=t.collectionIds,m=t.lang,f=t.contentFilter,E=d(t,["query","page","perPage","orderBy","collectionIds","lang","contentFilter"]);return{pathname:e(),query:p(s({query:n,content_filter:f,lang:m,order_by:a},h({page:r,perPage:o}),M(c),E))}}),handleResponse:l()})}(),Se=function(){var e=function(){return H+"/collections"};return i({getPathname:function(n){return e()},handleRequest:u(function(t){var n=t.query,r=d(t,["query"]);return{pathname:e(),query:s({query:n},h(r))}}),handleResponse:l()})}(),Te=function(){var e=function(){return H+"/users"};return i({getPathname:function(n){return e()},handleRequest:u(function(t){var n=t.query,r=d(t,["query"]);return{pathname:e(),query:s({query:n},h(r))}}),handleResponse:l()})}(),w="/users",we=function(){var e=function(n){var r=n.username;return w+"/"+r};return i({getPathname:e,handleRequest:u(function(t){var n=t.username;return{pathname:e({username:n}),query:{}}}),handleResponse:l()})}(),Ee=function(){var e=function(n){var r=n.username;return w+"/"+r+"/photos"};return i({getPathname:e,handleRequest:u(function(t){var n=t.username,r=t.stats,o=t.orientation,a=d(t,["username","stats","orientation"]);return{pathname:e({username:n}),query:p(s({},h(a),{orientation:o,stats:r}))}}),handleResponse:y()})}(),Ae=function(){var e=function(n){var r=n.username;return w+"/"+r+"/likes"};return i({getPathname:e,handleRequest:u(function(t){var n=t.username,r=t.orientation,o=d(t,["username","orientation"]);return{pathname:e({username:n}),query:p(s({},h(o),{orientation:r}))}}),handleResponse:y()})}(),Oe=function(){var e=function(n){var r=n.username;return w+"/"+r+"/collections"};return i({getPathname:e,handleRequest:u(function(t){var n=t.username,r=d(t,["username"]);return{pathname:e({username:n}),query:h(r)}}),handleResponse:y()})}(),N="/topics",R=function(t){var n=t.topicIdOrSlug;return N+"/"+n},He=i({getPathname:R,handleRequest:function(t){var n=t.page,r=t.perPage,o=t.orderBy,a=t.topicIdsOrSlugs;return{pathname:N,query:p(s({},h({page:n,perPage:r}),{ids:a==null?void 0:a.join(","),order_by:o}))}},handleResponse:y()}),Fe=i({getPathname:R,handleRequest:function(t){var n=t.topicIdOrSlug;return{pathname:R({topicIdOrSlug:n}),query:{}}},handleResponse:l()}),je=function(){var e=O(R,function(t){return t+"/photos"});return i({getPathname:e,handleRequest:function(n){var r=n.topicIdOrSlug,o=n.orientation,a=d(n,["topicIdOrSlug","orientation"]);return{pathname:e({topicIdOrSlug:r}),query:p(s({},h(a),{orientation:o}))}},handleResponse:y()})}(),U;(function(e){e.Afrikaans="af",e.Amharic="am",e.Arabic="ar",e.Azerbaijani="az",e.Belarusian="be",e.Bulgarian="bg",e.Bengali="bn",e.Bosnian="bs",e.Catalan="ca",e.Cebuano="ceb",e.Corsican="co",e.Czech="cs",e.Welsh="cy",e.Danish="da",e.German="de",e.Greek="el",e.English="en",e.Esperanto="eo",e.Spanish="es",e.Estonian="et",e.Basque="eu",e.Persian="fa",e.Finnish="fi",e.French="fr",e.Frisian="fy",e.Irish="ga",e.ScotsGaelic="gd",e.Galician="gl",e.Gujarati="gu",e.Hausa="ha",e.Hawaiian="haw",e.Hindi="hi",e.Hmong="hmn",e.Croatian="hr",e.HaitianCreole="ht",e.Hungarian="hu",e.Armenian="hy",e.Indonesian="id",e.Igbo="ig",e.Icelandic="is",e.Italian="it",e.Hebrew="iw",e.Japanese="ja",e.Javanese="jw",e.Georgian="ka",e.Kazakh="kk",e.Khmer="km",e.Kannada="kn",e.Korean="ko",e.Kurdish="ku",e.Kyrgyz="ky",e.Latin="la",e.Luxembourgish="lb",e.Lao="lo",e.Lithuanian="lt",e.Latvian="lv",e.Malagasy="mg",e.Maori="mi",e.Macedonian="mk",e.Malayalam="ml",e.Mongolian="mn",e.Marathi="mr",e.Malay="ms",e.Maltese="mt",e.Myanmar="my",e.Nepali="ne",e.Dutch="nl",e.Norwegian="no",e.Nyanja="ny",e.Oriya="or",e.Punjabi="pa",e.Polish="pl",e.Pashto="ps",e.Portuguese="pt",e.Romanian="ro",e.Russian="ru",e.Kinyarwanda="rw",e.Sindhi="sd",e.Sinhala="si",e.Slovak="sk",e.Slovenian="sl",e.Samoan="sm",e.Shona="sn",e.Somali="so",e.Albanian="sq",e.Serbian="sr",e.Sesotho="st",e.Sundanese="su",e.Swedish="sv",e.Swahili="sw",e.Tamil="ta",e.Telugu="te",e.Tajik="tg",e.Thai="th",e.Turkmen="tk",e.Filipino="tl",e.Turkish="tr",e.Tatar="tt",e.Uighur="ug",e.Ukrainian="uk",e.Urdu="ur",e.Uzbek="uz",e.Vietnamese="vi",e.Xhosa="xh",e.Yiddish="yi",e.Yoruba="yo",e.ChineseSimplified="zh",e.ChineseTraditional="zh-TW",e.Zulu="zu"})(U||(U={}));var $;(function(e){e.LATEST="latest",e.POPULAR="popular",e.VIEWS="views",e.DOWNLOADS="downloads",e.OLDEST="oldest"})($||($={}));var Ce=O(le,function(e){return{photos:{get:e(Pe),list:e(ye),getStats:e(Ie),getRandom:e(be),trackDownload:e(qe)},users:{getPhotos:e(Ee),getCollections:e(Oe),getLikes:e(Ae),get:e(we)},search:{getCollections:e(Se),getPhotos:e(Re),getUsers:e(Te)},collections:{getPhotos:e(pe),get:e(me),list:e(ve),getRelated:e(fe)},topics:{list:e(He),get:e(Fe),getPhotos:e(je)}}});const Ue=()=>`<div class="header">
            <div class="logo">
                <img src="/logito.png" alt="logo" />
            </div>
            <div class="buscador">
                <input type="text" placeholder="Busca tus imagenes" id="buscador" />
            </div>
            <div class="btn-buscar">
                <button id="btn-buscar">Buscar</button>
            </div>
            <div class="btn-borrar">
            <button id="btn-borrar">Borrar</button>
        </div>
        </div>`,$e=()=>'<ul class="cont-galery" id="cont-galery"></ul>',ke=e=>{const t=document.querySelector("#cont-galery");for(let n=0;n<e.length;n++){const r=document.createElement("li"),o=document.createElement("img");o.src=e[n].urls.small,o.alt=e[n].description,r.appendChild(o);const a=document.createElement("div");a.className="cont-info",r.appendChild(a),a.innerHTML=`
        <div class="cont-user">
          <p class="btn-user"><a href="${e[n].user.links.html}" target="_blank">${e[n].user.name}</a></p>
          <p class="user-name">@${e[n].user.username}</p>
          </div>
        </div>
        <div class="cont-buttons">
          <p class="btn-download">
            <a href="${e[n].urls.full}" target="_blank">
              <svg class="m9vYO" width="15" height="15" viewBox="0 0 24 24" version="1.1" aria-hidden="false"><desc lang="en-US">Arrow pointing down</desc><path fill="#ffffff" d="m19.35 11.625-5.85 5.4V1.5h-3v15.525l-5.85-5.4-2.025 2.25L12 22.425l9.375-8.55-2.025-2.25Z"></path></svg>
            </a>
          </p>
        </div>
      `,t.appendChild(r)}},Me=()=>`<div class="footer">
        <p>NewPinterest - Todos los derechos reservados - 2024</p>
    </div>`,Ne=document.querySelector("header");Ne.innerHTML=Ue();const ge=document.querySelector("footer");ge.innerHTML=Me();const Be=document.querySelector("main");Be.innerHTML=$e();const I=document.querySelector("#cont-galery");Ce({accessKey:"1dOFFfJI0z9kZ6TbdKydN3WjjpkK5-RcpJuW9gA8Qho"});const De="https://api.unsplash.com/search/photos";async function F(e){try{const n=await fetch(`${De}?query=${e}&client_id=1dOFFfJI0z9kZ6TbdKydN3WjjpkK5-RcpJuW9gA8Qho`);n.ok||(I.innerHTML=`<h1 class="mensaje-error">Error en la respuesta de la API: ${n.statusText}</h1>`);const o=(await n.json()).results;if(!o||o.length===0)throw I.innerHTML='<h1 class="mensaje-error">No se encontraron resultados de imágenes.</h1>';ke(o)}catch(t){I.innerHTML=`<h1 class="mensaje-error">Error al obtener imágenes:', ${t}</h1>`}}const g=document.querySelector("#buscador"),Ke=document.querySelector("#btn-buscar");Ke.addEventListener("click",function(){const e=g.value;I.innerHTML=" ",F(e)});const Je=document.querySelector("#btn-borrar");Je.addEventListener("click",function(){g.value=" ",I.innerHTML=" ",F("random")});window.addEventListener("load",function(){F("random")});
