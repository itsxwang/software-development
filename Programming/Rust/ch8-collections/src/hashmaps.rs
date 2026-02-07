// https://doc.rust-lang.org/book/ch08-03-hash-maps.html#creating-a-new-hash-map

use std::{clone, collections::HashMap};

pub fn hash_maps() {
    let mut scores = HashMap::new();
    scores.insert(String::from("Blue"), 10);
    scores.insert(String::from("Yellow"), 50);
    scores.insert(String::from("Yellow"), 71); // update
    let team_b = scores.get("Blue").copied().unwrap_or(0); // and .cloned use for those types that not implement copy trait
    println!("{:?}", team_b);

    // iterate on key pair using for loop
    for (key, value) in &scores {
        println!("{}: {}", key, value);
    }

    // https://doc.rust-lang.org/book/ch08-03-hash-maps.html#accessing-values-in-a-hash-map

    // https://doc.rust-lang.org/book/ch08-03-hash-maps.html#managing-ownership-in-hash-maps

    // https://doc.rust-lang.org/book/ch08-03-hash-maps.html#updating-a-hash-map

    // https://doc.rust-lang.org/book/ch08-03-hash-maps.html#adding-a-key-and-value-only-if-a-key-isnt-present

    scores.entry(String::from("Blue")).or_insert(7);

    let e = scores.entry(String::from("Red")).or_insert(7);
    println!("{:?}", e);

    println!("{:?}", scores);

    // https://doc.rust-lang.org/book/ch08-03-hash-maps.html#updating-a-value-based-on-the-old-value

    // https://doc.rust-lang.org/book/ch08-03-hash-maps.html#hashing-functions

}
