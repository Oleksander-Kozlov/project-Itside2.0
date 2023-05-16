(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(o){if(o.ep)return;o.ep=!0;const t=r(o);fetch(o.href,t)}})();const m=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./img/support/fund1@1x.png",img2:"./img/support/fund1@2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/support/fund2@1x.png",img2:"./img/support/fund2@2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/support/fund3@1x.png",img2:"./img/support/fund3@2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/support/fund4@1x.png",img2:"./img/support/fund4@2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/support/fund5@1x.png",img2:"./img/support/fund5@2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/support/fund6@1x.png",img2:"./img/support/fund6@2x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/support/fund7@1x.png",img2:"./img/support/fund7@2x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/support/fund8@1x.png",img2:"./img/support/fund8@2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/support/fund9@1x.png",img2:"./img/support/fund9@2x.png"}],c=({title:n,url:e,img:r,img2:s},o)=>`<li class="support_list-item swiper-slide">
    <p class="support_number">${o}</p>
    <a class="support_link" href="${e}" target="_blank" rel="noopener noreferrer nofollow">
      <img
      srcset="${r} 1x, ${s} 2x"
        src="${r}"
        alt="${n}"
        width="149"
        loading="lazy"
      />
    </a>
  </li>`,h=document.querySelector(".support_list-js");let l=0;const b=n=>String(n).padStart(2,"0"),k=m.map((n,e)=>(l=b(e+1),c(n,l))).join("");h.innerHTML=k;const u=document.querySelector("#mobile-menu-btn"),f=document.querySelector(".js-mobile-menu");u.addEventListener("click",()=>{u.classList.toggle("is-menu-open"),f.classList.toggle("is-menu-open")});const F=document.getElementById("themeSwitcher"),y=document.querySelector(".header");F.addEventListener("change",()=>{y.classList.toggle("dark-theme")});const S=document.getElementById("themeSwitcher"),w=document.querySelector("body");S.addEventListener("change",()=>{w.classList.toggle("dark-theme")});const g=window.location.href,p=document.querySelector(".js-home-btn"),d=document.querySelector(".js-shopping-btn");p.href===g&&p.classList.add("is-active-btn");d.href===g&&(p.classList.remove("is-active-btn"),d.classList.add("is-active-btn"));let B=[{id:"643282b1e85766588s626a0a8",title:"IT STARTS WITH US",author:"Colleen Hoover",bookImage:"https://storage.googleapis.com/du-prd/books/images/9781668001226.jpg",categoryName:"Combined Print and E-Book Fiction",description:"In the sequel to “It Ends With Us,” Lily deals with her jealous ex-husband as she reconnects with her first boyfriend.",buyLinks:[{name:"Amazon",url:"https://www.amazon.com/dp/1668001225?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9781668001226?at=10lIEQ"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781668001226&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DIT%2BSTARTS%2BWITH%2BUS"}]},{id:"643282b1e8576688626a07a",title:"DAISY JONES & THE SIX",author:"Taylor Jenkins Reid",bookImage:"https://storage.googleapis.com/du-prd/books/images/9781524798628.jpg",categoryName:"Combined Print and E-Book Fiction",description:"A fictional oral history charting the rise and fall of a ’70s rock ’n’ roll band.",buyLinks:[{name:"Amazon",url:"https://www.amazon.com/Daisy-Jones-Taylor-Jenkins-Reid/dp/1524798622?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9781524798642?at=10lIEQ"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781524798642&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DDAISY%2BJONES%2B%2526%2BTHE%2BSIX"}]},{id:"643282b1e8576658d8626a0c8",title:"LESSONS IN CHEMISTRY",author:"Bonnie Garmus",bookImage:"https://storage.googleapis.com/du-prd/books/images/9780385547345.jpg",categoryName:"Combined Print and E-Book Fiction",description:"A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show.",buyLinks:[{name:"Amazon",url:"https://www.amazon.com/dp/038554734X?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9780385547345?at=10lIEQ"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780385547345&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DLESSONS%2BIN%2BCHEMISTRY"}]},{id:"643282b2e857665886126a0e6",title:"IT ENDS WITH US",author:"Colleen Hoover",bookImage:"https://storage.googleapis.com/du-prd/books/images/9781501110375.jpg",categoryName:"Combined Print and E-Book Fiction",description:"A battered wife raised in a violent home attempts to halt the cycle of abuse.",buyLinks:[{name:"Amazon",url:"http://www.amazon.com/Ends-Us-Novel-Colleen-Hoover-ebook/dp/B0176M3U10?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9781501110368?at=10lIEQ"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781501110368&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DIT%2BENDS%2BWITH%2BUS"}]},{id:"643282b1e8576f6588626a07a",title:"DAISY JONES & THE SIX",author:"Taylor Jenkins Reid",bookImage:"https://storage.googleapis.com/du-prd/books/images/9781524798628.jpg",categoryName:"Combined Print and E-Book Fiction",description:"A fictional oral history charting the rise and fall of a ’70s rock ’n’ roll band.",buyLinks:[{name:"Amazon",url:"https://www.amazon.com/Daisy-Jones-Taylor-Jenkins-Reid/dp/1524798622?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9781524798642?at=10lIEQ"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781524798642&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DDAISY%2BJONES%2B%2526%2BTHE%2BSIX"}]},{id:"643282b1e85766588626a0a8",title:"IT STARTS WITH US",author:"Colleen Hoover",bookImage:"https://storage.googleapis.com/du-prd/books/images/9781668001226.jpg",categoryName:"Combined Print and E-Book Fiction",description:"In the sequel to “It Ends With Us,” Lily deals with her jealous ex-husband as she reconnects with her first boyfriend.",buyLinks:[{name:"Amazon",url:"https://www.amazon.com/dp/1668001225?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9781668001226?at=10lIEQ"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781668001226&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DIT%2BSTARTS%2BWITH%2BUS"}]},{id:"643282b1e85766588626a0c8",title:"LESSONS IN CHEMISTRY",author:"Bonnie Garmus",bookImage:"https://storage.googleapis.com/du-prd/books/images/9780385547345.jpg",categoryName:"Combined Print and E-Book Fiction",description:"A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show.",buyLinks:[{name:"Amazon",url:"https://www.amazon.com/dp/038554734X?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9780385547345?at=10lIEQ"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780385547345&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DLESSONS%2BIN%2BCHEMISTRY"}]},{id:"643282b2e85766588626a0e6",title:"IT ENDS WITH US",author:"Colleen Hoover",bookImage:"https://storage.googleapis.com/du-prd/books/images/9781501110375.jpg",categoryName:"Combined Print and E-Book Fiction",description:"A battered wife raised in a violent home attempts to halt the cycle of abuse.",buyLinks:[{name:"Amazon",url:"http://www.amazon.com/Ends-Us-Novel-Colleen-Hoover-ebook/dp/B0176M3U10?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9781501110368?at=10lIEQ"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781501110368&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DIT%2BENDS%2BWITH%2BUS"}]}];const i=document.querySelector(".pagination-shop-list"),E=function(e){let r=Math.ceil(e/3);i.innerHTML=`<button type="button" class="btn-shop-list start-page"><<</button>
<button type="button" class="btn-shop-list next-page then-buttons"><</button>`;for(let s=1;s<r+1;s+=1){let o=`<button type="button" class="btn-shop-list number-btn-shop-list">${s}</button>`;i.insertAdjacentHTML("beforeend",o)}i.insertAdjacentHTML("beforeend",`<button type="button" class="btn-shop-list end-page">></button>
<button type="button" class="btn-shop-list end-page">>></button>`)};export{B as e,E as p};
