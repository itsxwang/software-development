// struct -> https://doc.rust-lang.org/book/ch05-00-structs.html#using-structs-to-structure-related-data

use std::string::String;

#[allow(unused_variables)]
#[allow(dead_code)]

fn main() {
    println!("Hello, world!");

    struct Color2 {
        red: u8,
        green: u8,
        blue: u8,
        cat: String,
    }
    let black = Color2 {
        red: 0,
        green: 0,
        blue: 0,
        cat: String::from("black"),
    };
    println!(
        "Color: {} {} {} {}",
        black.red, black.green, black.blue, black.cat
    );

    let light_black = Color2 {
        red: 10,
        ..black // copy all fields from black
    };
    println!(
        "Color: {} {} {} {}",
        light_black.red, light_black.green, light_black.blue, light_black.cat
    );

    println!(
        "Color: {} {} {}",
        black.red,
        black.green,
        black.blue, // black.cat -> because String moved from black to light_black instance of a struct `Color`
    );

    // tuple-structs : simlar to tuples
    struct Color(i32, i32, i32);
    struct Point(i32, i32, i32);
    let black = Color(0, 0, 0);
    let origin = Point(0, 0, 0);
    // https://doc.rust-lang.org/book/ch05-01-defining-structs.html#creating-different-types-with-tuple-structs
    // Note : that the black and origin values are different types because they’re instances of different tuple structs. Each struct you define is its own type, even though the fields within the struct might have the same types. For example, a function that takes a parameter of type Color cannot take a Point as an argument, even though both types are made up of three i32 values.

    // tuple-struct
    // destructuring
    let Color(r, g, b) = black;
    println!("Color: {} {} {}", r, g, b);
    let Point(x, y, z) = origin;
    println!("Point: {} {} {}", x, y, z);
    
    // https://doc.rust-lang.org/book/ch05-01-defining-structs.html#defining-unit-like-structs
    // unit-like structs

    // https://doc.rust-lang.org/book/ch05-01-defining-structs.html#ownership-of-struct-data  

}
