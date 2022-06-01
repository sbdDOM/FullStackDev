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
        "sale": "25%"
    },
    {
        "item": "Simba",
        "category": "Snacks",
        "price": 100,
        "sale": "25%"
    }
];

var btnAll = document.getElementById('getAll');
var btnItem = document.getElementById('getItem');
var btnCategory = document.getElementById('getCategory');
var btnPrice = document.getElementById('getPrice');
var btnSale = document.getElementById('getSale');

btnAll.addEventListener('click', addAll);
btnItem.addEventListener('click', addItem);
btnCategory.addEventListener('click', addCategory);
btnPrice.addEventListener('click', addPrice);
btnSale.addEventListener('click', addSale);

var grocerySummary = document.getElementById('groceryAll');
var groceryList = document.getElementById('groceryList');
var groceryType = document.getElementById('groceryCategory');
var groceryCost = document.getElementById('groceryPrice');
var groceryDiscount = document.getElementById('grocerySale');


function addAll(e){
    e.preventDefault();

    grocery.forEach(function(groceries){
        //Create new li element
        var li = document.createElement('li');
        // Add class
        li.className = 'list-group-item';
        //Add text node with input value
        li.appendChild(document.createTextNode(groceries));
        //append li to list
        grocerySummary.appendChild(li);
    });
    
}
function addItem(e){
    e.preventDefault();

    //Get input value 
    const groceryItem = grocery.map(grocery => grocery.item);
    //Loop to display all values in array
    groceryItem.forEach(function(groceryItem){
        //Create new li element
        var li = document.createElement('li');
        // Add class
        li.className = 'list-group-item';
        //Add text node with input value
        li.appendChild(document.createTextNode(groceryItem));
        //append li to list
        groceryList.appendChild(li);
    });
    
}
function addCategory(e){
    e.preventDefault();

    //Get input value 
    const groceryCategory = grocery.map(grocery => grocery.category);
    //Loop to display all values in array
    groceryCategory.forEach(function(groceryCategory){
        //Create new li element
        var li = document.createElement('li');
        // Add class
        li.className = 'list-group-item';
        //Add text node with input value
        li.appendChild(document.createTextNode(groceryCategory));
        //append li to list
        groceryType.appendChild(li);
    });
    
}
function addPrice(e){
    e.preventDefault();

    //Get input value 
    const groceryPrice = grocery.map(grocery => grocery.price);
    //Loop to display all values in array
    groceryPrice.forEach(function(groceryPrice){
        //Create new li element
        var li = document.createElement('li');
        // Add class
        li.className = 'list-group-item';
        //Add text node with input value
        li.appendChild(document.createTextNode(groceryPrice));
        //append li to list
        groceryCost.appendChild(li);
    });  
}
function addSale(e){
    e.preventDefault();

    //Get input value 
    const grocerySale = grocery.map(grocery => grocery.sale);
    //Loop to display all values in array
    grocerySale.forEach(function(grocerySale){
        //Create new li element
        var li = document.createElement('li');
        // Add class
        li.className = 'list-group-item';
        //Add text node with input value
        li.appendChild(document.createTextNode(grocerySale));
        //append li to list
        groceryDiscount.appendChild(li);
    });  
}



    
