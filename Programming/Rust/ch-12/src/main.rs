use std::thread;
use std::time::Duration;

fn main() {
    // https://doc.rust-lang.org/book/ch13-00-functional-features.html#functional-language-features-iterators-and-closures

    // https://doc.rust-lang.org/book/ch13-01-closures.html#closures

    // https://doc.rust-lang.org/book/ch13-01-closures.html#inferring-and-annotating-closure-types

    let expensive_closure = |num: u32| -> u32 {
        println!("calculating slowly...");
        thread::sleep(Duration::from_secs(2));
        num
    };
    expensive_closure(7);

    // https://doc.rust-lang.org/book/ch13-01-closures.html#capturing-references-or-moving-ownership

    let list = vec![1, 2, 3];
    thread::spawn(move || println!("{:?}", list))
        .join()
        .unwrap();

    // https://doc.rust-lang.org/book/ch13-01-closures.html#moving-captured-values-out-of-closures
}
