//_________________Async Callback 

// const posts = [
//     {title: 'Post one', body: 'This is post one'},
//     {title: 'Post two', body: 'This is post two'},
// ];

// function getPost(){
//     setTimeout(() =>{
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }
// function createPost(post, callback){
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000);
// }

// createPost({title: 'Post three', body: 'This is post three'}, getPost);


//_______________Promises

// const posts = [
//     {title: 'Post one', body: 'This is post one'},
//     {title: 'Post two', body: 'This is post two'},
// ];

// function getPost(){
//     setTimeout(() =>{
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }
// function createPost(post){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             posts.push(post);

//             const error = true;

//             if(!error){
//                 resolve();
//             }else{
//                 reject('Error something went wrong!!');
//             }


//         }, 2000);
//     }); 
// }

// //createPost({title: 'Post three', body: 'This is post three'}).then(getPost).catch(err => console.log(err));


// //Async 
// async function init() {
//     await createPost({title: 'Post three', body: 'This is post three'});
//     getPost();
// }
//  init();

// //const promise1 = Promise.resolve('Hello World');
// //const promise2 = 10;
// //const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));

// //Promise.all([promise1, promise2, promise3]).then(values => console.log(values));







// var newDiv = document.createElement('div');
// var newDivText =  document.createTextNode('Hello World');
// var h1 = document.querySelector('header h1');
// var main = document.querySelector('header .main');


// newDiv.appendChild(newDivText);
// newDiv.className = ('Hello');
// newDiv.setAttribute = ('title', 'Hello Div');

// main.insertBefore(newDiv, h1);
// console.log(newDiv);

//_________________Events________________

// var btn =  document.getElementById('buttOn').addEventListener('click', buttonClick);

// function buttonClick(e){
//     //console.log(e.target.id);
//     var check = e.target.id;
//     if(check == 'button'){
//         console.log('Hello World')
//     }else {
//         alert(check);
//     }
// }
//_____________Run event and using diff types of inputs e.g. 'Click', mouseover
// var box = document.getElementById('Output');
// box.addEventListener('mouseover', runEvent);
// button.addEventListener('moveover', runEvent);
// function runEvent(e){   
//     Output.innerHTML = '<h3>MouseX: ' + e.offsetX + '</h3><br><h3>MouseY: ' + e.offsetY + '</h3>';
// }

// var input = document.querySelector('input[type="text"]');
//  var form = document.querySelector('form');
// input.addEventListener('input', runEvent);

// var select = document.querySelector('select');
// select.addEventListener('change', runEvent);

// form.addEventListener('submit', runEvent);

// keyup/down/press 

// function runEvent(e){
//     e.preventDefault();
//     console.log('Event type: ' + e.type);
    

    // console.log(e.target.value);
     // document.getElementById('Output').innerHTML = '<h3>' + e.target.value + '</h3>';
// }

//_____________Arrays: forEach, filter, map, sort and reduce.______________
const companies = [
    {
        "name": "Company One",
        "category": "Finance",
        "start": 1981,
        "end": 2003
    },
    {
        "name": "Company Two",
        "category": "Retail",
        "start": 1992,
        "end": 2008
    },
    {
        "name": "Company Three",
        "category": "Auto",
        "start": 1999,
        "end": 2007
    },
    {
        "name": "Company Four",
        "category": "Retail",
        "start": 1989,
        "end": 2010
    },
    {
        "name": "Company Five",
        "category": "Technology",
        "start": 2009,
        "end": 2014
    },
    {
        "name": "Company Six",
        "category": "Finance",
        "start": 1987,
        "end": 2010
    },
    {
        "name": "Company Seven",
        "category": "Auto",
        "start": 1986,
        "end": 1996
    },
    {
        "name": "Company Eight",
        "category": "Technology",
        "start": 2011,
        "end": 2016
    },
    {
        "name": "Company Nine",
        "category": "Retail",
        "start": 1981,
        "end": 1989
    }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//---------
//          These are better ways to write code.... basically.
//---------
//_________ForEach__________
//----for loop----
// for(let i=0; i<companies.length; i++){
//     console.log(companies[i]);
// }
// ---forEach--- 
// companies.forEach(function(company){
//     console.log(company);
// });

//__________Filter____________
//----for loop----
// let canDrink = [];
// for(let i=0; i<ages.length; i++){
//     if(ages[i] >= 21){
//         canDrink.push(ages[i]);
//     }
// }
//----filter----
// const canDrink = ages.filter(function(age){
//     if(age >= 21){
//         return true;
//     }
// });
//----filter arrow functions----
//const canDrink = ages.filter(age => age >= 21);
//----filter next example----
// const retailCompanies = companies.filter(function(company){
//     if(company.category === 'Retail'){
//         return true;
//     }
// });
//----filter arrow functions next example----
// const retailCompanies = companies.filter(company => (company.end - company.start >=10));
// console.log(retailCompanies);

//____________Map__________________
//----Create array of company names---- 
// const companyName = companies.map(function(company){
//     return company.category;
// });
//----Get company name with its end and start date----
// const companyName = companies.map(function(company){
//     return `${company.name} [${company.start} - ${company.end}]`;
// });
//----Using arrow function in mapping----
// const companyName = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
//----Using arrow function with multiple .map functions----
// const agesFunction = ages
//     .map(age => Math.sqrt(age))
//     .map(age => age * 2);

//___________Sort________________
//----Sorting companies ascending order----
// const sortedCompanies = companies.sort(function(c1, c2){
//     if(c1.start > c2.start){
//         return 1;
//     }else{
//         return -1;
//     }
// });
//----We using turnary operator(?).{else is defined as(:)} to return 1 or -1----
//----also a shorter way to express the above function----
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1))
//----sorting ages----
// const sortAges = ages.sort((a, b) => a - b);
// console.log(sortAges);

