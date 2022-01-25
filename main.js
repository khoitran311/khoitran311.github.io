// Khởi tạo danh sách giày và đưa lên Dom
const shoesContainer = document.querySelector('.shoes__container');
const shoesContainerWoman = document.querySelector('.shoes__container-women');
const shoesContainerCp = document.querySelector('.shoes__container-cp')
const app ={
    listShoes:[
        {
            id:1,
            shoesImg:'dincox1.jpg',
            shoesName:'D21 BLACK WASH',
            shoesPrice:'367.000',
            shoesSize:['6','7','8','9'],
        },
        {
            id:2,
            shoesImg:'dincox2.jpg',
            shoesName:'D21 HIGHT CHOC',
            shoesPrice:'420.000',
            shoesSize:['6','7','8','9'],
        },
        {
            id:3,
            shoesImg:'dincox3.jpg',
            shoesName:'C38 FULL BLACK',
            shoesPrice:'420.000',
            shoesSize:['6','8','9','10'],
        },
        {
            id:4,
            shoesImg:'dincox4.jpg',
            shoesName:'D07 TAN WHITE',
            shoesPrice:'360.000',
            shoesSize:['6','7','8','9'],
        },
        {
            id:5,
            shoesImg:'dincox5.jpg',
            shoesName:'E10 WHITE',
            shoesPrice:'420.000',
            shoesSize:['6','7','8','9 '],
        },
        {
            id:6,
            shoesImg:'dincox6.jpg',
            shoesName:'E21 KHAKI GREY',
            shoesPrice:'420.000',
            shoesSize:['6','7','8','9 '],
        },
        {
            id:7,
            shoesImg:'dincox7.jpg',
            shoesName:'C38 BLACK WHITE',
            shoesPrice:'420.000',
            shoesSize:['6','7','8','9 '],
        },
        {
            id:8,
            shoesImg:'dincox8.jpg',
            shoesName:'C20 SNOW WHITE',
            shoesPrice:'420.000',
            shoesSize:['6','7','8',' 9'],
        },
        {
            id:9,
            shoesImg:'dincox9.jpg',
            shoesName:'E03 WHITE',
            shoesPrice:'420.000',
            shoesSize:['6','7','8',' 9'],
        },
        {
            id:10,
            shoesImg:'dincox10.jpg',
            shoesName:'E03 GREY',
            shoesPrice:'420.000',
            shoesSize:['6','7','8',' 9'],
        },
    ],
    listShoesWoman:[
        {
            id:1,
            shoesImg:'dincox-women1.jpg',
            shoesName:'C20 SNOW WHITE',
            shoesPrice:'367.000',
            shoesSize:['6','7','8','9'],
        },
        {
            id:2,
            shoesImg:'dincox-women2.jpg',
            shoesName:'E03 WHITE',
            shoesPrice:'367.000',
            shoesSize:['6','7','8','9'],
        },
        {
            id:3,
            shoesImg:'dincox-women3.jpg',
            shoesName:'E03 SILVER',
            shoesPrice:'367.000',
            shoesSize:['6','7','8','9'],
        },
        {
            id:4,
            shoesImg:'dincox-women4.jpg',
            shoesName:'E01 RED',
            shoesPrice:'367.000',
            shoesSize:['6','7','8','9'],
        },
        {
            id:5,
            shoesImg:'dincox-women5.jpg',
            shoesName:'E01 WHITE',
            shoesPrice:'367.000',
            shoesSize:['6','7','8','9'],
        },
        {
            id:6,
            shoesImg:'dincox-women6.jpg',
            shoesName:'E01 BLACK',
            shoesPrice:'367.000',
            shoesSize:['6','7','8','9'],
        },
        {
            id:7,
            shoesImg:'dincox-women7.jpg',
            shoesName:'E01 PINK',
            shoesPrice:'367.000',
            shoesSize:['6','7','8','9'],
        },
        {
            id:8,
            shoesImg:'dincox-women8.jpg',
            shoesName:'E20 GRAY',
            shoesPrice:'420.000',
            shoesSize:['6','7','8','9'],
        },
        {
            id:9,
            shoesImg:'dincox-women9.jpg',
            shoesName:'E20 BLACK',
            shoesPrice:'467.000',
            shoesSize:['6','7','8','9'],
        },
        {
            id:10,
            shoesImg:'dincox-women10.jpg',
            shoesName:'E20 WHITE',
            shoesPrice:'447.000',
            shoesSize:['6','7','8','9'],
        },
    ],
    listShoesCp:[
        {
            id:1,
            shoesImg:'dincox-cp1.jpg',
            shoesName:'E10 BLACK',
            shoesPrice:'367.000',
            shoesSize:['6','7','8','9'],
        },
        {
            id:2,
            shoesImg:'dincox-cp2.png',
            shoesName:'C12 WHITE',
            shoesPrice:'256.000',
            shoesSize:['6','7','8','9'],
        },
        {
            id:3,
            shoesImg:'dincox-cp3.jpg',
            shoesName:'COX502 BLACK',
            shoesPrice:'367.000',
            shoesSize:['6','7','8','9'],
        },
        {
            id:4,
            shoesImg:'dincox-cp4.png',
            shoesName:'D34 WHITE',
            shoesPrice:'367.000',
            shoesSize:['6','7','8','9'],
        },
        {
            id:5,
            shoesImg:'dincox-cp5.jpg',
            shoesName:'COX502 BLUE',
            shoesPrice:'367.000',
            shoesSize:['6','7','8','9'],
        },
        {
            id:6,
            shoesImg:'dincox-cp6.png',
            shoesName:'COX43 WHITE',
            shoesPrice:'367.000',
            shoesSize:['6','7','8','9'],
        },
        {
            id:7,
            shoesImg:'dincox-cp7.png',
            shoesName:'C12 BLACK',
            shoesPrice:'256.000',
            shoesSize:['6','7','8','9'],
        },
        {
            id:8,
            shoesImg:'dincox-cp8.png',
            shoesName:'C12 GRAY',
            shoesPrice:'256.000',
            shoesSize:['6','7','8','9'],
        },
        {
            id:9,
            shoesImg:'dincox-cp9.png',
            shoesName:'C12 GREY',
            shoesPrice:'256.000',
            shoesSize:['6','7','8','9'],
        },
        {
            id:10,
            shoesImg:'dincox-cp10.png',
            shoesName:'C12 BROWN',
            shoesPrice:'256.000',
            shoesSize:['6','7','8','9'],
        },
    ],
    render: function(){
         const htmls = this.listShoes.map(shoes => {
             return `
             <div class="shoes__item">
             <div class="shoes-img">
               <img src="/image/${shoes.shoesImg}" alt="">
             </div>
             <h3 class="shoes-name">${shoes.shoesName}</h3>
             <p class="shoes-price" >${shoes.shoesPrice} VND</p>
             <div class="shoes-size">
                 <p>Size:</p>
                 <label class="container">
                  <input type="checkbox" value="${shoes.shoesSize[0]}">
                  <span class="checkmark">${shoes.shoesSize[0]}</span>
                 </label>
                 <label class="container">
                 <input type="checkbox" value="${shoes.shoesSize[1]}">
                 <span class="checkmark">${shoes.shoesSize[1]}</span>
                </label>
                <label class="container">
                <input type="checkbox" value="${shoes.shoesSize[2]}">
                <span class="checkmark">${shoes.shoesSize[2]}</span>
               </label>
               <label class="container">
               <input type="checkbox" value="${shoes.shoesSize[3]}">
               <span class="checkmark">${shoes.shoesSize[3]}</span>
              </label>
             </div>
             <div class="control">
               <button class="shopping-now">SHOP NOW</button>
               <button class="add-to-cart">ADD TO BAG</button>
             </div>
            </div>
             `
         });
         shoesContainer.innerHTML = htmls.join('');
    },
    renderWomen: function(){
        const htmlsWomen = this.listShoesWoman.map(shoesW =>{
            return `
            <div class="shoes__item">
            <div class="shoes-img">
              <img src="/image/${shoesW.shoesImg}" alt="">
            </div>
            <h3 class="shoes-name">${shoesW.shoesName}</h3>
            <p class="shoes-price" >${shoesW.shoesPrice} VND</p>
            <div class="shoes-size">
                <p>Size:</p>
                <label class="container">
                 <input type="checkbox" value="${shoesW.shoesSize[0]}">
                 <span class="checkmark">${shoesW.shoesSize[0]}</span>
                </label>
                <label class="container">
                <input type="checkbox" value="${shoesW.shoesSize[1]}">
                <span class="checkmark">${shoesW.shoesSize[1]}</span>
               </label>
               <label class="container">
               <input type="checkbox" value="${shoesW.shoesSize[2]}">
               <span class="checkmark">${shoesW.shoesSize[2]}</span>
              </label>
              <label class="container">
              <input type="checkbox" value="${shoesW.shoesSize[3]}">
              <span class="checkmark">${shoesW.shoesSize[3]}</span>
             </label>
            </div>
            <div class="control">
              <button class="shopping-now">SHOP NOW</button>
              <button class="add-to-cart">ADD TO BAG</button>
            </div>
           </div>
            `
        });
        shoesContainerWoman.innerHTML= htmlsWomen.join('');
    },
    renderCp: function(){
        const htmlsCp = this.listShoesCp.map(shoesCp =>{
            return `
            <div class="shoes__item">
            <div class="shoes-img">
              <img src="/image/${shoesCp.shoesImg}" alt="">
            </div>
            <h3 class="shoes-name">${shoesCp.shoesName}</h3>
            <p class="shoes-price" >${shoesCp.shoesPrice} VND</p>
            <div class="shoes-size">
                <p>Size:</p>
                <label class="container">
                 <input type="checkbox" value="${shoesCp.shoesSize[0]}">
                 <span class="checkmark">${shoesCp.shoesSize[0]}</span>
                </label>
                <label class="container">
                <input type="checkbox" value="${shoesCp.shoesSize[1]}">
                <span class="checkmark">${shoesCp.shoesSize[1]}</span>
               </label>
               <label class="container">
               <input type="checkbox" value="${shoesCp.shoesSize[2]}">
               <span class="checkmark">${shoesCp.shoesSize[2]}</span>
              </label>
              <label class="container">
              <input type="checkbox" value="${shoesCp.shoesSize[3]}">
              <span class="checkmark">${shoesCp.shoesSize[3]}</span>
             </label>
            </div>
            <div class="control">
              <button class="shopping-now">SHOP NOW</button>
              <button class="add-to-cart">ADD TO BAG</button>
            </div>
           </div>
           `
        });
        shoesContainerCp.innerHTML = htmlsCp.join('');
    },
    start: function(){
        this.render();
    },
    startWomen: function(){
        this.renderWomen();
    },
    startCp :function(){
        this.renderCp();
    }
}
app.start();
app.startWomen();
app.startCp();
/*chuyển listcontainer*/
const btnMen = document.querySelector('.btnMen');
const btnWomen = document.querySelector('.btnWomen');
const btnCp = document.querySelector('.btnCouple');
var indexCon =1;
showCon(indexCon);
function plusCon(n) {
showCon(indexCon += n);
}
function currentCon(n) {
showCon(indexCon = n);
}
function showCon(n) {
var i;
const listContainer = document.querySelectorAll('.list__shoes__container');
if (n > listContainer.length) {indexCon = 1}
if (n < 1) {indexCon = listContainer.length}
for (i = 0; i < listContainer.length; i++) {
listContainer[i].style.display = "none";
}
listContainer[indexCon-1].style.display = "block";
}
btnMen.addEventListener('click',function(){
    currentCon(1);
    sizeChose();
})
btnWomen.addEventListener('click',function(){ 
    currentCon(2);
    sizeChose();
})
btnCp.addEventListener('click',function(){
    currentCon(3);
    sizeChose();
})
//Target vào shoes được chọn
const orderSubmit = document.querySelector('.order__submit');
const orderContainer = document.querySelector('.order__container');
function uploadConvert(){
const btnAdds = document.querySelectorAll('.add-to-cart');
    btnAdds.forEach(function(btnAdd){
    btnAdd.addEventListener('click',function(event){
        var btnItem = event.target;
        var product = btnItem.parentElement.parentElement;
        var productImg = product.querySelector('img').src;
        var productName = product.querySelector('h3').innerText;
        var productPrice = product.querySelector('p').innerText;
        addTocart(productImg,productName,productPrice);
           //animation
        var oImg = document.createElement("img");
        oImg.setAttribute('src', productImg);
        oImg.setAttribute('class', 'shoes-animations');
        product.append(oImg);
        product.querySelector('.shoes-animations').style.position = 'absolute';
        product.querySelector('.shoes-animations').style.top = "10px";
        product.querySelector('.shoes-animations').style.right = "10px";
        setTimeout(function(){
        // var xPX = shoppingBag.offsetTop;
        // var yPX = shoppingBag.offsetLeft;
        // product.querySelector('.shoes-animations').style.position = 'relative';
        // product.querySelector('.shoes-animations').style.top = xPX+'px';
        // product.querySelector('.shoes-animations').style.left = yPX+'px';
        // product.querySelector('.shoes-animations').style.right = '';
        setTimeout(function(){
        product.querySelector('.shoes-animations').remove();
        var numberOrder = itemOrder.length;
        numberCart.innerText = numberOrder;
        if(numberOrder>0){
            orderSubmit.classList.add('js-open-submit');
            }
         },500)
        },500);
        const itemOrder = document.querySelectorAll('.item-order');
        const closeOrder = document.querySelectorAll('.close-order');
        //remove khỏi giỏ hàng
        for(var i=0;i<closeOrder.length;++i){
         closeOrder[i].addEventListener('click',function(event){
           var removeItem = event.target;
           var deleteItem = removeItem.parentElement.parentElement.parentElement;
           deleteItem.remove();
           const itemOrder = document.querySelectorAll('.item-order');
           var numberOrder = itemOrder.length;
           numberCart.innerText = numberOrder;
           if(numberOrder<1){
            orderSubmit.classList.remove('js-open-submit');
           }
       })
     }
    });
})
}
uploadConvert();
//chọn size
const numberCart = document.querySelector('.numberCart');
const shoppingBag = document.querySelector('.shopping-bag');
const checkBoxlist = document.querySelectorAll('.shoes-size input[type="checkbox"]')
const checkMark = document.querySelectorAll('.shoes-size .checkmark');
var productSize = 6;
function sizeChose(){
      for(var i =0; i<checkBoxlist.length;++i){
          checkBoxlist[i].addEventListener('change',function(event){
             checkBool = event.target.checked;
             if(checkBool==true){
               productSize = event.target.value;
               console.log(productSize);
               return productSize; 
             }else if(checkBool==false){
               return productSize = 6;
             }
          })
      }   
};
sizeChose();
//Thêm vào giỏ hàng
function addTocart(productImg,productName,productPrice){
    var addItem = document.createElement("div");
    var orderImg = productImg;
    var orderName = productName;
    var orderPrice = productPrice;
    var tohtml = `
         <div class="item-order">
            <div><img src="${orderImg}" alt=""></div>
            <div>
            <div class="close-order"><ti class="ti-close"></ti></div>
            <h2>${orderName}</h2>
            <p class="price" value="${orderPrice}">Giá: ${orderPrice}</p>
             <p>Size: ${productSize}</p>
            </div>
        </div>
    `;
    addItem.innerHTML=tohtml;
    orderContainer.append(addItem);
    for(var i =0; i<checkBoxlist.length;i++){
        checkBoxlist[i].checked = false;
        productSize = 6;
    }   
}
//remove order
// function removeOrder(){
//   const closeOrder = document.querySelectorAll('.close-order');
//    for(var i=0;i<closeOrder.length;++i){
//        closeOrder[i].addEventListener('click',function(event){
//            var removeItem = event.target;
//            var deleteItem = removeItem.parentElement.parentElement.parentElement;
//            deleteItem.remove();
//            var numberOrder = itemOrder.length;
//            numberCart.innerText = numberOrder;
//        })
//    }
// }
const totalPrice = document.querySelector(".total-price");
const inputPrice = document.querySelectorAll('.price');
//show giỏ hàng
function showBag(){
    shoppingBag.addEventListener('click',function(){
        orderContainer.classList.toggle('js-open');
    })
}
showBag();
//slider
const btnLeft = document.querySelector('.btnLeft');
const btnRight = document.querySelector('.btnRight');
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
showSlides(slideIndex += n);
}
function currentSlide(n) {
showSlides(slideIndex = n);
}
function showSlides(n) {
var i;
var slides = document.getElementsByClassName("slider__img");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slides[slideIndex-1].style.display = "block";
}
btnLeft.addEventListener('click',function(){
    plusSlides(1);
})
btnRight.addEventListener('click',function(){
    plusSlides(-1);
})
//showform-order
const formModel = document.querySelector('.form__model');
const formContainer = document.querySelector('.form-container');
const btnCloseform = document.querySelector('.btnCloseform');
orderSubmit.addEventListener('click',function(){
    formModel.classList.add('js-open-model')
    orderContainer.classList.remove('js-open');
})
btnCloseform.addEventListener('click',function(){
  formModel.classList.remove('js-open-model');
})
formModel.addEventListener('click',function(){
  formModel.classList.remove('js-open-model');
})
formContainer.addEventListener('click',function(event){
    event.stopPropagation();
})
//change ảnh
const btnChangeL = document.querySelector('.btnChangeL');
const btnChangeR = document.querySelector('.btnChangeR');
const bannerItem1 = document.querySelector('.img1');
const bannerItem2 = document.querySelector('.img2');
const bannerItem3 = document.querySelector('.img3');
const listImgbanner = ["/image/hb_img1.png","/image/hb_img2.png", "/image/hb_img3.png",];
var indexBanner = 1;
btnChangeR.addEventListener('click',function(){
    if(indexBanner == 1){
        bannerItem3.src= listImgbanner[1];
        bannerItem2.src=listImgbanner[0];
        bannerItem1.src = listImgbanner[2];
    }else if(indexBanner == 2){
        bannerItem3.src= listImgbanner[0];
        bannerItem2.src=listImgbanner[2];
        bannerItem1.src = listImgbanner[1];
    }else if(indexBanner==3){
        bannerItem3.src= listImgbanner[2];
        bannerItem2.src=listImgbanner[1];
        bannerItem1.src = listImgbanner[0];
    }
    indexBanner++;
    if( indexBanner>3){
        indexBanner=1;
    }
})
btnChangeL.addEventListener('click',function(){
    if(indexBanner == 1){
        bannerItem1.src = listImgbanner[1];
        bannerItem2.src = listImgbanner[2];
        bannerItem3.src = listImgbanner[0];
    }else if(indexBanner == 2){
        bannerItem1.src = listImgbanner[2];
        bannerItem2.src = listImgbanner[0];
        bannerItem3.src = listImgbanner[1];
    }else if(indexBanner==3){
        bannerItem1.src = listImgbanner[0];
        bannerItem2.src = listImgbanner[1];
        bannerItem3.src = listImgbanner[2];
    }
    indexBanner++;
    if( indexBanner>3){
        indexBanner=1;
    }
})
const mobileMenu = document.querySelector('.mobile-menu');
const mainMenu = document.querySelector('#menu');
const mobileBag = document.querySelector('.mobile-bag');
mobileMenu.addEventListener('click',function(){
      mainMenu.classList.toggle('js-open-mobile')
})
mobileBag.addEventListener('click',function(){
    orderContainer.classList.toggle('js-open');
})
