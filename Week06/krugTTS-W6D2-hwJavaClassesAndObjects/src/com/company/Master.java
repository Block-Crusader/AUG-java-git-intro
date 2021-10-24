package com.company;
/* 2. Create a Custom Class (anything you want - car, phone, holiday, etc.).

Requirements:

    * Minimum 3 private instance variables
    * An empty constructor
    * A constructor that uses only 2 of your 3 variables
    * A constructor that uses all 3 of your instance variables
    * Get methods for all 3 of your instance variables and Set methods for all 3 of your instance variables
    * A method that returns a Boolean
    * A method that returns a String
    */

public class Master {
    // (3) private instance variables
    private String name;
    private int age;
    private String alignment; //used to denotate relationship "status" to the player, i.e. "Friendly", "Neutral", or "Hostile"


    // constructors //

    // ... using 2/3 instance variables
    Master(String name, int age) {
        this.name = name;
        this.age = age;
    }
    // ... using 3/3 instance variables
    Master(String name, int age, String alignment) {
        this.name = name;
        this.age = age;
        this.alignment = alignment;
    }


    // get/set methods for instance variables //

    // name
    public String getName() { // get method
        return name;
    }
    public void setName(String name) { //set method
        this.name = name;
    }
    // age
    public int getAge() { // get method
        return age;
    }
    public void setAge(int age) { //set method
        this.age = age;
    }
    // alignment
    public String getAlignment() { // get method
        return alignment;
    }
    public void setAlignment() { //set method
        this.alignment = alignment;
    }

    // Other methods //

    // boolean
    public boolean hungerSatiated() {
        return false;
    }
    // return a String
    public String quoteSample() {
        return "Do as I command, Rover!";
    }
}
