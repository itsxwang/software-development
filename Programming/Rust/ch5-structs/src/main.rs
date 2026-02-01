// struct -> https://doc.rust-lang.org/book/ch05-00-structs.html#using-structs-to-structure-related-data

use std::string::String;

#[allow(unused_variables)]
#[allow(dead_code)]

struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
    fn width(&self) -> bool {
        self.width > 0
    }
}

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
    #[derive(Debug)]
    struct Color(u32, u32, u32);
    struct Point(u32, u32, u32);
    let black = Color(710, 70, 0);
    let origin = Point(0, 0, 0);
    // https://doc.rust-lang.org/book/ch05-01-defining-structs.html#creating-different-types-with-tuple-structs
    // Note : that the black and origin values are different types because they’re instances of different tuple structs. Each struct you define is its own type, even though the fields within the struct might have the same types. For example, a function that takes a parameter of type Color cannot take a Point as an argument, even though both types are made up of three u32 values.

    // tuple-struct
    // destructuring
    let Color(r, g, b) = black;
    println!("Color: {} {} {}", r, g, b);
    let Point(x, y, z) = origin;
    println!("Point: {} {} {}", x, y, z);

    // https://doc.rust-lang.org/book/ch05-01-defining-structs.html#defining-unit-like-structs
    // unit-like structs

    // https://doc.rust-lang.org/book/ch05-01-defining-structs.html#ownership-of-struct-data

    // printing a struct and std:fmt:Display demestify and other things about println! -> https://doc.rust-lang.org/book/ch05-02-example-structs.html#adding-functionality-with-derived-traits

    // printing struct using debug format
    println!("{black:#?}");

    // dbg!
    dbg!(&black);

    // https://doc.rust-lang.org/book/ch05-03-method-syntax.html#methods
    let rect1 = Rectangle {
        width: 1,
        height: 50,
    };

    println!(
        "The area of the rectangle is {} square pixels.",
        rect1.area()
    );
    println!(
        "{}",
        rect1.width() // rs consider this method
    );
    
    println!(
        "{}",
        rect1.width // rs consider this field 
    );

    // https://doc.rust-lang.org/book/ch05-03-method-syntax.html#wheres-the---operator -> -> and . operator alternatives in rust


}
