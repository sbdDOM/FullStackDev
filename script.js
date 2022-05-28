var newDiv = document.createElement('div');
var newDivText =  document.createTextNode('Hello World');
var h1 = document.querySelector('header h1');
var main = document.querySelector('header .main');


newDiv.appendChild(newDivText);
newDiv.className = ('Hello');
newDiv.setAttribute = ('title', 'Hello Div');

main.insertBefore(newDiv, h1);
console.log(newDiv);

