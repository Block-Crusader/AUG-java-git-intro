// Adding a selection of form by selecting it with "addForm" id
let form = document.getElementById('addForm');
/* Adding the selection of ul "items" items (with querySelector
equivalent for fun this time) */
let itemList = document.querySelector('#items');

// Form submit event listener, linked to a function called addItem
form.addEventListener('submit', addItem);
/* itemList AKA the #items are "listening" for a delete event
that's signaled by a mouse click. Upon hearing the signal, it will
initiate the "delItem" method that's linked the the event */
itemList.addEventListener('click', delItem);

/* An "addItem" function that, well, adds an item,
keep in mind we have to prevent the default behavior
of addItem (form) because otherwise, the button will
disregard input into the console*/
function addItem(event){
    event.preventDefault();
    
    // Getting the user input value for the to-do list text input
    let newItem = document.getElementById("item").value;

    /* Adding the user's input value as a new <li> element for the
    item list below */
    let userLi = document.createElement('li');
    // Adding class name to the user's inputted list item
    userLi.className = 'list-group-item';
    console.log(userLi);
    // Appending the user's text that comes from the form
    userLi.appendChild(document.createTextNode(newItem));


    // Creating a "delete" button element
    let buttonDelete = document.createElement("button");

    // Add Bootstrap CDN decor classes to the button
    buttonDelete.className = "btn btn-danger btn-sm float-right delete";
    // Append the text node to the delete button (ie the functional decor) on the side
    buttonDelete.appendChild(document.createTextNode('X'));

    // Append the delete button to the user's list item
    userLi.appendChild(buttonDelete);


    /* Here we're appending ("passing") the user input's <li> element
    and selecting the item list (itemList AKA a <ul>) as it's destination,
    as a child of itemList. This will make the input appear as an <li> on 
    the visible webpage. */
    itemList.appendChild(userLi);
}

// function that executes a deletes a list item in an event
function delItem(event) {
    /*checking to see if the event object (element)targeted triggered has the class
    of "delete" */
    if (event.target.classList.contains("delete")) {
        // We're going to ask the user if they want to delete the selected list item
        if(confirm("Are You Sure?")) {
            // Here we're targeting the parent element of the li for the event
            let li = event.target.parentElement;
            /* then we're removing the child (li) from the targeted parent element
            (ul AKA "itemList") */
            itemList.removeChild(li);
        }
    }
    
}