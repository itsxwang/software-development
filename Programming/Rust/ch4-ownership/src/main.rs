// https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#the-stack-and-the-heap
use std::any::type_name_of_val;

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

    let len = calculate_length(&s1[..]); // s1 goes out of scope as we soon it pass to calculatelength function 
    // (s2, len) is a tuple, means the value we pass to calculate_length function is
    println!("The length of '{s1}' is {len}.");

    //   References -- | --
    // https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html

    // reference and borrowing
    // Instead of moving value to a new owner(new variable/funtion/scope...), we can provide a reference to the value which not implements the copy trait
    // refrerence is like a pointer(an address) that we pass to some variable/funtion, so that it can use it and follow that address to access the data/value stored at that address
    // But Unlike a pointer, a reference is guaranteed to point to a valid value of a particular type for the life of that reference.

    // &value -> represent the reference to the value
    // The opposite of referencing by using `&` is dereferencing, which is accomplished with the dereference operator, *.

    let mut s = String::from("hello");

    let r1: &String = &s; // = &s[..] = &s[0..s.len()] and its type can also be &str 

    // let r2 = &mut s;  // -> gives error because we can't make another mutable reference in between of the previous mutable/immutable reference use
    // scope of mutable/immutable reference -> from its declaration to where its last used (in between we can't make another mutable reference)
    // let r2 = &s;  // -> also not possible because we can not have immutable and mutable reference to a value at a time, simultaneously
    /*
        We can still use, {} to create multiple mutable references

    {
        let r1 = &mut s;
    } // r1 goes out of scope here, so we can make a new reference with no problems.

     */

    println!("{r1}");
    let r2 = &mut s; // valid because first reference(r1) to a value( s ) not used after this mutable reference(r2)  
    // println!("{r1}"); // this gives error because this line increase the scope of `r1` reference, and we can't make another mutable reference to the same value in between the scope of of some other mutable/immutable reference

    // Rust enforces a similar rule for combining mutable and immutable references. This code results in an error:
    //     Code ----
    //     let mut s = String::from("hello");

    //     let r1 = &s; // no problem
    //     let r2 = &s; // no problem
    //     let r3 = &mut s; // BIG PROBLEM

    //  println!("{r1}, {r2}, and {r3}");
    //  ---------------------

    // Dangling references
    // https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html#dangling-references
    // a pointer that references a location in memory that may have been given to someone else—by freeing some memory while preserving a pointer to that memory -> dangling pointer

    // the rust compiler will ensure that the data will not go out of scope before the reference to the data does.

    // At any given time, you can have either one mutable reference or any number of immutable references.
    // References must always be valid.

    // The Slice Type
    // https://doc.rust-lang.org/book/ch04-03-slices.html
    // Slices let you reference a contiguous sequence of elements in a collection. A slice is a kind of reference, so it does not have ownership.

    // &StringName[start..end] -> Made up of two things, pointer to the first element of the slice and the length of the slice
    // ----------------------------- &str -----------------------------

    // Note: string slice returns a reference to a part of a String, that can be return &str - means string literals are also String slices

    assert_eq!(type_name_of_val("red") == type_name_of_val(&s1[..]), true); // not panics (note: type_name_of_val only supported for Rust 1.76+)

    let hello = "Здравствуйте";
    println!("{hello}");

    // More precisely `&str` it is two things together:
    // (pointer, length)
    /*     &str {
        ptr: *const u8,
        len: usize,
    } */

    /* Where does the actual text live?

    &str does NOT own the text.

    It only points to text stored somewhere else. */

    // That “somewhere else” can be:
    /* | Source of `&str`         | Where text lives           |
    | ------------------------ | -------------------------- |
    | String literal `"hello"` | **static memory** (embedded in program binary) |
    | Slice of `String`        | **heap**                   |
    | Slice of array           | **stack**                  |
    | Function argument        | depends                    | */

    // &str itself is stored on the stack, but the text it points to can be on the heap, stack, or static(read-only) memory.
    // Things on stack memory stays till program lifetime

    // ------------- a short example -------------

    /*     let name = String::from("plane");
    print(&name); */
    // Memory:
    /*    STACK           HEAP
    -----                 ----
    name (ptr,len,cap) ─▶ plane
    s (ptr,len) ─────────┘          */

    /*     String owns heap memory
    &str borrows it */

    // ---------------------- same with Funtion args: ----------------------
    // Function arguments themselves are always stored on the stack.
    // The text data may be on the stack, heap, or static memory — depending on where it comes from.

    // and
    /*     A function can accept:

    literals (static strings, "")
    heap strings (String)
    stack slices (&StringName[..])
    …using one type: &str */
    // so its encourage to use &str as a function parameter type

    // note: Slicing always creates a reference, never an owned value
    /*
       let name = String::from("plane");
       let slice = name[..]; // this not allowed, because it moves the name value, to slice which not allowed in slicing, so we have to do this, `&name[..]`
    */
    // One-sentence answer to a this question
    // name[..] doesn’t work because slicing produces an `unsized str`, which must be borrowed, and Rust requires you to explicitly write `&` to make that borrow clear.

    // Why str is unsized (the real reason)
    // 1️⃣ SO What “unsized” actually means in Rust
    /*
      In Rust, a type is sized if:
       The compiler knows exactly how many bytes it occupies at compile time
    */

    // deep rule: All unsized types in Rust must live behind a pointer

    /*     | Unsized     | How it’s used                  |
    | ----------- | ------------------------------ |
    | `str`       | `&str`, `Box<str>`             |
    | `[T]`       | `&[T]`, `Box<[T]>`             |
    | `dyn Trait` | `&dyn Trait`, `Box<dyn Trait>` | */
    // If a type’s size depends on runtime data, it must be borrowed or boxed in Rust.

    // array slices also exist
    // just we wanna refer to part of the string we also wanna refer to part of the array
    let a = [1, 2, 3, 4, 5];
    let slice = &a[1..3];
    assert_eq!(slice, &[2, 3]);
    // can use this kind of slice for all sorts of other collections
}

fn calculate_length(s: &str) -> usize {
    let length = s.len(); // len() returns the length of a String
    length
}
