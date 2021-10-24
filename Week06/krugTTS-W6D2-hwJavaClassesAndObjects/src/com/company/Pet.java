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
    */

public class Pet {
    // private instance variables (AKA class attributes)
    private String name;
    private int age;
    private String location;
    private String type;
    public static final String TYPE_SERVICE = "Service Pet"; // Special type of animal: a service pet

    // two constructors
    Pet() {} //empty
    Pet(String name, int age, String location, String type) { // all attributes
        this.name = name;
        this.age = age;
        this.location = location;
        this.type = type;
    }


    // get/set methods for each attribute //

    // name
    public String getName() { // get method
        return name;
    }
    public void setName(String name){ this.name = name;} // set method

    // age
    public int getAge() { // get method
        return age;
    }
    public void setAge(int age) { this.age = age; } // set method

    // location
    public String getLocation() { // get method
        return location;
    }
    public void setLocation(String location) { this.location = location;} // set method
    // type
    public String getType() {
        return type;
    }
    public void setType(String type) { this.type = type;} // set method
}
