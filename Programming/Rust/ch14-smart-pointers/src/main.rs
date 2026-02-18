use std::ops::{Deref, DerefMut};

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

    // https://doc.rust-lang.org/book/ch15-02-deref.html#treating-smart-pointers-like-regular-references

    // https://doc.rust-lang.org/book/ch15-02-deref.html#following-the-reference-to-the-value

    // https://doc.rust-lang.org/book/ch15-02-deref.html#using-boxt-like-a-reference

    // https://doc.rust-lang.org/book/ch15-02-deref.html#defining-our-own-smart-pointer

    // https://doc.rust-lang.org/book/ch15-02-deref.html#defining-our-own-smart-pointer

    // https://doc.rust-lang.org/book/ch15-02-deref.html#implementing-the-deref-trait

    struct MyBox<T>(T);
    impl<T> Deref for MyBox<T> {
        type Target = T; // Means Deref use T as a Associated type ( its 1 more way to declare generic params )
        fn deref(&self) -> &T {
            &self.0
        }
    }

    impl<T> DerefMut for MyBox<T> {
        fn deref_mut(&mut self) -> &mut T {
            &mut self.0
        }
    }

    let a = 7;
    let mut myBox = MyBox(a);

    let k = *myBox;

    fn double_it(n: &mut i32) {
        *n *= 2;
    }

    double_it(&mut myBox); // deref coercion automatically happens because we implement DeferMut for myBox, means it automatically gives param mut ref of type i32 (of inside `myBox`)

    // https://doc.rust-lang.org/book/ch15-02-deref.html#using-deref-coercion-in-functions-and-methods

    // https://doc.rust-lang.org/book/ch15-02-deref.html#handling-deref-coercion-with-mutable-references
}
