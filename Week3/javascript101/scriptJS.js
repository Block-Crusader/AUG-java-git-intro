let studentArray = ['John', 'Kim', 'Steve']
// let numberList = [1,2,3,4,5]
// let booleanArray = [true, false]

// console.log(studentArray[0])
// console.log(studentArray[0])

// push add an item to the array
studentArray.push('Zack')

// console.log(studentArray)

// pop: removes the last element from the array
let newStudent = studentArray.pop()

// console.log(studentArray)

// unshift: adds the item to the front of the array
studentArray.unshift('Shane')
// console.log(studentArray)

// shift: removes an item from the front of the array
let rmStudent = studentArray.shift()

// console.log(studentArray)

studentArray[4] = "James"

studentArray[2] = "Tom"
// console.log(studentArray)

// let num = [10, 100, 50, 2]

/** indexOf: finds the index position of the
 * item in the array xD
 * If the item isn't there, it will return -1 **/
// console.log(num.indexOf(50))

/** splice: needs to accept 2 arguments, start and
 * end, and returns a new array. This new array
 * will hold the elements from the given start index
 * up the one right before the specified end index.
 * 
 * It allows you to make a "shallow copy" while not
 * mutating the whole array. Epic.
*/


// let num = [1,2,3,4,5]

// let items = num.slice(0,2);

// console.log(items)
// console.log(num)

// let itemNum = num.splice(1,2,8,10)

// console.log(itemNum)

// console.log(num)

//  console.log(studentArray)

// length: gives you the length of the array
//  for(let i = 0; i < studentArray.length; i++){
//     console.log(studentArray[i])
//  }

// printing out data and getting it to display is THE most important thing in front-end development.


// a callback funtion is a function that calls another function back
//studentArray.forEach(function(item){
//    console.log(item)
//})

let names = ['joe', 'Ann']

names.toString()
let newNames = names.join(' & ')

//  console.log(newNames)

let a = [5, 2, 8]

//  console.log(a.sort())
//  console.log(a.reverse())



//Objects

//let course = {
//    name:'Java Script',
//    computerLg: true,
//    students:['Rob','Kate'],
//    instructor:{
//        name:'Dave',
//        favLang:'java script',
//    }
//}

//console.log(course)

// let course = {
//     name: 'JavaScript Applications',
//     awesome: true,
//     teachers: ['Assaf', 'Shane'],
//     students: [
//         {
//             name: 'Steve',
//             computer: {
//                 OS: 'Linux',
//                 type: 'laptop'
//             }
//         }
//     ]
// };

//console.log(course.students[0].computer.OS);
// console.log(course['students'][0]['computer']['OS']);



//course.name = "JS 101"

//console.log(course)

// delete course.awesome
// console.log(course)



let course = {
    name: 'JavaScript Applications',
    awesome: true,
    teachers: ['Assaf', 'Shane'],
    students: [
    {
    name: 'Steve',
        computer: {
            OS: 'Linux',
            type: 'laptop'
        }
    },
    {
    name: 'Katy',
        computer: {
            OS: 'OSX',
            type: 'macbook'
        }
    },
    {
    name: 'Chuck',
        computer: {
            OS: 'OSX',
            type: 'macbook'
        }
    }
    ],
    preReqs : {
        skills : ['html', 'css', 'git'],
        equipment: {
            laptop: true,
            OSOptions: ['linux', 'osx']
        }
    }
};


//class exersize
//name of course ('JavaScript Applications')
console.log(course.name)
//name of second teacher ('Shane')
console.log(course.teachers[1])
// name of the first student ('Steve')
console.log(course.students[0].name)
// Katy's computer type ('macbook')
console.log(course.students[1].computer.type,)
// the preReq equipment object
console.log(course.preReqs.equipment)
// the second 0S option from the equipement prereqs
console.log(course.preReqs.equipment.OSOptions[1])
// String listing the OSOptions separated by 'or' (Linux or osx)
let orOSOptions = course.preReqs.equipment.OSOptions.join(' or ')
console.log(orOSOptions)
// List of all the students with OSX in an array
console.log([ course.students.slice(1, 3)[0].name, course.students.slice(1, 3)[1].name, ]);