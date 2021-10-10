// // EXAMINE THE DOCUMENT OBJECT //

// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);


// // Selecting elements by type

// // console.log(document.all);                 both deprecated
// // console.log(document.all[10]);
// console.log(document.querySelectorAll('h1')); //new equivalent


// // setting the HTML text inside a node

// // document.all[10].textContent = 'Hello';      deprecated
// let changedTitle = document.querySelector('h1');
// changedTitle.innerHTML = "Changed Title text"; 
// console.log(changedTitle);                   //new equivalent


// console.log(document.forms)
// console.log(document.links)



// (Selectors) //
// GETELEMENTBYID //

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// headerTitle.style.borderBottom = 'solid 3px #000';



// GETELEMENTSBYCLASSNAME //

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// //gives error
// // items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }



// //  GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // gives error
// // items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }



// QUERYSELECTOR //
// var header = document.querySelector('#header-title');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';



// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = "hello";

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }


// TRAVERSING THE DOM //
// var itemList = document.querySelector("#items");
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// //firstChild
// console.log(itemList.firstChild);
// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// firstChild
// console.log(itemList.firstChild);
// firstElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// // nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementmentSibling);

// previousSibling
// console.log(itemList.previousSibling);
//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';


// createElement

// // Create a div
// var newDiv = document.createElement('div');

// //add class
// newDiv.className = "Hello";

// // add id
// newDiv.id = "Hello-1"

// // add attr(ibute)
// newDiv.setAttribute('title', 'Hello-Div');

// // create text mode
// var newDivText = document.createTextNode('Hello World');

// // Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector(".header-vis");
// var h1 = document.querySelector('div h1')

// console.log(newDiv);

// newDiv.style.fontSize = "30px";

// container.insertBefore(newDiv, h1);


// EVENTS //

// let button = document.getElementById('button').addEventListener
// ('click', function(){
//     console.log(123);
// });

// let button = document.getElementById('button').addEventListener
// ('click', buttonClick);

// function buttonClick(event){
    // console.log('Button clicked!')
    // document.getElementById('header-title').textContent = 'changed';
    // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
    // console.log(event);

    // console.log(event.target);
    // console.log(event.target.id);
    // console.log(event.target.className);
    // console.log(event.target.classList);
    // let output = document.getElementById('output');
    // output.innerHTML = '<h3>' + event.target.id + '</h3>';

    // console.log(event.type);


    // "client" is from the browser (window), and "offset" is from the
    // element itself

    // console.log(event.clientX);
    // console.log(event.clientY);

    // console.log(event.offsetX);
    // console.log(event.offsetY);

    // console.log(event.altKey);
    // console.log(event.ctrlKey);
    // console.log(event.shiftKey);
// }

// let button = document.getElementById('button');
// let box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');
let select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(event){
    event.preventDefault();
    console.log("EVENT TYPE: " + event.type);

    // console.log(event.target.value);
    // document.getElementById('output').innerHTML = '<h3>' +
    // event.target.value + '</h3>';

    // output.innerHTML = '<h3>MouseX: ' + event.offsetX +
    // ' </h3><h3>MouseY: ' + event.offsetY + '</h3>';
    
    // document.body.style.backgroundColor = "rgb(" + event.offsetX + "," +
    // event.offsetY + ",40)";
}