import{a as j,b as x,c as C,s as l,p as v}from"./pagination-shop-list-6cdc990e.js";const r=t=>t.map(({id:s,title:e,author:o,bookImage:n,categoryName:k,description:f,buyLinks:[{name:m,url:L},{name:y,url:S},{name:$,url:T}]})=>`<li class="item-shoppingList  js-item-book js-item-book" id = '${s}'>
   <div class="book-list-container js-item-book" id = '${s}'>         
  <img class="pict-shoppingList js-item-book" src="${n}" alt="img"></img>
                <button type='button' class='delete-btn js-item-book' id= '${s}'>
                    </button>
                <div class="content-container-shoppingList js-item-book">
                    <div class="title-delete-shoppingList">
                        <div class="title-shoppingList">
                            <h3 class="shop-book-title">${e}</h3>
                            <p class="shop-sub-title">${k}</p>
                        </div>
                    </div>
                    <p class="discription-shoppinglist">${f}</p>
                    <div>
                    <div class="autor-link-shoppingList">
                        <p class="shop-book-autor">${o}</p>
                        <div class="shop-refs">
                        <ul class="links-shoppingList">                  
                        <li class="shop-book-link amazon-link"><a class="shop-a" href="${L}"><img class="amazon-png" src="${j}" alt="${m}"></a></li>
                        <li class="shop-book-link apple-store-link"><a class="shop-a" href="${S}"><img class="apple-store" src="${x}" alt="${y} "></a></li>
                        <li class="shop-book-link book-shop-link"><a class="shop-a" href="${T}"><img class="book-shop" src="${C}" alt="${$} "></a></li>
                        </ul>
                        </div>
                    </div> 
                    </div>
                </div>
                </div>
            </li>`).join(""),a=document.querySelector(".ulShoppingList");let q=window.innerWidth;const p=document.querySelector(".emptyList"),h=document.querySelector(".js-support"),g=document.querySelector(".pagination-shop-list");h.classList.add("support-shop-wrapper");const d=3;let i=0,c;h.classList.add("support-shop-wrapper");function u(){let t=l.length;v(t),c=b(l,d,i),l.length>0&&l.length<=3?(a.innerHTML=r(c),g.style.display="none",p.style.display="none"):l.length>=3?(a.innerHTML=r(c),p.style.display="none"):(p.style.display="block",g.style.display="none")}u();a.addEventListener("click",A);function A(t){let s;t.target.classList.contains("delete-btn")&&(s=t.target.parentNode.getAttribute("id"),c.forEach((e,o)=>{e.id==s&&l.splice(o,1)}),c=b(l,d,i),u(),a.innerHTML=r(c),localStorage.setItem("shopping-trash",JSON.stringify(l)))}function b(t,s,e){const o=s*e,n=o+s;return t.slice(o,n)}g.addEventListener("click",D);function D(t){t.target.classList.toggle("selected-page");let s=Math.ceil(l.length/3);if(t.target.classList.contains("btn-shop-list"))if(t.target.textContent===">"){if(s===i+1)return;i+=1}else if(t.target.textContent==="<"){if(i===0)return;i-=1}else t.target.textContent===">>"?i=s-1:t.target.textContent==="<"?i-=1:t.target.textContent==="<<"?i=0:i=t.target.textContent-1;else return;u()}const E=document.querySelectorAll(".js-book-title"),M=document.querySelectorAll(".js-book-subtitle"),P=document.querySelectorAll(".js-description");q<=767&&(w(E),z(M),H(P));function w(t){for(let s=0;s<t.length;s++){const e=t[s].textContent.split("");if(e.length>14){const n=e.slice(0,16).join("");t[s].textContent=`${n}...`}}}function z(t){for(let s=0;s<t.length;s++){const e=t[s].textContent.split("");if(e.length>21){const n=e.slice(0,21).join("");t[s].textContent=`${n}...`}}}function H(t){for(let s=0;s<t.length;s++){const e=t[s].textContent.split("");if(e.length>83){const n=e.slice(0,90).join("");t[s].textContent=`${n}...`}}}
