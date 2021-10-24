package com.company;

public class Main {

    public static void main(String[] args) {

	    // instance of Calculator class
        Calculator calc = new Calculator();


        // demonstration of calculator functions //

        // addition of 2 and 3 (equaling 5)
        System.out.println(calc.add(2,3));

        // subtraction of 12 and 1 (equaling 11)
        System.out.println(calc.subtract(12,1));

        // multiplication of 12 and 1 (equaling 11)
        System.out.println(calc.multiply(5,5));

        // division of 30 by 3 (equaling 10)
        System.out.println(calc.divide(30,3));

        // square multiplication of 3^2 (3*3) (equaling 9)
        System.out.println(calc.square(3,2));


        // program's last words //
        System.out.println("Party's over!");
    }
}
