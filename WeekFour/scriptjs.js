// const userOne = {
//     name: 'Erik',
//     age: 32,
//     email: 'erik@email.com'
// }

// const userOne = {
//     name: 'Jane',
//     age: 20,
//     email: 'jane@email.com'
// }



// function User(name, age, email) {
//     this.name = name;
//     this.age = age;
//     this.email = email;
// }

//this is now the whole obj
// class User {
//     constructor(name, age, email){
//         this.name = name
//         this.age = age
//         this.email = email
//     }
//     //method
//     ageByOne(){
//         this.age +=1
//     }

//     static staticMethod(){
//         console.log('hello');
//     }
// }

class User {
    constructor(name, age, email){
        this.name = name
        this.age = age
        this.email = email
    }
    
    // get name(){
    //     return this.name
    // }

    // set name(newName){
    //     this.name = newName
    // }
}

// creating a new instance obj
// const erik = new User
const erik = new User("Erik", 32, "erik@email.com")
const jane = new User("Jane", 20, "jane@email.com")


console.log(jane.name)