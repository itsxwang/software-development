// a greate system programming language
// rust becomes memory safe because of borrower, ownership and lifetimes

// use std::io::Read;

#[allow(unused_variables)]
/* In Rust, the #[ ... ] syntax is called an attribute.

They are pieces of metadata that you can attach to modules, crates, functions, structs, enums, variables, etc. to control how the compiler treats them.

General forms of attributes

    - Outer attributes: #[ ... ] → apply to the item that comes after them.
    - Inner attributes: #![ ... ] → apply to the item they are inside of.


    => Common built-in attributes

       -  #[derive(...)] → automatically implement traits like Debug, Clone, etc.

       - #[allow(...)], #[warn(...)], #[deny(...)] → control compiler warnings.

       - #[test] → marks a function as a test.

       - #[cfg(...)] → conditional compilation (e.g., only compile on Windows).
*/

fn main() {
    
    println!("Hello, world!");
    // variables in rust: https://youtu.be/qP7LzZqGh30?si=l5DAixTVOLDSjIRj&t=2227
    // let x: i8 = 7; // by default i32
    // assert_eq!(x, 7); // if not equal, panic(means immediately terminate the program)
    // println!("{}", x); // println! is a macro as it called with `!`,  but println is a function
    // // by default variable naturally are immutable
    // // constants are immutable
    // let str = "hello";
    // println!("{}", str);

    // // destructure tuple
    // let tup = (1, 2, 3);
    // let (mut a, b, c) = tup;
    // a += 6;
    // println!("{} {} {}", a, b, c);

    // // .. means everything else
    // let (x, ..) = (7, 5, 4);

    // // to print the collection of values
    // // println!("{:?}", (1..2)); {:?} is for debugging means print the value

    // // same way can be used to destructure arrays

    // // we can anootate type on a value too
    // println!("{}", 1_i8);

    // // In Rust, the `as` keyword is mainly used for explicit type conversion (casting), and sometimes for renaming imports.
    // let x: f64 = 1.10;
    // let y = x as i32;
    // println!("{}", myfunc(y));

    // // loop_func('f');

    // // type conversion
    // let parsed_int = "7".parse::<i32>().expect("failed to parse");
    // println!("{}", parsed_int);

    // to int from char
}

// fn myfunc(x: i32) -> i32 {
//     "hello".to_string();
//     return x;
// }

// fn loop_func(x: char) {
//    // range and range inclusive: https://youtu.be/BpPEoZW5IiY?si=d_eAISLnrRbELfy-&t=3487
//     for i in 'a'..x {
//         println!("{}", i);
//     }
// }

// btw very cool definition of funcrtion: function is a named block of code that is reusable
