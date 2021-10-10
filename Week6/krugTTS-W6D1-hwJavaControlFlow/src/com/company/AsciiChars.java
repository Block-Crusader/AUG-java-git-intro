package com.company;

public class AsciiChars
{
    public static void printNumbers()
    {
        // TODO: print valid numeric input
        System.out.println("These are the ASCII base numerical values:");
        // range of numbers in ascii: 48-57
        //using a for loop, print the valid values of each set
        for (int i = 48; i < 58; i++){ //added one due to zero-based counting on Java
            System.out.print(i + " ");
        }
        System.out.println("\n"); // formatting purposes
    }

    public static void printLowerCase()
    {
        // TODO: print valid lowercase alphabetic input
        System.out.println("These are the lowercase ASCII alphabetic values:");
        // range of letters (lower): 97-122
        for (int i = 97; i < 123; i++){ //added one due to zero-based counting on Java
            System.out.print(i + " ");
        }
        System.out.println("\n");
    }

    public static void printUpperCase()
    {
        // TODO: print valid uppercase alphabetic input
        System.out.println("These are the uppercase ASCII alphabetic values:");
        // range of letters (caps): 65-90
        for (int i = 65; i < 91; i++){ //added one due to zero-based counting on Java
            System.out.print(i + " ");
        }
        System.out.println("\n");
    }
}