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
 var form = document.querySelector('form');
// input.addEventListener('input', runEvent);

// var select = document.querySelector('select');
// select.addEventListener('change', runEvent);

form.addEventListener('submit', runEvent);

// keyup/down/press 

function runEvent(e){
    e.preventDefault();
    console.log('Event type: ' + e.type);
    

    // console.log(e.target.value);
    // document.getElementById('Output').innerHTML = '<h3>' + e.target.value + '</h3>';
}

