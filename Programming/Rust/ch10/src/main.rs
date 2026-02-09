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

println!("x {base:?}")
    // https://doc.rust-lang.org/book/ch10-01-syntax.html#in-enum-definitions

    // https://doc.rust-lang.org/book/ch10-01-syntax.html#in-struct-definitions



    // https://doc.rust-lang.org/book/ch10-01-syntax.html#performance-of-code-using-generics
    
    
    
}

