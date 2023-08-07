let products = {
    data: [
      { id:1,
        name: "organic strawberries",
        category: "Frozen-Foods",
        price: "2.00",
        image: "photo/1.png",
        buyLink: "./product.html",
       
      },
      {   id:2,
        productName: "onions",
        category: "Frozen-Foods",
        price: "2.00",
        image: "photo/2.png",
        buyLink: "./product.html",
      },
      {   id:3,
        productName: "Tomatoes",
        category: "Frozen-Foods",
        price: "3.00",
        image: "photo/3.png",
        buyLink: "./product.html",
      },
      {   id:4,
        productName: " nuts and dried fruit",
        category: "dry-food",
        price: "29",
        image: "photo/7.png",
        buyLink: "./product.html",
      },
      {   id:5,
        productName: " BMC Momo Masala ",
        category: "Masala-Spices",
        price: "40",
        image: "photo/13.png",
        buyLink: "./product.html",
      },
      {  id:6,
        productName: "Potatoes",
        category: "Frozen-Foods",
        price: "3.00",
        image: "photo/6.png",
        buyLink: "./product.html",
      },

      {  id:7,
        productName: "Mix dry-fruits",
        category: "dry-food",
        price: "129",
        image: "photo/8.png",
        buyLink: "./product.html",
      },
      { id:8,
        productName: "Broccoli",
        category: "Frozen-Foods",
        price: "2.00",
        image: "photo/5.png",
        buyLink: "./product.html",
       
      },
      {  id:7,
        productName: "Dry Dates Black",
        category: "dry-food",
        price: "129",
        image: "photo/15.png",
        buyLink: "./product.html",
      },
      {  id:9,
        productName: "cheese",
        category: "Dairy-product",
        price: "89",
        image: "photo/9.png",
        buyLink: "./product.html",
      },
      {  id:7,
        productName: "Sutho (Dry Ginger)",
        category: "dry-food",
        price: "129",
        image: "photo/16.png",
        buyLink: "./product.html",
      },
      
      
      {  id:10,
        productName: "BMC Meat Masala",
        category: "Masala-Spices",
        price: "89",
        image: "photo/12.png",
        buyLink: "./product.html",
      },
      {  id:11,
        productName: "Milk",
        category: "Dairy-product",
        price: "189",
        image: "photo/10.png",
        buyLink: "./product.html",
      },
      {  id:7,
        productName: "Everest Dry Mango Powder",
        category: "dry-food",
        price: "129",
        image: "photo/17.png",
        buyLink: "./product.html",
      },
      {  id:13,
        productName: "Cream",
        category: "Dairy-product",
        price: "49",
        image: "photo/11.png",
        buyLink: "./product.html",
      },
      {  id:14,
        productName: "Brinjal",
        category: "Frozen-Foods",
        price: "3.00",
        image: "photo/4.png",
        buyLink: "./product.html",
      },
      {  id:7,
        productName: "Choice Dry Coconut Powder",
        category: "dry-food",
        price: "129",
        image: "photo/18.png",
        buyLink: "./product.html",
      },
      {  id:15,
        productName: "BMC Curry Masala",
        category: "Masala-Spices",
        price: "3.00",
        image: "photo/14.png",
        buyLink: "./product.html",
      },
    ],
  };
  for (let i of products.data) {
    
    let cardd = document.createElement("div");
    
    cardd.classList.add("cardd", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    cardd.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);

  let buyButton = document.createElement("button");
  buyButton.classList.add("buy-button");
  buyButton.innerText = "Buy Now";
  container.appendChild(buyButton);
  
    cardd.appendChild(container);
    document.getElementById("products").appendChild(cardd);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".cardd");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  document.getElementById("search").addEventListener("click", () => {
   
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".cardd");
  
    
    elements.forEach((element, index) => {
      
      if (element.innerText.includes(searchInput.toUpperCase())) {
      
        cards[index].classList.remove("hide");
      } else {
        
        cards[index].classList.add("hide");
      }
    });
  });
  
  window.onload = () => {
    filterProduct("all");
  };

let buyButtons = document.querySelectorAll(".buy-button");
buyButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    let selectedProduct = products.data[index];
    window.location.href = selectedProduct.buyLink;
  });
});

