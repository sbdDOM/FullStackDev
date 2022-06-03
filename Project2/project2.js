//Data for grocery List
const grocery = [
    {
        "item": "Milk",
        "category": "Dairy",
        "price": 30,
        "sale": "10%"
    },
    {
        "item": "Beans",
        "category": "Canned",
        "price": 50,
        "sale": null
    },
    {
        "item": "Chocolate",
        "category": "Snack",
        "price": 15,
        "sale": null
    },
    {
        "item": "Bread",
        "category": "Bakery",
        "price": 20,
        "sale": null
    },
    {
        "item": "Chicken",
        "category": "Poultry",
        "price": 60,
        "sale": "15%"
    },
    {
        "item": "Yoghurt",
        "category": "Dairy",
        "price": 30,
        "sale": "20%"
    },
    {
        "item": "Onions",
        "category": "Produce",
        "price": 35,
        "sale": null
    },
    {
        "item": "Cheese",
        "category": "Dairy",
        "price": 110,
        "sale": "40%"
    },
    {
        "item": "Simba",
        "category": "Snacks",
        "price": 100,
        "sale": "25%"
    }
];

//Variables
var btnItem = document.getElementById('getItem');
// var btnCategory = document.getElementById('getCategory');
// var btnPrice = document.getElementById('getPrice');
// var btnSale = document.getElementById('getSale');

//Button onclick function
btnItem.addEventListener('click', addItem);
// btnCategory.addEventListener('click', addCategory);
// btnPrice.addEventListener('click', addPrice);
// btnSale.addEventListener('click', addSale);

//Variables for where to display on website
var groceryList = document.getElementById('groceryList');
var groceryType = document.getElementById('groceryCategory');
var groceryCost = document.getElementById('groceryPrice');
var groceryDiscount = document.getElementById('grocerySale');
var priceSorted = document.getElementById('sortedPrice');
var priceTotal = document.getElementById('totalPrice');

function addItem(e){
    e.preventDefault();
 
    //Map out Sales per item, then displays.
    const groceryItem = grocery.map(grocery => grocery.item);
    groceryItem.forEach(function(groceryItem){
        var li = document.createElement('li');
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(groceryItem));
        groceryList.appendChild(li);
    });
    //Map out Category per item, then displays.
    const groceryCategory = grocery.map(grocery => grocery.category);
    groceryCategory.forEach(function(groceryCategory){
        var li = document.createElement('li');
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(groceryCategory));
        groceryType.appendChild(li);
    });
    //Map out Price per item, then displays.
    const groceryPrice = grocery.map(grocery => grocery.price);
    groceryPrice.forEach(function(groceryPrice){
        var li = document.createElement('li');
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(groceryPrice));
        groceryCost.appendChild(li);
    });  
     //Map out Sales per item, then displays.
     const grocerySale = grocery.map(grocery => grocery.sale);
     grocerySale.forEach(function(grocerySale){
         var li = document.createElement('li');
         li.className = 'list-group-item';
         li.appendChild(document.createTextNode(grocerySale));
         groceryDiscount.appendChild(li);
     });  

     //Sort out the prices per item in acsending order
     const sortedPrice = groceryPrice
     .sort((a, b) => (a < b ? 1: -1));
     console.log(sortedPrice);
     
     //Total Price
    const priceSum = groceryPrice.reduce((total, groceryPrice) => total + groceryPrice, 0);
    console.log(priceSum);

     //Filter highest price
     console.log(sortedPrice[0]);

     //Calculate cost after sale
     grocerySale.forEach(function(groceryz){
         if(groceryz === 'null'){
            return 0;
         }
         console.log(groceryz);
     });
     
    
}




    
