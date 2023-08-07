let openshopping = document.querySelector('.shopping');
let closeshopping = document.querySelector('.closeshopping');
let body = document.querySelector('body');
let list = document.querySelector('.list');
let listcard = document.querySelector('.listcard');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openshopping.addEventListener('click', () => {
    body.classList.add('active');
});

closeshopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = [
    { id:1,
        productName: "organic strawberries",
        category: "Frozen-Foods",
        price: "2.00",
        image: "1.png",
        buyLink: "./product.html",
       
      },
      {   id:2,
        productName: "onions",
        category: "Frozen-Foods",
        price: "2.00",
        image: "2.png",
        buyLink: "./product.html",
      },
      {   id:3,
        productName: "Tomatoes",
        category: "Frozen-Foods",
        price: "3.00",
        image: "3.png",
        buyLink: "./product.html",
      },
      {   id:4,
        productName: " nuts and dried fruit",
        category: "dry-food",
        price: "29",
        image: "7.png",
        buyLink: "./product.html",
      },
      {   id:5,
        productName: " BMC Momo Masala ",
        category: "Masala-Spices",
        price: "40",
        image: "13.png",
        buyLink: "./product.html",
      },
      {  id:6,
        productName: "Potatoes",
        category: "Frozen-Foods",
        price: "3.00",
        image: "6.png",
        buyLink: "./product.html",
      },

      {  id:7,
        productName: "Mix dry-fruits",
        category: "dry-food",
        price: "129",
        image: "8.png",
        buyLink: "./product.html",
      },
      { id:8,
        productName: "Broccoli",
        category: "Frozen-Foods",
        price: "2.00",
        image: "5.png",
        buyLink: "./product.html",
       
      },
      {  id:7,
        productName: "Dry Dates Black",
        category: "dry-food",
        price: "129",
        image: "15.png",
        buyLink: "./product.html",
      },
      {  id:9,
        productName: "cheese",
        category: "Dairy-product",
        price: "89",
        image: "9.png",
        buyLink: "./product.html",
      },
      {  id:7,
        productName: "Sutho (Dry Ginger)",
        category: "dry-food",
        price: "129",
        image: "16.png",
        buyLink: "./product.html",
      },
      
      
      {  id:10,
        productName: "BMC Meat Masala",
        category: "Masala-Spices",
        price: "89",
        image: "12.png",
        buyLink: "./product.html",
      },
      {  id:11,
        productName: "Milk",
        category: "Dairy-product",
        price: "189",
        image: "10.png",
        buyLink: "./product.html",
      },
      {  id:7,
        productName: "Everest Dry Mango Powder",
        category: "dry-food",
        price: "129",
        image: "17.png",
        buyLink: "./product.html",
      },
      {  id:13,
        productName: "Cream",
        category: "Dairy-product",
        price: "49",
        image: "11.png",
        buyLink: "./product.html",
      },
      {  id:14,
        productName: "Brinjal",
        category: "Frozen-Foods",
        price: "3.00",
        image: "4.png",
        buyLink: "./product.html",
      },
      {  id:7,
        productName: "Choice Dry Coconut Powder",
        category: "dry-food",
        price: "129",
        image: "18.png",
        buyLink: "./product.html",
      },
      {  id:15,
        productName: "BMC Curry Masala",
        category: "Masala-Spices",
        price: "3.00",
        image: "14.png",
        buyLink: "./product.html",
      }
];   


let listCards = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="photo/${value.image}"/>
            <div class="title">${value.productName}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>
            <button onclick="viewDetail(${value.id})">View Detail</button>
        `;
        list.appendChild(newDiv);
    });
}


initApp();

function addToCart(key) {
    if (listCards[key] == null) {
        listCards[key] = { ...products[key], quantity: 1 };
    } else {
        listCards[key].quantity++;
    }
    reloadCard();
}

function reloadCard() {
    listcard.innerHTML = '';
    let count = 0;
    let totalprice = 0;
    listCards.forEach((value, key) => {
        if (value !== null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="photo/${value.image}"></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>${value.quantity}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;
            listcard.appendChild(newDiv);
            totalprice += value.price * value.quantity;
            count += value.quantity;
        }
    });
    total.innerText = totalprice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, newQuantity) {
    if (newQuantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = newQuantity;
    }
    reloadCard();
}
function viewDetail(productId) {
    window.location.href = `productdetails.html?id=${productId}`;
}
