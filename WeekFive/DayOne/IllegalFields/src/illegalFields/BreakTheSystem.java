package illegalFields;

public class BreakTheSystem {
	//uninitialized field in a local variable to be printed
	static void printUninitVar() {
		String sussyString = "Woah, that's suspicious bro";
		System.out.println(sussyString);
	}
	
	
	public static void main(String[] args) {
		/*making some fields, a field is a variable in a class or struct
		 * here, we're going to be a bad boy and declare some stuff unconventionally
		 * I will also try to break some stuff later.
		 */
		
		//illegal field names for int
		int 2short = 2;
		
		//illegal field name for char for sure
		char 1 = "illegal field name";
				
		//uninitialized integer field that will be printed
		int numbah3;
		System.out.println(numbah3);
		
		//uninitialized field in a local variable to be printed
		printUninitVar();
	}
}
