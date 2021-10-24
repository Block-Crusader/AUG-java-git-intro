// //grabbing a single node from our username
// let el = document.getElementById('username')
// let inputs = document.getElementsByTagName('input')
// let inError = document.getElementByClassName('error')


// console.log(inputs.length)
// console.log(inError.length)


// let firstButton = document.querySelector('button')
// let inError = document.querySelectorAll('input.error')


// console.log(firstButton)
// console.log(inError)


// let links = document.querySelectorAll('a')
// let arrayOfLinks = Array.from(links)

// let linkCount = links.length;

// leg firstLink = links[0]

// links.forEach(function(link){

// })



// let listItems = document.querySelector('ul').children

// console.log(listItems.length)

// let selectedItem = document.querySelector('li.selected')

// let first = selectedItem.previousElementSibling;
// let last = selectedItem.nextElementSibling;
// let list = selectedItem.parentElement;

// let header = selectedItem.parentElement.parentElement;
// let section = selectedItem.parentElement.parentElement.nextElementSibling;

// console.log(section)



// let div = document.querySelector('div')
// let a = document.querySelector('a')

// console.log(a.innerHTML)
// console.log(div.innerHTML)

// a.innerHTML = "Updated link text"


// let a = document.querySelector('a')

// console.log(a.href)


// a.name = 'new link name'

// a.target = '_blank'


// document.querySelector('.first').remove()

///////// Remember this tag for the home work...

// // create the new HTML tag
// let newLi = document.createElement('li')
// // add the text for the new HTML tag
// newLi.innerHTML = "item2"

// // select the area to attatch the tag
// let list = document.querySelector('ul')
// // add the tag to the selected child tag to the parent tag
// list.appendChild(newLi)



// // click events(!)
// let el = document.getElementById('myEl')


// el.addEventListener('click', function(event){
//     console.log('clicked')
// })


// el.addEventListener('mouseover', function(event){
//     el.innerHTML = 'hovered over button'
// })

// be mindful when you're using currentTarget
document.querySelector('.outer').addEventListener('click', function(event){
    console.log(event.currentTarget,event.currentTarget)

})