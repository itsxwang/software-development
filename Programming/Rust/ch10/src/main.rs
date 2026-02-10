use traits::{User, summarize};

mod traits;

fn main() {
    // https://doc.rust-lang.org/book/ch10-00-generics.html#generic-types-traits-and-lifetimes

    // https://doc.rust-lang.org/book/ch10-00-generics.html#removing-duplication-by-extracting-a-function

    // in the same way function allow code to operate on abstract values ( params ), generics allow code to operate on abstract types.

    // https://doc.rust-lang.org/book/ch10-01-syntax.html#generic-data-types

    // https://doc.rust-lang.org/book/ch10-01-syntax.html#in-function-definitions
    // ex: fn largest<T>(list: &[T]) -> &T { -> We read this definition as “The function largest is generic over some type T.”

    fn largest<T: std::cmp::PartialOrd>(list: &[T]) -> &T {
        let mut largest = &list[0];
        for i in list {
            largest = i;
            if i > largest {
                largest = i;
            }
        }
        largest
    }

    // generic struct
    struct Point<T> {
        x: T,
        y: T,
    }

    impl<T> Point<T> {
        fn x(&self) -> &T {
            &self.x
        }
    }

    impl Point<f32> {
        fn distance_from_origin(&self) -> f32 {
            (self.x.powi(2) + self.y.powi(2)).sqrt()
        }
    }

    let integer = Point { x: 5, y: 10 };
    let float = Point { x: 1.0, y: 4.0 };

    println!("integer.x = {}", integer.x);
    println!("float.x = {}", float.x);

    let p = Point { x: 5, y: 10 };
    println!("p.x = {}", p.x());

    let p1 = Point { x: 5.0, y: 10.0 };
    p1.distance_from_origin();

    let base = 2.0_f64;
    let result = base.powi(3);

    println!("x {base:?}");
    // https://doc.rust-lang.org/book/ch10-01-syntax.html#in-enum-definitions

    // https://doc.rust-lang.org/book/ch10-01-syntax.html#in-struct-definitions

    let us1 = User {
        name: "John".to_string(),
        post: "post".to_string(),
    };
    println!("{}", us1.summarize());
    println!("{}", us1.summarize2()); // default method of traits are optional to impl -> impl traitname for typename {}

    // we can implement a trait on a type only if either the trait or the type, or both, are local to our crate

    // https://doc.rust-lang.org/book/ch10-02-traits.html#using-default-implementations

    // https://doc.rust-lang.org/book/ch10-02-traits.html#using-traits-as-parameters

    // https://doc.rust-lang.org/book/ch10-02-traits.html#trait-bound-syntax

    // pub fn user_print<T: summarize>(user: &T) -> String { user.summarize() }() // user accepts any type that implements the summarize trait
    // short
    /*     pub fn user_print(user: &impl summarize) -> String {
        user.summarize()
    } */

    // user accepts any type that implements the summarize trait

    // https://doc.rust-lang.org/book/ch10-02-traits.html#multiple-trait-bounds-with-the--syntax

    // https://doc.rust-lang.org/book/ch10-02-traits.html#clearer-trait-bounds-with-where-clauses

    // https://doc.rust-lang.org/book/ch10-02-traits.html#multiple-trait-bounds-with-the--syntax

    // https://doc.rust-lang.org/book/ch10-02-traits.html#clearer-trait-bounds-with-where-clauses

    pub fn user_print<T: summarize>(user: &T) -> String
    where
        T: summarize,
    {
        user.summarize()
    }

    // https://doc.rust-lang.org/book/ch10-02-traits.html#returning-types-that-implement-traits

    // https://doc.rust-lang.org/book/ch10-02-traits.html#using-trait-bounds-to-conditionally-implement-methods
}
