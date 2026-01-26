// https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#the-stack-and-the-heap

fn main() {
    // All data stored on the stack must have a known, fixed size. -- Stack main thing
    // knowing that the main purpose of ownership is to manage heap data can help explain why it works the way it does - heap
    // heap is a place where we can store data that has a variable size at compile time.

    // ownership rules
        // Each value in Rust has an owner.
        // There can only be one owner at a time.
        // When the owner goes out of scope, the value will be dropped.

    println!("Hello, world!");
    // https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#the-string-type
    
}
