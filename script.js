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

var button =  document.getElementById('buttOn');
button.addEventListener('moveover', runEvent);

function runEvent(e){
    console.log('Event Type: ' + e.type);
    
    Output.innerHTML = '<h3>MouseX: ' + e.offsetX + '</h3>';
}