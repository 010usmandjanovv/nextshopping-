"use strict"

const API = "https://65c7cfb0e7c384aada6efcb0.mockapi.io/elements/products"
const elTopSeiledList = document.getElementById('top-seiled-list')

fetch(API)
    .then((res) => res.json())
    .then((data) => topSeiledData(data))
    
function topSeiledData(data) {
    data.slice(0, 10).forEach((item) => {
        const elTopSeiledListItem = document.createElement("li")

        elTopSeiledListItem.innerHTML = `
            <div class="list-item">
                <img class="item-img" src="${item.product_img}" alt="" width="180" height="180">
                <h4 class="item-price">${item.product_price} so'm</h4>
                <p class="item-product-name">${item.product_name}</p>
                <p class="item-order"></p>
                <div class="btns-wrap">
                    <button class="buy-btn"></button> 
                    <button class="shopping-cart-btn"></button>
                </div>
            </div>
        `


        elTopSeiledList.append(elTopSeiledListItem)
    })
}