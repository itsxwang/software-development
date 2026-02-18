fn main() {
    println!("Hello, world!");
    // https://doc.rust-lang.org/book/ch15-00-smart-pointers.html#smart-pointers

    // https://doc.rust-lang.org/book/ch15-01-box.html#using-boxt-to-point-to-data-on-the-heap

    // https://doc.rust-lang.org/book/ch15-01-box.html#storing-data-on-the-heap

    // https://doc.rust-lang.org/book/ch15-01-box.html#enabling-recursive-types-with-boxes

    // a value of recursive type can have another value of the same type

    // https://doc.rust-lang.org/book/ch15-01-box.html#understanding-the-cons-list -> a cons list is a type of recursive type

    /*     enum List<T> {
        Cons(List, T),
        Nil,
    } */
 // -> gives err because thoritically it has infinite size, and rust needs to know the size at compile time of enum

    // https://doc.rust-lang.org/book/ch15-01-box.html#computing-the-size-of-a-non-recursive-type

    // https://doc.rust-lang.org/book/ch15-01-box.html#getting-a-recursive-type-with-a-known-size

    // let's perform indirection ( means storing value by storing pointer to that value ), so compiler can know the size List will take in at compile time

    enum List {
        Cons(Box<List>, i32),
        Nil,
    }

    // instead of storing List directly we boxed it, so the actual List will store on heap and its pointer on stack ( therefore is become of known sized by the compiler ) 
    
}
