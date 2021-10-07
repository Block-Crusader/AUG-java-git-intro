package com.company;

import java.util.Arrays;

public class Main {

    /* Objectives:
    1. Write a program to sum all the values of a given Array in Java.
    2. Find the output of this code:
    //
         double[ ] exampleArray = {1,5,6,5,4,1};

          double maximum = examplesArray[0];

          int index = 0;

          for (int i = 1; i<exampleArray.length>; i++){

               if (exampleArray[ i ] > maximum) {

                    maximum = exampleArray[ i ];

                    index = i;

               }

          }

          System.out.println(index);
    //
    3. Write a public static method called "toPower" that takes in as parameters two integers called size and power.
    The method should return an array of size "size" with each array index raised to the value of "power."
    So, for example, if we passed in "size = 4" and "power = 2" to the "toPower,"
    the method should return the following result: [0,1,4,9].
    */

    public static void main(String[] args) {
        /* OBJECTIVE 1 */
        // int array
        int[] numArray = {1, 2, 3};

        /* Approach is a for-each loop to add all the elements in the array */
        // sum variable to allocate into
        int sum = 0;
        // loop
        for (int i : numArray) { // "for each element in numArray, iterate through i and carry out the below functions"
            sum += i; // add the value of sum to i (iterator) and make that value the new "sum"
        }
        // output for the end user
        System.out.println("The sum of the elements in numArray is..\n" + sum + "\n");



        /* OBJECTIVE 2 */
        double[ ] exampleArray = {1,5,6,5,4,1};

        double maximum = exampleArray[0]; /* code on this line was altered in order for it to compile
        ("examplesArray" was changed to "exampleArray" to match later calls in the program) */

        int index = 0;

        for (int i = 1; i<exampleArray.length; i++){ /* code on this line was altered in order for it to compile
        (the greater-than symbol after "exampleArray.length" made no sense, I deleted that specifically) */

            if (exampleArray[ i ] > maximum) {

                maximum = exampleArray[ i ];

                index = i;

            }

        }

        System.out.println(index);
        // System printing my answer as to what the output is
        System.out.println("The output of the code above is: " + "\"" + index + "\", or, \"two\", the integer.\n");


        /* OBJECTIVE 3 (cont, initial below) */
        // input the parameter variables of the method toPower below
        int[] gamingMain = toPower(4,2); // assigning a Main method array from toPower's array (gaming)
        System.out.println("Dutch engineering at work:");
        System.out.println(Arrays.toString(gamingMain));

    }

    /* OBJECTIVE 3 (initial) */
    /* Write a public static method called "toPower" that takes in as parameters two integers called size and power.
    The method should return an array of size "size" with each array index raised to the value of "power."
    So, for example, if we passed in "size = 4" and "power = 2" to the "toPower,"
    the method should return the following result: [0,1,4,9].
     */
    // pub-stat method "toPower", two parameters "size","power", returns integer array
    public static int[] toPower(int size, int power){
        // array with a size (length) of "size"
        int[] gaming = new int[size];
        // iterate elements of gaming array with i and append those values to it
        for (int i = 0; i < size; i++){
            /* take the iterator variable and the result of the iteration with exponentializing it with "power", and
            * append THAT value into each element in the gaming array (iterator iterating it's value up one each time,
            * obviously).*/
            gaming[i] = (int) Math.pow(i,power);
        }
        return gaming;
//        for (int indexElement = 0; indexElement < gaming.length; indexElement++) {
//            indexElement += position++;// assigning position value of the array to iterator, adding 1 for each iteration
//            indexElement = (int) Math.pow(indexElement,power); // assigning the index element to the power of.. "power"
//            System.out.print(indexElement); // print the values of the indexElement
//            // assign each value of indexElement into the respective element in gaming
////            for (int i = 0; i < gaming.length; i++) {
////                gaming[i] = indexElement;
////            }
//            gaming[indexElement] = indexElement;
        }
//        return gaming;
    }
