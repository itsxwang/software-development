use std::io::{self, Write};          
// Rust’s grouped (nested) import syntax
/* 
use path::to::thing;
Means:

“Bring thing into the current scope under this name”

- It does not copy code
- It does not execute code
- It only affects names

use std::io::{self, Write};
This is just short syntax for multiple imports.

The line above is exactly the same as writing:

use std::io;
use std::io::Write;
*That’s it. Nothing more.*

self
Means:
“Import the module itself”

`Write`
Means:
“Import the Write item from std::io”
Write is a trait.

-> so use std::io::{self, Write};
    brings std::io into scope as io
    If you removed self, then io:: would NOT exist.

    Question:
    Why doesn’t this compile without Write?
    
    io::stdout().flush();
    Answer:
    Because flush() is not a method on stdout itself.
    
    It comes from the Write trait.
    
    Rust rule:
    
    Methods from traits are only available if the trait is in scope


    So:
        `use std::io::Write;`
        tells the compiler:
        “Yes, I want to use methods from this trait.”

        Visual mental model (remember this)
                std
                └── io (module)
                  ├── stdin()   (function)
                  ├── stdout()  (function)
                  └── Write     (trait)
                       └── flush() (method)
        
*/


fn main() {
    // 1 1 2 3 5 8 13...
    'mainl: loop {
        let mut a = 0;
        let mut b = 1;
        
        
        print!("Write number: ");
        io::stdout().flush().unwrap(); // 🔥 IMPORTANT: “Send everything in the output buffer to the terminal right now” 
        /*         
            Without it:
        text stays in memory
        terminal shows it late
         */

        let mut input = String::new();
        io::stdin().read_line(&mut input).expect("Failed to read!");
        let mut user_in: i32 = match input.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                println!("Enter only valid number!");
                continue;
            }
        };
        println!("-----------------------------");
        fn abprint (a: i32, b: i32) {
            println!("{} {}", a, b);
        }
        
        if user_in == 0 {
            println!("{}", user_in);
            break 'mainl;            
        }
        loop {
            if  user_in-1 == 0 {
                if a <1 {
                    abprint(a, b);
                }
                break 'mainl;
            }

            if a <1 { 
                abprint(a, b);
            }                
            let c = a + b;
            println!("{} ({}+{})", c, a, b);
            a = b;
            b = c;
            user_in -= 1;
        }
    }
}
