let q = document.querySelector.bind(document)
let qa = document.querySelectorAll.bind(document)

/** Get the header element
    Get all the section elements
    
    Get the section element with class="current"
    
    Get the section that comes after the current section
    
    Get the h2 node from the section before the 'current' section
    
    Get the div that contains the section that has an h2 with a class of 'highlight'
    
    Get all the sections that contain an H2 (using a single statement);
*/ 

//get header element
let first = q("header");


// gets all section elements
let second = qa('section')

// gets the section elements with the class "current"
let three = q('section.current')
// document.getElementsByClassName('current')


// gets the section that comes after the current section
let four = q('section.current').nextElementsSibling

// Get the h2 node from the section before the 'current' section
let five = q('section.current').previousElementsSibling.children[0];

// Get the div that contains the section that has an h2 with a class of 'highlight'
let six = q('h2.highlight').parentElement.parentElement

// Get all the sections that contain an H2 (using a single statement);
let seven = Array.from(qa('section h2')).map(function(el){
    return el.parentElement
})

console.log(seven)