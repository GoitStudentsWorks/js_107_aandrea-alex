import{A as G,S as E,N as q,K as P,i as ce,a as ae}from"./assets/vendor-CZdjGj8m.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();function ie(e,t){e.forEach(s=>{if(s.isIntersecting){const n=s.target;n.dataset.src&&(n.src=n.dataset.src),n.classList.remove("lazy-bg"),t.unobserve(n)}})}const le=document.querySelectorAll(".lazy-bg"),ue=new IntersectionObserver(ie);le.forEach(e=>ue.observe(e));const h=(e,t=1e3)=>{const s=document.getElementById(e);if(!s)return;const n=window.scrollY,r=s.getBoundingClientRect().top+n,o=performance.now(),a=i=>{const m=i-o,L=Math.min(m/t,1);window.scrollTo(0,n+(r-n)*B(L)),m<t&&requestAnimationFrame(a)},B=i=>i<.5?2*i*i:-1+(4-2*i)*i;requestAnimationFrame(a)},I=document.querySelector(".js-header-menu-btn"),p=document.querySelector(".js-header-menu"),R=document.querySelector(".js-header-order-link"),C=document.querySelector(".header-fixed");I&&p&&(I.addEventListener("click",()=>{p.classList.toggle("isopen")}),p.addEventListener("click",J));R&&R.addEventListener("click",J);function J(e){e.preventDefault();const t=e.target.closest("a");if(!t)return;const s=t.getAttribute("href").substring(1);h(s),p&&p.classList.contains("isopen")&&p.classList.remove("isopen")}window.addEventListener("scroll",()=>{window.scrollY>50?C.classList.add("onscroll"):C.classList.remove("onscroll")});const A=document.querySelector(".js-header-mobile-menu-btn"),Q=document.querySelector(".js-mobile-menu"),T=document.querySelector(".js-mobile-menu-close-btn"),D=document.querySelector(".js-mobile-menu-nav"),$=document.querySelector(".js-mobile-menu-order");A&&A.addEventListener("click",de);T&&T.addEventListener("click",X);D&&D.addEventListener("click",ee);$&&$.addEventListener("click",ee);function de(){Q.classList.add("is-open")}function X(){Q.classList.remove("is-open")}function ee(e){e.preventDefault();const t=e.target;if(!t.matches("a"))return;const s=t.getAttribute("href").substring(1);h(s),X()}new G(".accordion-container",{duration:500,openOnInit:[0]});const u=new E(".about-skills-container",{modules:[q,P],slidesPerView:2,spaceBetween:2,loop:!0,navigation:{nextEl:".about-arrow-btn-next"},keyboard:{enabled:!0,onlyInViewport:!0},speed:700,effect:"slide",breakpoints:{768:{slidesPerView:3,spaceBetween:2},1440:{slidesPerView:6,spaceBetween:2}}});u.on("init",te);u.on("slideChange",te);function te(){if(!u||!u.slides)return;u.slides.forEach(t=>{t.classList.remove("active")});const e=u.slides[u.activeIndex];e&&e.classList.add("active")}new G(".faq-acc-container");const V=document.querySelector(".js-project-order");V&&V.addEventListener("click",pe);function pe(e){e.preventDefault();const t=e.target;if(!t.matches("a"))return;const s=t.getAttribute("href").substring(1);h(s)}function me(e=[]){return e.reduce((t,{url1x:s,url2x:n})=>t+`
       <li class="projects-item swiper-slide">
        <div class="project-info-container">
          <ul class="project-lang-list">
            <li class="projects-lang-item">
              <span class="projects-lang-item-text">#react</span>
            </li>
            <li class="projects-lang-item">
              <span class="projects-lang-item-text">#js</span>
            </li>
            <li class="projects-lang-item">
              <span class="projects-lang-item-text">#node js</span>
            </li>
            <li class="projects-lang-item">
              <span class="projects-lang-item-text">#git</span>
            </li>
          </ul>
          <div class="project-description-wrapper">
            <p class="project-description">
              Programming Across Borders: Ideas, Technologies, Innovations
            </p>
           <a href="https://github.com/aandrea-alex/alex-template-portfolio" class="project-link js-project-link" target="_blank">See project</a>
          </div>
        </div>
        <div class="projects-img-wrapper">
          <picture>
            <source
              srcset="
                ${s} 1x,
                ${n} 2x
              "
              type="image/webp"
            />
            <img
              class="projects-img lazy"
              src="${s}"
              alt="Project 01 main page"
              loading="lazy"
            />
          </picture>
        </div>
      </li>
      `,"")}const fe=async(e,t)=>{const s=me(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},ve="/js_107_aandrea-alex/assets/project13@1x-D5Ae1P1v.webp",xe="/js_107_aandrea-alex/assets/project13@2x-D8klBtoi.webp",be="/js_107_aandrea-alex/assets/project11@1x-ticSGbVE.webp",ge="/js_107_aandrea-alex/assets/project11@2x-BNlS8ZLJ.webp",je="/js_107_aandrea-alex/assets/project12@1x-DX7EZF19.webp",we="/js_107_aandrea-alex/assets/project12@2x-D5j4c6uV.webp",he="/js_107_aandrea-alex/assets/project01@1x-Ye2u9QvY.webp",_e="/js_107_aandrea-alex/assets/project01@2x-CGnU-NZM.webp",Le="/js_107_aandrea-alex/assets/project02@1x-dj219-w_.webp",ye="/js_107_aandrea-alex/assets/project02@2x-R_GplPUq.webp",Se="/js_107_aandrea-alex/assets/project03@1x-CuhbSDYE.webp",Ee="/js_107_aandrea-alex/assets/project03@2x-DFdgcKJ5.webp",qe="/js_107_aandrea-alex/assets/project04@1x-Doff4Zlc.webp",Pe="/js_107_aandrea-alex/assets/project04@2x-D8suiMQa.webp",ke="/js_107_aandrea-alex/assets/project05@1x-NId4RxqZ.webp",Me="/js_107_aandrea-alex/assets/project05@2x-wvuiV8Po.webp",Be="/js_107_aandrea-alex/assets/project06@1x-C_lFZmue.webp",Ie="/js_107_aandrea-alex/assets/project06@2x-DCqSTG3_.webp",Re="/js_107_aandrea-alex/assets/project07@1x-B3QnrJNm.webp",Ce="/js_107_aandrea-alex/assets/project07@2x-C0-TBLLl.webp",Ae="/js_107_aandrea-alex/assets/project08@1x-4Vi569Pq.webp",Te="/js_107_aandrea-alex/assets/project08@2x-DDEYTNWW.webp",De="/js_107_aandrea-alex/assets/project09@1x-BaB1ldRA.webp",$e="/js_107_aandrea-alex/assets/project09@2x-uHr6DaSI.webp",Ve="/js_107_aandrea-alex/assets/project10@1x-D4mJW1Ez.webp",Ne="/js_107_aandrea-alex/assets/project10@2x-D6jge__s.webp",se=[{url1x:ve,url2x:xe},{url1x:be,url2x:ge},{url1x:je,url2x:we},{url1x:he,url2x:_e},{url1x:Le,url2x:ye},{url1x:Se,url2x:Ee},{url1x:qe,url2x:Pe},{url1x:ke,url2x:Me},{url1x:Be,url2x:Ie},{url1x:Re,url2x:Ce},{url1x:Ae,url2x:Te},{url1x:De,url2x:$e},{url1x:Ve,url2x:Ne}];let g;const re=document.querySelector(".projects-list");re&&Oe();async function Oe(){try{await fe(se,re),g=new E(".projects-swiper-container",{modules:[q,P],slidesPerView:1,spaceBetween:0,loop:!1,navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0},speed:1e3,effect:"slide",on:{init:N,slideChange:N},touchEventsTarget:"wrapper",simulateTouch:!0,touchRatio:1,touchAngle:45})}catch(e){console.log(e.message)}}function N(){if(!g)return;const e=document.querySelector(".projects-btn-prev"),t=document.querySelector(".projects-btn-next");g.isBeginning?e.disabled=!0:e.disabled=!1,g.isEnd?t.disabled=!0:t.disabled=!1}function ze(e=[]){const t=(a=0)=>[...e.slice(a),...e.slice(0,a)].reduce((i,{url1x:m,url2x:L})=>i+`<li>        
          <picture covers-marquee-picture>
            <source
              srcset="
                ${m} 1x,
                ${L} 2x               
              "
              type="image/webp"
            />
            <img
              class="covers-marquee-img"
              src="${m}"
              alt="Project image"
              loading="lazy"
            />
          </picture>
        </li>
        `,""),s=t(0),n=t(2),r=t(4),o=t(6);return`
    <div class="covers-marquee-inner">
      <ul class="covers-marquee-line">${s}</ul>
      <ul class="covers-marquee-line">${n}</ul>
      <ul class="covers-marquee-line">${r}</ul>
      <ul class="covers-marquee-line">${o}</ul>
    </div>
  `}const He=async(e,t)=>{const s=ze(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},Fe=document.querySelector(".covers-marquee");He(se,Fe);const Ue=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?t.target.classList.add("animate-covers"):t.target.classList.remove("animate-covers")})},{threshold:.5}),O=document.querySelector(".covers-section");O&&Ue.observe(O);function Ke(e=[]){return!e||e.length===0?"":e.reduce((t,{_id:s,author:n="Anonymous",avatar_url:r="default-avatar.png",review:o="No review provided"})=>t+`
       <li class="reviews-list-item swiper-slide" id="review-${s}">
        <img
          class="reviews-list-avatar"
          src="${r}"
          alt="${n} avatar"
          
        />
        <div class="reviews-list-item-info">
          <h3 class="reviews-list-fullname">${z(n)}</h3>
          <p class="reviews-list-text">
            ${z(o)}
          </p>
        </div>
      </li>
      `,"")}function z(e){return e.replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})}const Ze=async(e,t)=>{try{let s="";e.length===0?s='<span class="notfound">Not found!</span>':s=Ke(e),t.innerHTML="",t.insertAdjacentHTML("beforeend",s)}catch(s){console.error("Error creating reviews:",s)}},We="data:image/svg+xml,%3c!--%20Generated%20by%20IcoMoon.io%20--%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%3e%3ctitle%3ebi_x-octagon%3c/title%3e%3cpath%20fill='%23fafafb'%20d='M9.080%200.292c0.187-0.187%200.441-0.292%200.706-0.292h12.428c0.265%200%200.519%200.105%200.706%200.292l8.788%208.788c0.187%200.187%200.292%200.441%200.292%200.706v12.428c0%200.265-0.105%200.519-0.292%200.706l-8.788%208.788c-0.187%200.187-0.441%200.292-0.706%200.292h-12.428c-0.265%200-0.519-0.105-0.706-0.292l-8.788-8.788c-0.187-0.187-0.292-0.441-0.292-0.706v-12.428c0-0.265%200.105-0.519%200.292-0.706l8.788-8.788zM10.2%202l-8.2%208.2v11.6l8.2%208.2h11.6l8.2-8.2v-11.6l-8.2-8.2h-11.6z'%3e%3c/path%3e%3cpath%20fill='%23fafafb'%20d='M9.292%209.292c0.093-0.093%200.203-0.167%200.325-0.217s0.252-0.076%200.383-0.076c0.132%200%200.262%200.026%200.383%200.076s0.232%200.124%200.325%200.217l5.292%205.294%205.292-5.294c0.093-0.093%200.203-0.167%200.325-0.217s0.252-0.076%200.383-0.076%200.262%200.026%200.383%200.076c0.121%200.050%200.232%200.124%200.325%200.217s0.167%200.203%200.217%200.325c0.050%200.121%200.076%200.252%200.076%200.383s-0.026%200.262-0.076%200.383c-0.050%200.121-0.124%200.232-0.217%200.325l-5.294%205.292%205.294%205.292c0.093%200.093%200.167%200.203%200.217%200.325s0.076%200.252%200.076%200.383-0.026%200.262-0.076%200.383c-0.050%200.121-0.124%200.232-0.217%200.325s-0.203%200.167-0.325%200.217c-0.121%200.050-0.252%200.076-0.383%200.076s-0.262-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217l-5.292-5.294-5.292%205.294c-0.093%200.093-0.203%200.167-0.325%200.217s-0.252%200.076-0.383%200.076-0.262-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217s-0.167-0.203-0.217-0.325c-0.050-0.121-0.076-0.252-0.076-0.383s0.026-0.262%200.076-0.383c0.050-0.121%200.124-0.232%200.217-0.325l5.294-5.292-5.294-5.292c-0.093-0.093-0.167-0.203-0.217-0.325s-0.076-0.252-0.076-0.383c0-0.132%200.026-0.262%200.076-0.383s0.124-0.232%200.217-0.325z'%3e%3c/path%3e%3c/svg%3e";function y(e){ce.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${We}`,iconColor:"#fafafb"})}const ne=ae.create({baseURL:"https://portfolio-js.b.goit.study/api/"}),Ye=document.querySelector(".reviews-list");let H=[];async function Ge(){var e;try{const t=await ne.get("reviews");t&&t.status===200?((e=t.data)==null?void 0:e.length)?H=t.data:y("Reviews not found"):y("Invalid response")}catch{y("Fetch Error!")}finally{Ze(H,Ye)}}let j;Ge().then(()=>{Qe&&(j=new E(".reviews-swiper-container",{modules:[q,P],slidesPerView:1,loop:!1,navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},speed:700,effect:"slide",on:{init:F,slideChange:F},touchEventsTarget:"wrapper",simulateTouch:!0,touchRatio:1,touchAngle:45}))}).catch(e=>{console.error(e.message)});function F(){if(!j)return;const e=document.querySelector(".reviews-btn-prev"),t=document.querySelector(".reviews-btn-next");j.isBeginning?e.disabled=!0:e.disabled=!1,j.isEnd?t.disabled=!0:t.disabled=!1}function Je(){const e=document.querySelector(".reviews-btn-prev"),t=document.querySelector(".reviews-btn-next");e&&e.classList.add("hide"),t&&t.classList.add("hide")}function Qe(){const e=document.querySelector(".reviews-container"),t=document.querySelector(".reviews-swiper-container"),s=document.querySelector(".reviews-btn-prev"),n=document.querySelector(".reviews-btn-next"),r=e.querySelector(".reviews-list-item");return!e||!t||!s||!n||!r?(Je(),!1):!0}let U=50;const _="data-original";function Xe(){document.querySelectorAll(".js-custom-input").forEach(t=>{t.addEventListener("change",tt),t.addEventListener("focus",st),t.addEventListener("blur",rt)})}function K(e){let t="";return e&&(e.hasAttribute(_)?(t=e.dataset.original,t||(t=e.value.trim())):t=e.value.trim()),t}function Z(e){e&&e.hasAttribute(_)&&(e.dataset.original="")}function et(e,t){return e.length>t?e.slice(0,t)+"...":e}function tt(e){const t=e.target,s=t.value.trim();t.hasAttribute(_)&&(t.dataset.original=s)}function st(e){const t=e.target;t.hasAttribute(_)&&(t.value=t.dataset.original)}function rt(e){const t=e.target,s=t.value;s.length>U&&(t.value=et(s,U))}const nt="/js_107_aandrea-alex/assets/symbols-KKct6nH2.svg";function ot({title:e,message:t}){return`
        <div class="modal-window">
          <div class="modal-container">
            <button class="modal-close-btn" type="button">
              <svg
                class="modal-close-icon"            
                aria-label="Close icon"
              >
                <use href="${nt}#icon-x"></use>
              </svg>
            </button>
            <p class="modal-title">
              ${e}            
            </p>
            <p class="modal-message">${t}</p>
          </div>
        </div>   
      `}const ct=async(e,t)=>{const s=ot(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},at=e=>/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,7}$/.test(e),it="Escape",lt=e=>{e.innerHTML=""};let f=document.querySelector(".modal-backdrop");f&&f.addEventListener("click",dt);let S;function ut(){f.classList.add("is-open"),window.addEventListener("keydown",oe),S=document.querySelector(".modal-close-btn"),S&&S.addEventListener("click",k)}function oe(e){e.code===it&&k()}function dt(e){e.currentTarget===e.target&&k()}function k(e){window.removeEventListener("keydown",oe),f.classList.remove("is-open"),lt(f)}document.addEventListener("DOMContentLoaded",Xe);const v=document.querySelector(".footer-form"),c=v.querySelector(".footer-email"),l=v.querySelector(".footer-comment"),pt=document.querySelector(".footer-button"),d=document.querySelector(".footer-email-error"),x=document.querySelector(".footer-comment-error"),W=document.querySelector(".js-footer-scroll-up");W&&W.addEventListener("click",()=>{h("id-hero",3e3)});const w=document.querySelector(".footer-email-success");v&&v.addEventListener("submit",ft);const mt=[c,l];mt.forEach(e=>{e&&(e.addEventListener("input",vt),e.addEventListener("input",M),e.addEventListener("keydown",Y),e.addEventListener("focus",Y))});async function ft(e){e.preventDefault();const t=K(c);if(!t){b(d,c);return}const s=K(l);if(!s){b(x,l);return}if(!at(t)){b(d,c);return}const n={email:t,comment:s};try{const r=await ne.post("requests",n);r&&r.status>=200&&r.status<300&&(await ct(r.data,document.querySelector(".modal-backdrop")),ut(),Z(c),Z(l),w&&w.classList.add("visible"),c&&c.classList.add("success"),v.reset())}catch{b(d,c)}finally{M()}}function M(){pt.disabled=!c.value.trim()||!l.value.trim()}function vt(){d&&d.classList.remove("visible"),x&&x.classList.remove("visible"),c&&c.classList.remove("error"),l&&l.classList.remove("error")}function Y(){d&&d.classList.remove("visible"),x&&x.classList.remove("visible"),w&&w.classList.remove("visible"),c&&c.classList.remove("error"),l&&l.classList.remove("error"),c&&c.classList.remove("success")}function b(e,t,s){e&&e.classList.add("visible"),t&&t.classList.add("error")}M();
//# sourceMappingURL=commonHelpers.js.map
