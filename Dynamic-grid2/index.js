console.log("script loaded!!")

var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
      1,
      1,
      0,
      1,
      0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
  }


//   <div id="left-section">
//     <img src="" alt="">
//   </div>
var mainSec = document.getElementById('main-container')
var leftSec = document.createElement('div')
leftSec.id = "left-section"

var previewImg = document.createElement('img')
previewImg.className="preview"
previewImg.src = productData.preview

leftSec.appendChild(previewImg)
mainSec.appendChild(leftSec)

{/* <div id="right-section">
    <h1></h1>
    <h4></h4>
    <h3>Price: Rs <span></span></h3>
    <h3></h3>
    <p></p>
    <div id="product-view">
        <h3></h3>
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt=""> 
    </div> 
  <button id="add-to-cart">Add to Cart</button>*/}

  

var rightSec = document.createElement('div')
rightSec.id = "right-section"


var productName = document.createElement('h1')
productName.id = "product-name"
productName.innerHTML = productData.name
rightSec.appendChild(productName)

var productBrand = document.createElement('h4')
productBrand.id = "product-brand"
productBrand.innerHTML = productData.brand
rightSec.appendChild(productBrand)

var productPrice = document.createElement('h3')
productPrice.id = "product-price"
productPrice.innerText = "Price: Rs "
rightSec.appendChild(productPrice)

var productRate = document.createElement('span')
productRate.id = "rate"
productRate.innerHTML = productData.price
productPrice.appendChild(productRate)

var description = document.createElement('h3')
description.innerText = "Description"
rightSec.appendChild(description)

var para = document.createElement('p')
para.innerText = productData.description
rightSec.appendChild(para)

var productView = document.createElement('div')
rightSec.appendChild(productView)

var productViewTitle = document.createElement('h3')
productViewTitle.innerText = "Product Preview"
productView.appendChild(productViewTitle)

var productImages = document.createElement('div')
productImages.id = "product-images"
productView.appendChild(productImages)

mainSec.appendChild(rightSec)

for(var n=0;n<5;n++){
 
  var img = document.createElement('img')
  img.className = "images"
  img.src = productData.photos[n]
  
  
  
  productImages.appendChild(img)
  
  
  
     
}
var p = document.getElementsByClassName('images')
p[0].addEventListener("click",function(){
  previewImg.src = p[0].src
})

p[1].addEventListener("click",function(){
     previewImg.src = p[1].src
   })
p[2].addEventListener("click",function(){
     previewImg.src = p[2].src
  })

p[3].addEventListener("click",function(){
    previewImg.src = p[3].src
  })

p[4].addEventListener("click",function(){
    previewImg.src = p[4].src
  })

  var bttn = document.createElement('button')
  bttn.innerText="Add to cart"
  bttn.id= "add-to-cart"
  rightSec.appendChild(bttn)
















