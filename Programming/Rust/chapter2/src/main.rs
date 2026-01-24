use std::cmp::Ordering;
use std::io::stdin; //does NOT import code like in Python or JS. Just Bring a name into scope // Ordering is an enum that has 3 variants: Less, Greater, Equal
// std =  standard library = Automatically available in every Rust program is a crate

use rand::Rng; // Rng is a trait that defines methods that random number generators implement

// Rust code is organized like this:
/*

crate
 └── module
      └── submodule
           └── item (function, struct, enum, trait, etc.)


 */

fn main() {
    println!("Guess the number! 1-100\n");
    let random_number = rand::thread_rng().gen_range(1..=100);
    let mut trys: u32 = 0;
    loop {

        // print!("Random number is: {random_number} sn");
        println!("input your guess...");

        let mut guess = String::new();

        stdin().read_line(&mut guess).expect("Failed to read line");

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                println!("Please enter a valid number!");
                continue;
            }
        };

        // stdin() returns a handle to the standard input stream, Stdin Object and read_line() reads a line of text from the standard input stream -> a method of Stdin
        // read_line is not a funtion, It is a method defined on a standard input handle. Rust uses traits to add methods to types.

        println!("You guessed: {guess}");
        // if guess < random_number {
        //     println!("Too small!\n\n");
        // } else if guess > random_number {
        //     println!("Too big!\n\n");
        // } else {
        //     println!("You win!\n\n");
        //     break;
        // }

        trys += 1;

        match guess.cmp(&random_number) {  
            Ordering::Less => {
                println!("Too small!\n\n");
            }
            Ordering::Greater => {
                println!("Too big!\n\n");
            }
            Ordering::Equal => {
                println!("You win! in {trys} trys");
                break;
            }
        }
        // read line return `Result`, which is enum which can be in 1 of the multiple possible states (each possible state = variant)

        /*Result’s variants are Ok and Err. The Ok variant indicates the operation was successful, and it contains the successfully generated value.
        The Err variant means the operation failed, and it contains information about how or why the operation failed. */
    }
}

// so basically

/*
:: = go inside
() = call function
. = call method
*/

/*
1️⃣ What does “handle to standard input” really mean?

A handle is:

A value that represents access to something managed by the OS
(not the thing itself) */

/*
In this case:

io::stdin()


does NOT read input.

It returns a value of type:

std::io::Stdin


io::stdin() means give me a object that represents the standard input (Stdin)
 */


