import{e as i,p as j}from"./pagination-shop-list-a0246cef.js";const r=t=>t.map(({id:e,title:s,author:n,bookImage:l,categoryName:m,description:f,buyLinks:[{name:L,url:y},{name:S,url:x},{name:$,url:T}]})=>`<li class="item-shoppingList  js-item-book js-item-book" id = '${e}'>
                <img class="pict-shoppingList js-item-book" src="${l}" alt="img"></img>
                <button type='button' class='delete-btn js-item-book' id= '${e}'>
                    </button>
                <div class="content-container-shoppingList js-item-book">
                    <div class="title-delete-shoppingList">
                        <div class="title-shoppingList">
                            <h3 class="shop-book-title">${s}</h3>
                            <p class="shop-sub-title">${m}</p>
                        </div>
                        
                        
                    </div>
                    <p class="discription-shoppinglist">${f}</p>
                    <div>
                    <div class="autor-link-shoppingList">
                        <p class="shop-book-autor">${n}</p>
                        <ul class="links-shoppingList">
                        <li class="shop-book-link amazon-link"><a class="shop-a" href="${y}"><img class="amazon" src="/img/icon-book-store/amazon.png" alt="${L} "></a></li>
                        <li class="shop-book-link apple-store-link"><a class="shop-a" href="${x}"><img class="apple-store" src="/img/icon-book-store/apple-store.png" alt="${S} "></a></li>
                        <li class="shop-book-link book-shop-link"><a class="shop-a" href="${T}"><img class="book-shop" src="/img/icon-book-store/book-shop.png" alt="${$} "></a></li>
                        </ul>
                    </div> 
                    </div>
                </div>
            </li>`).join(""),p=document.querySelector(".ulShoppingList");document.querySelector(".delete-btn");let C=window.innerWidth;const a=document.querySelector(".emptyList"),h=document.querySelector(".js-support"),g=document.querySelector(".pagination-shop-list");h.classList.add("support-shop-wrapper");const d=3;let o=0,c;h.classList.add("support-shop-wrapper");function u(){console.log("ex3",i);let t=i.length;j(t),c=b(i,d,o),i.length>0&&i.length<=3?(p.innerHTML=r(c),g.style.display="none",a.style.display="none"):i.length>=3?(p.innerHTML=r(c),a.style.display="none"):(a.style.display="block",g.style.display="none")}u();p.addEventListener("click",q);function q(t){let e;t.target.classList.contains("delete-btn")&&(e=t.target.parentNode.getAttribute("id"),c.forEach((s,n)=>{s.id==e&&i.splice(n,1)}),console.log("example2",i),c=b(i,d,o),u(),p.innerHTML=r(c))}function b(t,e,s){const n=e*s,l=n+e;return t.slice(n,l)}console.log("page",o);g.addEventListener("click",A);function A(t){t.target.classList.toggle("selected-page");let e=Math.ceil(i.length/3);if(console.log("leng",e),console.log("page",o),t.target.classList.contains("btn-shop-list"))if(t.target.textContent===">"){if(e===o+1)return;o+=1}else if(t.target.textContent==="<"){if(o===0)return;o-=1}else t.target.textContent===">>"?o=e-1:t.target.textContent==="<"?o-=1:t.target.textContent==="<<"?o=0:o=t.target.textContent-1;else return;u()}const D=document.querySelectorAll(".js-book-title"),E=document.querySelectorAll(".js-book-subtitle"),k=document.querySelectorAll("js-description");console.log(k.textContent);C<=767&&(M(D),v(E),w(k));function M(t){for(let e=0;e<t.length;e++){const s=t[e].textContent.split("");if(s.length>14){const l=s.slice(0,16).join("");t[e].textContent=`${l}...`}}}function v(t){for(let e=0;e<t.length;e++){const s=t[e].textContent.split("");if(s.length>21){const l=s.slice(0,21).join("");t[e].textContent=`${l}...`}}}function w(t){for(let e=0;e<t.length;e++){const s=t[e].textContent.split("");if(s.length>83){const l=s.slice(0,90).join("");t[e].textContent=`${l}...`}}}
