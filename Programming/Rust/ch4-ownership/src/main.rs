// https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#the-stack-and-the-heap

#[allow(unused_variables)]
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
    // Rust calls drop automatically at the closing curly bracket

    let x = String::from("hello");
    let y = x;
    // println!("{} {}", x, y); x not valid anymore because to avoid double free memory problem, rust make x invalid from the point it assigned to y (a new owner)
    // to make a copy of String, .copy(), which also copy the heap data

    // if a type implements the copy trait the value which use that type not move instead it make copy of itself when assigned to some new variable (owner)

    /* Rust won’t let us annotate a type with Copy if the type, or any of its parts, has implemented the Drop trait. If the type needs something special to happen when the value goes
    out of scope and we add the Copy annotation to that type, we’ll get a compile-time error. */

    let s1 = String::from("hello");

    let (s2, len) = calculate_length(s1); // s1 goes out of scope as we soon it pass to calculatelength function 
    // (s2, len) is a tuple, means the value we pass to calculate_length function is
    println!("The length of '{s2}' is {len}.");

    //   References -- | --
    // https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html

    // reference and borrowing
    // Instead of moving value to a new owner(new variable/funtion/scope...), we can provide a reference to the value which not implements the copy trait
    // refrerence is like a pointer(an address) that we pass to some variable/funtion, so that it can use it and follow that address to access the data/value stored at that address
    // But Unlike a pointer, a reference is guaranteed to point to a valid value of a particular type for the life of that reference.

    // &value -> represent the reference to the value
    // The opposite of referencing by using `&` is dereferencing, which is accomplished with the dereference operator, *.

    let mut s = String::from("hello");
    
    let r1 = &mut s;
    // let r2 = &mut s;
    // println!("{r1}, {r2}");
    // above code gives error because we can have only one mutable reference to a value at a time 

}

fn calculate_length(s: String) -> (String, usize) {
    let length = s.len(); // len() returns the length of a String

    (s, length)
}
