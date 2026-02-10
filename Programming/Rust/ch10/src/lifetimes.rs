// https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#validating-references-with-lifetimes

// https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#dangling-references

use std::result;

// means lifetime of a is the same as lifetime of b, and therefore return value ( with same lifetime ) will get a smaller lifetime of all arguments
pub fn compare<'a>(a: &'a str, b: &'a str) -> &'a str {
    if a.len() > b.len() { a } else { b }
}

pub fn lifet<'a>() -> &'a i32 {
    let r;
    let x = 5;
    r = &x;

    println!("r: {}", r);

    &7
    // https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#the-borrow-checker

    // https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#generic-lifetimes-in-functions

    // https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#lifetime-annotation-syntax

    // lifetime annotations just describe the relationships of the lifetimes of multiple references to each other without affecting the lifetimes.

    // https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#in-function-signatures

    // https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#lifetime-annotation-syntax

    // https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#relationships
}



