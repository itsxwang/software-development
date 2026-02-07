use std::fs::File;
use std::io::{self, ErrorKind, Read};

fn read_from_file() -> Result<String, io::Error> {
    let mut s = String::new();
    let mut f = match File::open("../hello") {
        Ok(file) => file,
        Err(error) => match error.kind() {
            ErrorKind::NotFound => File::create("../hello")?,
            other_errors => panic!("Problem opening the file: {:?}", other_errors),
        },
    };

    f.read_to_string(&mut s)?;
    Ok(s)
}

fn main() -> Result<(), io::Error>{
    // https://doc.rust-lang.org/book/ch09-01-unrecoverable-errors-with-panic.html

    // https://doc.rust-lang.org/book/ch09-01-unrecoverable-errors-with-panic.html#unwinding-the-stack-or-aborting-in-response-to-a-panic

    // panic!("crash and burn"); // gt c
    // -> will panic the program -> rust walk back in the stack and in clean up the data for every function it encounters in between

    // https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html#recoverable-errors-with-result

    // ->  Result<T, E> is return by open

    let mut handle = match File::open("../Cargo.toml") {
        Ok(file) => file,
        Err(error) => match error.kind() {
            ErrorKind::NotFound => match File::create("../Cargo.toml") {
                Ok(fc) => fc,
                Err(e) => panic!("Problem creating the file: {:?}", e),
            },
            other_errors => panic!("Problem opening the file: {:?}", other_errors),
        },
    };

    println!("File opened {:?}", handle);

    // https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html#shortcuts-for-panic-on-error

    // https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html#shortcuts-for-panic-on-error

    let mut content = String::new();
    match handle.read_to_string(&mut content) {
        Ok(_) => println!("File content: {}", content),
        Err(e) => panic!("Problem reading the file: {}", e),
    }

    let content = read_from_file().unwrap();
    println!("Hello File content: {}", content);
    // https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html#the--operator-shortcut

    // https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html#where-to-use-the--operator
    File::open("../Cargo.toml")?;
    Ok(())

    // https://doc.rust-lang.org/book/ch09-03-to-panic-or-not-to-panic.html#to-panic-or-not-to-panic

    // https://doc.rust-lang.org/book/ch09-03-to-panic-or-not-to-panic.html#examples-prototype-code-and-tests
    
}
