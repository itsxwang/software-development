use std::io::stdin; //does NOT import code like in Python or JS. Just Bring a name into scope
// std =  standard library = Automatically available in every Rust program is a crate

// Rust code is organized like this:
/*

crate
 └── module
      └── submodule
           └── item (function, struct, enum, trait, etc.)


 */

fn main() {
    println!("Guess the number!");

    println!("Please input your guess.");

    let mut guess = String::new();

    // stdin() returns a handle to the standard input stream, Stdin Object and read_line() reads a line of text from the standard input stream -> a method of Stdin
    // read_line is not a funtion, It is a method defined on a trait. Rust uses traits to add methods to types.

    stdin().read_line(&mut guess).expect("Failed to read line");
    // read line return `Result`, which is enum which can be in 1 of the multiple possible states (each possible state = variant)

    /*Result’s variants are Ok and Err. The Ok variant indicates the operation was successful, and it contains the successfully generated value.
    The Err variant means the operation failed, and it contains information about how or why the operation failed. */

    println!("You guessed: {guess}");
}

// so basically

/*
:: = go inside
() = call function
. = call method
*/


// What does “handle to standard input” really mean?
// 
// A handle is:
// 
// A value that represents access to something managed by the OS
// (not the thing itself)