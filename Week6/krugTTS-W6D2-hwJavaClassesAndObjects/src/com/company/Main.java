package com.company;
/* 1. Create a Pet Class with the following instance variables:

    name (PRIVATE)
    age (PRIVATE)
    location (PRIVATE)
    type (PRIVATE)
    two constructors(empty, all attributes)

    Code to be able to access the following (Get Methods):
    name, age, type

    Code to be able to change (Set Methods):
    name, age, location

2. Create a Custom Class (anything you want - car, phone, holiday, etc.).

Requirements:

    * Minimum 3 private instance variables
    * An empty constructor
    * A constructor that uses only 2 of your 3 variables
    * A constructor that uses all 3 of your instance variables
    * Get methods for all 3 of your instance variables and Set methods for all 3 of your instance variables
    * A method that returns a Boolean
    * A method that returns a String
    (For example, if I created a Santa Custom Class, my code would look something like the attached Santa.java file.
    */

public class Main {

    public static void main(String[] args) {

        // demonstration of course material W6D2 (Classes and Objects) //

        // made a pet's "Master" named "John Smith", with an age of 23, under the variable name, "john_smith", he's very hostile
        Master john_smith = new Master("John Smith", 23, "Hostile");
        // made a variable that contains John's quote sample, a method in the Master class (as John is a "Master" of his pet)
        String command = john_smith.quoteSample();
        // takes this variable and prints John's quote sample (which is the default for a master)
        System.out.println(command);

        // made a new "Pet" named "Rover", with an age of 7, who lives in Atlantis, and is an animal(ia)
        Pet rover = new Pet("Rover", 7, "Atlantis", "Animal");
        rover.setType(Pet.TYPE_SERVICE); // for the purpose of this program, we're making Rover a special pet: a service pet, and that's final.
        // Here, were accessing Rover's "type" just to make sure our previous command worked: that he's now a Service Pet
        System.out.println("Rover is a (drum roll please): " + rover.getType());

    }
}
