// a greate system programming language
// rust becomes memory safe because of borrower, ownership and lifetimes

fn main() {
    println!("Hello, world!");
    // variables in rust: https://youtu.be/qP7LzZqGh30?si=l5DAixTVOLDSjIRj&t=2227
    let x: i8 = 7; // by default i32
    assert_eq!(x, 7); // if not equal, panic(means immediately terminate the program)
    println!("{}", x);
    // by default variable naturally are immutable
    // constants are immutable
    
}

// btw very cool definition of funcrtion: function is a named block of code that is reusable 