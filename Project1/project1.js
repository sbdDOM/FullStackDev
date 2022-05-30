//__________Variables
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//_________Event Listeners
//Form submit event
form.addEventListener('submit', addItem);
//delete event 
itemList.addEventListener('click', removeItem);
//Filter 
filter.addEventListener('keyup', filterItems);

//___________Add Item
function addItem(e){
    e.preventDefault();

    //Get input value 
    var newItem = document.getElementById('item').value;

    //Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create delete button element 
    var deleteBtn =  document.createElement('button');
    //add classes to delete button 
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //append text node 
    deleteBtn.appendChild(document.createTextNode('X'));
    //append button to li 
    li.appendChild(deleteBtn);
    //append li to list
    itemList.appendChild(li);
}
//_________Remove Items
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
//__________Filter Items
function filterItems(e){
    //convert to Lower Case
    var text = e.target.value.toLowerCase();
    //Get li
    var items = itemList.getElementsByTagName('li');
    //Convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else {
            item.style.display = 'none';
        }
    });
}