package com.company;

public class Main {

    public static void main(String[] args) {

    // Association (Many-to-Many) Example //
    // motorcycle instance
	Motorcycle motorcycle = new Motorcycle();
    motorcycle.changeGear(5);
    motorcycle.accelerate(15);
    motorcycle.brake(1);

    // display
    System.out.println("Motorcycle display status: ");
    motorcycle.displayStatus();

    // rallycar instance
    RallyCar rallyCar = new RallyCar();
    rallyCar.changeGear(3);
    rallyCar.accelerate(12);
    rallyCar.brake(2);

    // display
    System.out.println("RallyCar display status: ");
    rallyCar.displayStatus();
    }
}
