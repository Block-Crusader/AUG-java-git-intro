//Week 3 Day 3 Functions


// // add function
// function add (num1, num2){
//     return num1, num2
// }

// // High order function: "function that returns another function as a parameter"
// function doMath(operation, num1, num2){
//     return operation(num1,num2)
//     //add(3,7)
// }

// //if you know High Order functions, there will be no shortage of work for you
// let sum = doMath(add, 3, 7)

// console.log(sum)


//filter, find (not really used), map, reduce

//filter returns average

// let students = [
//     {name: 'John', average: 90},
//     {name: 'Ringo', average: 58},
//     {name: 'Paul', average: 82},
// ]

//filter
// let passingStudents = students.filter(function(student){
//     return student.average > 60
// })

// //find (pretty much a shitty version of "filter")
// let passingStudent = students.find(function(student){
//     return student.average > 50
// })

// // map loops through the whole array...
// let students = [
//     {firstName: 'Cam', lastName: 'Newton'},
//     {firstName: 'Ted', lastName: 'Ginn'},
//     {firstName: 'Greg', lastName: 'Olsen'}
// ]

// let fullNames = students.map(function(student){
//     return `${Student.firstName} ${Student.lastName}`
// })


// //mdn link reduce function
// let students = [
//     {name: 'Cam Newton', assignmentsCompleted: 'Newton'},
//     {name: 'Ted Ginn', assignmentsCompleted: 'Ginn'},
//     {name: 'Greg Olsen', assignmentsCompleted: 'Olsen'}
// ]

// let total = students.reduce(function(prevIdx, currIdx){
//     return prevIdx + currIdx.assignmentsCompleted;
// },0)

// console.log(total)


// [
//     ["Batman", "Bruce Wayne"],
//     ["Spiderman", "Peter Parker"]
//     ["The Flash", "Barry Allen"]
// ]

// let superHeroes = [
//     {superIdentity: "Batman", secretIdentity: 'Bruce Wayne'},
//     {superIdentity: "Spiderman", secretIdentity: 'Peter Parker'},
//     {superIdentity: "The Flash", secretIdentity: "Barry Allen"},
// ]
//     let secretIdentity = superHeros.map((revealArray)=>{
//         return revealArray.join(" is ")
//     })

//     console.log(secretIdentity.join("/n"))
/** Create an Array named superHeroes shown above
Create a secretIdentity variable
Assign superHeroes.map() to the secretIdentity variable
Assign an anonymous function to superheroes.map() as an argument
Your anonymous function should have one parameter named revealArray
Inside the block of your anonymous function:
You'll be working with revealArray as an argument
Using revealArray, return a string that will join the two array items.
join them together with the string "is" (ie: "Batman is Bruce Wayne") */


let players = [
    {firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
    {firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
    {firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
    {firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
    {firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
    {firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
    {firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
    ];
    
    // Find a player with the name 'Mike' find
    players.find(function(player){
        let findPlayer = player.firstName == 'Mike'
    })
    // Get an array of all players with position 'RB' filter
    players.filter(function(player){
        let findPosition = player.position === "RB"
    })
    // Get an array of all the players lastNames map
    let allLastNames = players.map(function(player){
        return player.lastName
    })

    console.log(allLastNames)
    // Stretch
    // Get an array of the full names of all the running backs with more than 5 touchdowns
    let result = players.filter(function(player){
        return player.touchdowns > 5 && player.position === 'RB'
    }).map(function(player){
        return `${player.firstName} ${player.lastName}`
    })
    console.log(result)
    // Get the number of touchdowns scored by Running backs
    let result2 = players.filter(function(player){
        return player.position === `RB`
    }).reduce(function(total, player){
        return total += player.touchdowns
    },0)

    console.log(result2)