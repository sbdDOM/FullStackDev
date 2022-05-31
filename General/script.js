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
