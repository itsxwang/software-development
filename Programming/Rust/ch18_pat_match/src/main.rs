use std::{sync::Arc, vec::Splice};

fn main() {
    // https://doc.rust-lang.org/book/ch19-00-patterns.html#patterns-and-matching

    // https://doc.rust-lang.org/book/ch19-01-all-the-places-for-patterns.html#match-arms

    let (tx, rx) = std::sync::mpsc::channel();
    std::thread::spawn(move || {
        for val in [1, 2, 3] {
            tx.send(val).unwrap();
        }
    });

    while let Ok(value) = rx.recv() {
        println!("{value}");
    }

    let x = 4;
    let y = false;

    match x {
        4 | 5 | 6 if y => println!("yes"),
        _ => println!("no"),
    }

    // https://doc.rust-lang.org/book/ch19-03-pattern-syntax.html#nested-structs-and-enums

    // https://doc.rust-lang.org/book/ch19-03-pattern-syntax.html#using--bindings

    enum Message {
        Hello { id: i32 },
    }

    let msg = Message::Hello { id: 7 };

    match msg {
        Message::Hello { id: id @ 1..=7 } => {
            println!("Found an id in range: {id}")
        }
        Message::Hello { id: 10..=12 } => {
            println!("Found an id in another range")
        }
        Message::Hello { id } => println!("Found some other id: {id}"),
    }
}
