import"./styles-fac82e35.js";const k=document.querySelector(".container-shoppingList");document.querySelector(".delete-btn");const s=document.querySelector(".emptyList"),u=document.querySelector(".js-support");u.classList.add("support-shop-wrapper");console.dir(s);const o=[{id:"643282b1e85766588626a07a",title:"DAISY JONES & THE SIX",author:"Taylor Jenkins Reid",bookImage:"https://storage.googleapis.com/du-prd/books/images/9781524798628.jpg",categoryName:"Combined Print and E-Book Fiction",description:"A fictional oral history charting the rise and fall of a ’70s rock ’n’ roll band.",buyLinks:[{name:"Amazon",url:"https://www.amazon.com/Daisy-Jones-Taylor-Jenkins-Reid/dp/1524798622?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9781524798642?at=10lIEQ"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781524798642&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DDAISY%2BJONES%2B%2526%2BTHE%2BSIX"}]},{id:"643282b1e85766588626a0a8",title:"IT STARTS WITH US",author:"Colleen Hoover",bookImage:"https://storage.googleapis.com/du-prd/books/images/9781668001226.jpg",categoryName:"Combined Print and E-Book Fiction",description:"In the sequel to “It Ends With Us,” Lily deals with her jealous ex-husband as she reconnects with her first boyfriend.",buyLinks:[{name:"Amazon",url:"https://www.amazon.com/dp/1668001225?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9781668001226?at=10lIEQ"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781668001226&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DIT%2BSTARTS%2BWITH%2BUS"}]},{id:"643282b1e85766588626a0c8",title:"LESSONS IN CHEMISTRY",author:"Bonnie Garmus",bookImage:"https://storage.googleapis.com/du-prd/books/images/9780385547345.jpg",categoryName:"Combined Print and E-Book Fiction",description:"A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show.",buyLinks:[{name:"Amazon",url:"https://www.amazon.com/dp/038554734X?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9780385547345?at=10lIEQ"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780385547345&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DLESSONS%2BIN%2BCHEMISTRY"}]},{id:"643282b2e85766588626a0e6",title:"IT ENDS WITH US",author:"Colleen Hoover",bookImage:"https://storage.googleapis.com/du-prd/books/images/9781501110375.jpg",categoryName:"Combined Print and E-Book Fiction",description:"A battered wife raised in a violent home attempts to halt the cycle of abuse.",buyLinks:[{name:"Amazon",url:"http://www.amazon.com/Ends-Us-Novel-Colleen-Hoover-ebook/dp/B0176M3U10?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9781501110368?at=10lIEQ"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781501110368&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DIT%2BENDS%2BWITH%2BUS"}]}];function b(t){return t.map(({id:e,title:a,author:i,bookImage:p,categoryName:l,description:n,buyLinks:[{name:r,url:c},{name:d,url:h},{name:g,url:m}]})=>`<ul class="ulShoppingList">
            <li class="item-shoppingList" id = '${e}'>
                <img class="pict-shoppingList" src="${p}" alt="img"></img>
                <div class="content-container-shoppingList">
                    <div class="title-delete-shoppingList">
                        <div class="title-shoppingList">
                            <h3 class="shop-book-title">${a}</h3>
                            <p class="shop-sub-title">${l}</p>
                        </div>
                        <a class='delete-btn'>
                            <svg class="dump" width="20" height="20" >
        <use href="./img/sprite.svg#dump"></use>
                    </a>
                        
                    </div>
                    <p class="discription-shoppinglist">${n}</p>
                    <div>
                    <div class="autor-link-shoppingList">
                        <p class="shop-book-autor">${i}</p>
                        <ul class="links-shoppingList">
                        <li class="shop-book-link amazon-link">     <a class="shop-a" href="${c}"><img class="amazon" src="./img/icon-book-store/amazon.png" alt="${r} "></a></li>
                        <li class="shop-book-link apple-store-link"><a class="shop-a" href="${h}"><img class="apple-store" src="./img/icon-book-store/apple-store.png" alt="${d} "></a></li>
                        <li class="shop-book-link book-shop-link">  <a class="shop-a" href="${m}"><img class="book-shop" src="./img/icon-book-store/book-shop.png" alt="${g} "></a></li>
                        </ul>
                    </div> 
                    </div>
                </div>
            </li>
        </ul>`).join("")}o.length>0?k.insertAdjacentHTML("beforeend",b(o)):s.style.display="block";
