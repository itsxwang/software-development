// collection of bytes

// https://doc.rust-lang.org/book/ch08-02-strings.html#defining-strings
// https://doc.rust-lang.org/book/ch08-02-strings.html#concatenating-with--or-format

pub fn string_test() {
    let s = String::from("hello");
    let s2 = String::from("world!");

    // push_str -> push slice , push -> push char
    // s + &s2; -> s ownership taken

    println!("{}", format!("{s}-{s2}"));

    // https://doc.rust-lang.org/book/ch08-02-strings.html#indexing-into-strings

    // https://doc.rust-lang.org/book/ch08-02-strings.html#internal-representation of Sptring

    // https://doc.rust-lang.org/book/ch08-02-strings.html#bytes-scalar-values-and-grapheme-clusters

    // https://doc.rust-lang.org/book/ch08-02-strings.html#slicing-strings
    let mut runt = String::new();

/*     loop {
        std::io::stdin().read_line(&mut runt).unwrap();
        if runt.trim().is_empty() {
            println!("empty");
            runt = runt.trim().to_string();
            continue;
        }
        break;
    }
    println!("{}", &runt[0..1]); // this can give error because maybe user put some input chars which each take 2 bytes then 0..1 not make any sense  */

    // contains and replace
    // println!("{}", runt.replace("h", "H"));
    // println!("{}", runt.contains("h"));

    
}
