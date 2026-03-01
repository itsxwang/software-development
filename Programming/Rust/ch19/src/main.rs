use std::slice;

static mut COUNTER: u32 = 7;
const THRESHOLD: i32 = 10;

union MyUnion {
    i: u32,
    f: f32,
}
fn main() {
    // https://doc.rust-lang.org/book/ch20-01-unsafe-rust.html#unsafe-rust
    let mut un = MyUnion { i: 7 };
    unsafe {
        println!("union un.i is: {}", un.i);
        un.f = 77.0;
        println!("union un.i is: {}", un.i);
        println!("union un.f is: {}", un.f);
    }

    let mut num = 5;
    let r1 = &raw const num;
    let r2 = &raw mut num;

    let address = 0x012345usize;
    let r = &raw const address; // address as *const i32(or any type numeric type) -> can also be done

    unsafe {
        println!("r is: {}", *r);
        println!("r1 is: {}", *r1);
        println!("r2 is: {}", *r2);
    }

    println!("{:?}", split_at_mut(&mut vec![12, 77, 9, 6], 2));

    unsafe extern "C" {
        safe fn abs(input: i32) -> i32;
    }
    println!("{}", abs(-1));

    unsafe {
        println!("COUNTER: {}", *(&raw const COUNTER));
    }

    // our default add Implementation, by imeplementing associative trait of + operator for our type //
    struct Point {
        x: f64,
        y: f64,
    }

    impl std::ops::Add for Point {
        type Output = Point;

        fn add(self, other: Point) -> Point {
            Point {
                x: self.x + other.x,
                y: self.y + other.y,
            }
        }
    }
    let p1 = Point { x: 1.0, y: 2.0 };
    let p2 = Point { x: 3.0, y: 4.0 };
    let p3 = p1 + p2;
    println!("p3.x = {}, p3.y = {}", p3.x, p3.y);

    // --- our default add Implementation, by imeplementing associative trait of + operator for our type --- //
}

unsafe fn add_to_count(inc: u32) {
    unsafe {
        COUNTER += inc;
    }
}

fn split_at_mut(values: &mut [i32], mid: usize) -> (&mut [i32], &mut [i32]) {
    let len = values.len();
    let ptr = values.as_mut_ptr();
    assert!(mid <= len);
    unsafe {
        (
            slice::from_raw_parts_mut(ptr, mid),
            slice::from_raw_parts_mut(ptr.add(mid), len - mid),
        )
    }
    
    
}

// https://doc.rust-lang.org/book/ch20-01-unsafe-rust.html#accessing-or-modifying-a-mutable-static-variable

// https://doc.rust-lang.org/book/ch20-01-unsafe-rust.html#implementing-an-unsafe-trait

// ----------------------------

// https://doc.rust-lang.org/book/ch20-02-advanced-traits.html#advanced-traits

// https://doc.rust-lang.org/book/ch20-02-advanced-traits.html#using-default-generic-parameters-and-operator-overloading

// --------------------------

// https://doc.rust-lang.org/book/ch20-03-advanced-types.html#advanced-types

// https://doc.rust-lang.org/book/ch20-03-advanced-types.html#type-safety-and-abstraction-with-the-newtype-pattern

// https://doc.rust-lang.org/book/ch20-03-advanced-types.html#type-synonyms-and-type-aliases
