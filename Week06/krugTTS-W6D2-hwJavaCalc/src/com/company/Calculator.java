package com.company;

public class Calculator {
    // instance variables
    private int total;
    private int num1;
    private int num2;

    // class constructor
    Calculator() {
    }
    // constructor 2
    Calculator(int num1, int num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    // addition command method
    int add(int num1, int num2) {
        total = num1 + num2;
        return total;
    }

    // subtraction command method
    int subtract(int num1, int num2) {
        total = num1 - num2;
        return total;
    }

    // multiplication command method
    int multiply(int num1, int num2) {
        total = num1 * num2;
        return total;
    }

    // division command method
    int divide(int num1, int num2) {
        total = num1 / num2;
        return total;
    }

    // square command method
    int square(int num1, int num2) {
        total = (int) Math.pow(num1, num2);
        return total;
    }
}
