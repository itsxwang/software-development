use string::string_test;
mod string;

fn main() {
    println!("Hello, world!");
    let mut v: Vec<i32> = Vec::new();
    v.push(1);
    v.push(2);

    // macro for assigning initila elements to vector
    let mut v2: Vec<i32> = vec![1, 2, 3];

    println!("{:?}", v);
    println!("{:?}", v2);

    // https://doc.rust-lang.org/book/ch08-01-vectors.html#reading-elements-of-vectors

    // refer
    let first = &v2[0];

    // refer
    let first = match v2.get(0) {
        Some(first) => first,
        None => &0,
    };

    println!("{:?}", first);

    // https://doc.rust-lang.org/book/ch08-01-vectors.html#iterating-over-the-values-in-a-vector

    for i in &mut v {
        *i += 2;
    }

    // https://doc.rust-lang.org/book/ch08-01-vectors.html#using-an-enum-to-store-multiple-types

    #[derive(Debug)]
    enum SpreadsheetCell {
        Int(i32),
        Float(f64),
        Text(String),
    }

    let row = vec![
        SpreadsheetCell::Int(3),
        SpreadsheetCell::Text(String::from("blue")),
        SpreadsheetCell::Float(10.12),
    ];

    string_test();
}
