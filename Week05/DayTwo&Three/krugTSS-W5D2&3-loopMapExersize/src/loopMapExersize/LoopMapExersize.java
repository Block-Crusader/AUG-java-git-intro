package loopMapExersize;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;

public class LoopMapExersize {
	public static void LoopMapEx1() {
		@SuppressWarnings("resource")
			
			/* PROBLEM 1:
			 * "Write a program that does the following:
			 * Asks the user for 5 numbers
			 * Stores them in an array list
			 * Finds the sum, product, largest, and smallest of those numbers"
			 */
		    
			// input object
			Scanner input = new Scanner(System.in);
			
			// integer arrayList to hold and modify the five user input values in one place
			ArrayList<Integer> numStore = new ArrayList<Integer>(5);
			
			/* for loop to loop through five inputs of numStore, since "numStore" is an array list, I can't do .length().
			 * The most machine efficient and sensible solution in this scenario is simply to replace "numStore.length()" with 5.
			 * We could data convert, but it would be senselessly bloated */
			for (int i = 0; i < 5; i++) {
				// Prompts a user to insert the respective number, and press enter
				System.out.println("Insert your number for position " + (i + 1) + " of the ArrayList, and press ENTER to input the next number:");
				// take input from the user for the array elements
				int userNum = input.nextInt();
				//add the user input value to the numStore array
				numStore.add(userNum);
			}
			
			/* Objective: Find the sum, product, largest, and smallest of those numbers
			 * IE CALCULATIONS */
			
			// for loop to find the sum of the ArrayList elements
			int adder = 0;
			for (int adderIncrement : numStore) {
				adder += adderIncrement;
			}
			
			// / for loop to find the products of the ArrayList elements
			int productor = 1; //the reason why "productor" is 1 and not zero is because everything times 0 is zero, so it doesn't work here
			for (int productorIncrement : numStore) {
				productor *= productorIncrement;
			}
			
		    //storing the length of the ArrayList in this variable for calculations below
		    int numStoreSize = numStore.size();
		    
			// loop to find largest from ArrayList via iteration and if conditional
			int largerator = numStore.get(0);
			for  (int i = 0; i < numStoreSize; i++) { //increment every element in the array to check number size
				if (numStore.get(i) > largerator) {
					largerator = numStore.get(i);
				}
			}
			
			// loop to find smallest from ArrayList via iteration and if conditional
			int smallerator = numStore.get(0);
			for  (int i = 0; i < numStoreSize; i++) { //increment every element in the array to check number size
				if (numStore.get(i) < smallerator) {
					smallerator = numStore.get(i);
				}
			}
			
			/* print results of the "equations" above for the user */
			// Separator and user return prompt
			System.out.println("\n\nResults:\n");
			System.out.println("The ArrayList elements are:");
			/* forEach statement (loop) to print the arrayList elements. The forEach loop goes through each element
			 * and assigns it to the x variable each iteration and print the x of said iteration.
			 * KEEP IN MIND: technically, "x" is the declaration, and "numStore" is the expression. */
			for (int x : numStore) {
				System.out.print(x + " ");
			}
			System.out.println("\n");
			System.out.println("This is the sum of all the numbers you entered:");
			System.out.println(adder + "\n");
			System.out.println("This is the product of all the numbers you entered:");
			System.out.println(productor + "\n");
			System.out.println("Maxiumum number of the ArrayList is:\n" + largerator + "\n");
			System.out.println("Minimum number of the ArrayList is:\n" + smallerator);
			}
	
			/* PROBLEM 2:
			 * You are a car dealer. Create a hash map of vehicles.
			 * The model is the Key, the make is the Value.
			 * Ask the customer what car (model) they are looking for.
			 * Use the Hash Map to determine if you have that vehicle, and what make it is.
			 * (e.g. "Oh, you're looking for a Civic? Our Honda selection is right over here...")
			 */
	
			public static void LoopMapEx2HashMapCar() {
				// Creating a hash map of Vehicles
				HashMap<String, String> vehicle = new HashMap<String, String>();
				// input object
				Scanner input = new Scanner(System.in);
				
				
				// inputting Keys (car model), Values (car make) for vehicles
				vehicle.put("Civic", "Honda");
				vehicle.put("Land Cruiser", "Toyota");
				vehicle.put("Wrangler", "Jeep");
				
				// asking customer what car (model) they're looking for
				System.out.println("What car are you looking for?");
				// customer input
				String userCar = input.nextLine();
				
				// Using HashMap to determine if vehicle is in inventory, and what make it is.
				vehicle.containsKey(userCar);
				
				// endings
				if (vehicle.containsKey(userCar) != false) {
					//affirmative (which prints that value (make) in accordance to the user's key (model) 
					System.out.println("We have one of those, let's take you to our " +
					vehicle.get(userCar) + " section, my friend!");
				} else {
					//negative
					System.out.println("Doesn't seem like we one of those, try inputting a similar model.");
				}
			}
}
