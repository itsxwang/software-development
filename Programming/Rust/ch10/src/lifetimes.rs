// https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#validating-references-with-lifetimes

// https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#dangling-references

use std::result;

// means lifetime of a is the same as lifetime of b, and therefore return value ( with same lifetime ) will get a smaller lifetime of all arguments
pub fn longest<'a>(a: &'a str, b: &'a str) -> &'a str {
    if a.len() > b.len() { a } else { b }
}

pub fn lifet() {
    let r;
    let x = 5;
    r = &x;

    println!("r: {}", r);

    // https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#the-borrow-checker

    // https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#generic-lifetimes-in-functions

    // https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#lifetime-annotation-syntax

    // lifetime annotations just describe the relationships of the lifetimes of multiple references to each other without affecting the lifetimes.

    // https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#in-function-signatures

    // https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#lifetime-annotation-syntax

    // https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#relationships

    // https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#in-struct-definitions
}

pub fn struct_ref() {
    let novel = String::from("Call me Ishmael. Some years ago...");
    let first_sentence = novel.split('.').next().unwrap();
    struct ImportantExcerpt<'a> {
        part: &'a str,
    }
}

// https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#lifetime-elision
// Lifetimes on function or method parameters are called input lifetimes, and lifetimes on return values are called output lifetimes.
// ======= compiler applies 3 rules for implicit inference of lifetimes on fn / method parameters and return values: =======
// 1- All parameters will get one separate lifetime
// 2- The second rule is that, if there is exactly one input lifetime parameter, that lifetime is assigned to all output lifetime parameters:
// 3- If there are multiple input lifetimes, but one of them is &self or &mut self, the lifetime of self is assigned to all output lifetimes.

// https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#in-method-definitions

// https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#the-static-lifetime

// https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#generic-type-parameters-trait-bounds-and-lifetimes
//  :z
