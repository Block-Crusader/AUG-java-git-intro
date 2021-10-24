// function userInput(userInput){
//     console.log(userInput)
// }

// greeting(5)


// make it a habit to always call the function first before getting dirty
// also keep your function small
// creating the function
// function add(number1, number2){
//     // telling it what we want it to do
//     return number1+number2
// }

// // calling the function with the correct parameters
// let sum = add(15, 37)
// console.log(sum)

// //arrow function
// const add = (num1,num2) =>{
//     return
// }

// let sum = add()
// console.log(sum)

// function add(){
//     let sum = 0;
//     for(let i = 0; i < arguments.length; i++){
//         sum += arguments[i]
//     }
//     return sum
// }

// let sum = add(1,2,3,4,5,66,7,7,8,9,0,0,9,0)
// console.log(sum)

//rest and spread operator, devs want to use this for versatility and cleanliness of code
// function subtract(num, str,...rest){
//     let sum = 0;
//     for(let i = 0; i < rest.length; i++){
//         sum+=rest[i]
//     }
//     return sum
// }

// let sum = subtract(1,2,3,4,5,6)

// console.log(sum)


//hoisting: calling the function ahead of time before it's creation; kinda gimmicky
//i.e. "pure" function
//comes up in interviews a LOT
// hoisted()

// function hoisted(){
//     console.log("sure")
// }


// add(2,3)
// // variable function (classic dev function)
// let add = function(a,b){
//     console.log(a+b)
// 


//anonymous functions
//can be used for lots of things: scope, clean code, stopping hax, privacy, closures, etc
//scope is the most complicated things developers run into in a daily basis
//"more or less, you'll see them with arrows"
// let calculator = {
//     add:(a,b)=>{
//         return a+b;
//     }
// }

// calculator.add(3,7)


//scope is the most complicated things developers run into in a daily basis
//scope is anything between the two curly braces, we don't want to venture outside most of
//the time, where global variables can play into things
//there are different scopes,
//anythign created inside a function is a "local" scope
//anything outside the function is a "global" scope
    //avoid global scopes whenever you can

//Global scope
// var greeting = 'welcome'

//https://developer.mozilla.org/en-US/docs/Glossary/Scope
// function getGreeting(name){
//     //local scope
//     //local scopes cannot access anything outside (ie Global) outide its scope

//     let greeting = "hello "
//     return greeting+name
// }
// let hello = getGreeting("Bob")
// console.log(hello)

// console.log(greeting)


//we can still call anonymous functions, or "iffys", immediately invoked functions
// (function(){
//     let my = "some string "
//     console.log(my)
// })();

// let city = "NOLA"

// let greet = function(){
//     console.log('Hello, '+ city)
// }

// greet();


//nested scope: very popular, play around with them.
//inner functions have access to outer functions generally, and vice versa
// function outer(){

//     let x = 'x'

//     function inner(){
//         let y = 'y'
//         console.log(x)
//     }

//     inner()


// }

// outer()


// let landscape = function(size){
//     let result = ""

//     let flat = function(size){
//         for(let count = 0; count < size; count++){
//             result += " _ "
//         }
//     }

//     let mountain = function(size){
//         result += "/"
//         for(let count = 0; count < size; count++){
//             result+=" '"
//             result+="\\"
//         }

//     }

//     flat(3)
//     mountain(4)


//     return result;
// }

// console.log(landscape)


//naming conflicts
// let name = "John"

// let greet = function(name){
//     let name = "Dave"
//     console.log(name)
// }
// greet('Ann')

// function outer()){
//     function inner(){

//     }

//     inner()
// }

// outer()









//keyword: this
// let teacher = {
//     name: "Asdf",
//     sayName: function(){
//         console.log(this.name)
//     }
// }

// teacher.sayName()


// function sayName(){
//     console.log(this.name)
// }

// let teacher1 = {
//     name: 'Asdf',
//     speak: sayName
// }

// let teacher2 = {
//     name: "Shane",
//     speak: sayName
// }


// teacher1.speak();
// teacher2.speak();


// let car = {
//     brand: "Ford",
//     getBrand: function(){
//         return this.brand
//     }
// }

// let bike = {
//     brand: 'Gaxr 1000'
// }


// let brand = car.getBrand.bind(bike)
// console.log(brand())










//Week 3 Day 3 Functions?


// add function
function add (num1, num2){
    return num1, num2
}

// High order function
function doMath(operation, num1, num2){
    return operation(num1,num2)
    //add(3,7)
}

//if you know High Order functions, there will be no shortage of work for you
let sum = doMath(add, 3, 7)

console.log(sum)


//filter, find (not really used), map, reduce

//filter

let students = [
    {name: 'John', average: 90},
    {name: 'Ringo', average: 58},
    {name: 'Paul', average: 82},
]

let passingStudents = students.filter(function(student){
    return student.average
})