//__________Reduce________________
//----for loop to add ages----
// let ageSum = 0;
// for(let i=0; i<ages.length; i++){
//     ageSum += ages[i];
// }
//----using reduce----
// const ageSum =  ages.reduce(function(total, age){
//     return total + age;
// }, 0);
//----using reduce arrow function----
// const ageSum = ages.reduce((total, age) => total + age, 0);
//----get total years for all companies----
// const companyYears = companies.reduce(function(total, company){
//     return total + (company.end - company.start);
// }, 0);
//----get total years for all companies using arrow function----
// const companyYears = companies.reduce((total, company) => total + (company.end - company.start), 0)
// console.log(companyYears);

//___________Combine Methods____________
// const combine = ages
//     .map(age => age*2)
//     .filter(age => age >= 40)
//     .sort((a, b) => a - b)
//     .reduce((a, b) => a + b, 0);

// console.log(combine);


//--------------------
//                      OOP in JS
//--------------------

//________Object literal_________
// const book1 = {
//     title: 'Book one',
//     author: 'John Doe',
//     year: '2013',
//     getSummary: function (){
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
// };
// const book2 = {
//     title: 'Book two',
//     author: 'John Doe',
//     year: '2016',
//     getSummary: function (){
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
// };
//----get headings of each object----
// console.log(Object.keys(book2));
//----get value of each object----
// console.log(Object.values(book2));

//________________Constructors_________________
//----Constructor----
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;

//     this.getSummary = function(){
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
// }

// const book1 = new Book('Book one', 'John doe', '2013');
// const book2 = new Book('Book two', 'John dope', '2017');

// console.log(book2);

//______________Prototypes__________________
//----Constructor----
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }

//----getSummary---- 
//----Because we dont want getsummaru in object thats why we use prototype----
// Book.prototype.getSummary = function(){
//     return `${this.title} was written by ${this.author} in ${this.year}`;
// }
// Book.prototype.getAge = function(){
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is years ${years} old`;
// }
//----Revise---- 
// Book.prototype.revise = function(newYear){
//     this.year = newYear;
//     this.revised = true;
// }

// const book1 = new Book('Book one', 'John doe', '2013');
// const book2 = new Book('Book two', 'John dope', '2017');

// console.log(book2);
// book2.revise('2018');
// console.log(book2);

//_____________Inheritance______________
//----Constructor----
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }
//----getSummary---- 
//----Because we dont want getsummaru in object thats why we use prototype----
// Book.prototype.getSummary = function(){
//     return `${this.title} was written by ${this.author} in ${this.year}`;
// }
//----Magazine Constructor
// function Magazine(title, author, year, month){
//     Book.call(this, title, author, year);
//     this.month = month;
// }
//----Inherit Prototype----
// Magazine.prototype = Object.create(Book.prototype);
//----Instantiate magazine object----
// const mag1 = new Magazine('mag one', 'Jone odpe', '2009', 'Jun');
//----Use Magazine constructor----
// Magazine.prototype.constructor = Magazine;
// console.log(mag1);

//____________Object Create______________
//----Object of Protos----
// const bookProtos = {
//     getSummary: function(){
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     },
//     getAge: function(){
//         return `${this.title} is years ${years} old`;
//     }
// }
//----Create Object----
// const book1 = Object.create(bookProtos);
// book1.title = 'Book One';
// book1.author = 'Jone Joop';
// book1.year = '2020';
//----OR you can create and object like this----
// const book1 = Object.create(bookProtos, {
//     title: {value: 'Book One'}, 
//     author: {value: 'Jope Jone'},
//     year: {value: '2020'}
// });
//console.log(book1);
//----Done with ES5----
//----Start with ES6----
//______________________Classes______________
// class Book{
//     constructor(title, author, year){
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }

//     getSummary(){
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
//     getAge(){
//         return `${this.title} is years ${years} old`;
//     }

//     revise(newYear){
//         this.year = newYear;
//         this.revised = true;
//     }
//     static topBookStore(){
//         return 'Barnes & Nobles';
//     }
// }
//----Instantiate an object----
//const book1 = new Book('Book one', 'Jone oop', '9009');

// console.log(book1);
// book1.revise('2090');
// console.log(book1);

//console.log(Book.topBookStore());

//_____________Sub Classes___________
// class Book{
//     constructor(title, author, year){
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }

//     getSummary(){
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
// }

//Magazine sub class
// class Magazine extends Book{
//     constructor(title, author, year, month){
//         super(title, author, year);
//         this.month = month;
//     }
// }

//----Instantiate Magazine----
// const mag1 = new Magazine('Mag One', 'Jope jon', '2900', 'Jap');
// console.log(mag1.getSummary());

//_______________AJAX_____________
//Check under folder local disk/xampp/htdocs/AJAX_Crash