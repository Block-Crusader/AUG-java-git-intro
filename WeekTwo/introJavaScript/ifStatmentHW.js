// Challenge 1: "Do you need more coffee?"
console.log("Do you need more coffee?")
const input = prompt("How many cups of coffee have you consumed?");
alert(`You consumed ${input} cups of coffee, huh?`);
if (input < 3) {
    console.log('Yes, I\'ll have another cup of coffee')
} else {
    console.log('I think I\'m okay for now')
}

//Challenge 2: "Does you car need an oil change?"
console.log("Does you car need an oil change?")
const input = prompt("How many miles does your car have?");
alert(`${input} miles, hmm?`);
if (input > 500) {
    console.log('Yes, I think I need an oil change.')
} else {
    console.log('My car doesn\'t need an oil change yet')   
}