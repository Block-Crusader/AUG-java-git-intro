package com.company;

class Address {
    int streetNum;
    String city, state;
    Address(int street, String city, String state){
        this.streetNum = street;
        this.city = city;
        this.state = state;
    }
}
class Programmer {
    String name;
    //Creating HAS-A relationship with Address class
    Address programmerAddr;
    Programmer(String name, Address addr){
        this.name=name;
        this.programmerAddr = addr;
    }
}
