fn main() {
    // https://doc.rust-lang.org/book/ch06-00-enums.html#enums-and-pattern-matching

    // https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html#defining-an-enum

    // structs -> group realted data together using fields
    // enums ->  group related behavior together using variants, basically let you define that value is one of the possible set of values

    #[derive(Debug)]
    enum IP {
        V4,
        V6,
    }

    /*     let ip4 = IP::v4;
    let ip6 = IP::v6; */

    #[derive(Debug)]
    struct IpAddr {
        kind: IP,
        address: String,
    }

    let home = IpAddr {
        kind: IP::V4,
        address: String::from("127.0.0.1"),
    };

    let loopback = IpAddr {
        kind: IP::V6,
        address: String::from("::1"),
    };

    println!("{:#?}\n{:#?}", home, loopback);
    println!(
        "{:#?} {} {:#?} {}",
        home.kind, home.address, loopback.kind, loopback.address
    );

    enum Message {
        Text(String),
        Address(String),
    }
    let msg = Message::Text(String::from("Hello"));
    let msg2 = Message::Address(String::from("xyz"));
    match msg {
        Message::Text(s) => println!("{}", s),
        Message::Address(s) => println!("{}", s),
    };
    match msg2 {
        Message::Text(s) => println!("{}", s),
        Message::Address(s) => println!("{}", s),
    };

    enum Test {
        Dir(i32, String),
    }
    let test = Test::Dir(1, String::from("test"));
    match test {
        Test::Dir(a, b) => println!("{} {}", a, b),
    }

    // option enum -> https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html#the-option-enum -> help to implement that either a value can be something or nothing
    let some_number: Option<i32> = Some(5);
    let some_string = Some("a string");
    let absent_number: Option<i32> = None;

    // https://doc.rust-lang.org/book/ch06-02-match.html#the-match-control-flow-construct -> match construct

    // some ex

    enum Langs {
        Rust,
        C,
        Zig,
        Go,
    }

    fn lang(lan: &Langs) -> String {
        match lan {
            Langs::Rust => "rust".to_string(),
            Langs::C => "C".to_string(),
            Langs::Zig => "zig".to_string(),
            Langs::Go => "Go".to_string(),
        }
    }

    // https://doc.rust-lang.org/book/ch06-02-match.html#patterns-that-bind-to-values =>

    enum Prg1 {
        Tools,
        Langs(Langs),
    }

    fn prg(prg: Prg1) -> String {
        match prg {
            Prg1::Tools => "tools".to_string(),
            Prg1::Langs(lan) => {
                println!("Choose lang {}", lang(&lan));

                lang(&lan)
            }
        }
    }

    prg(Prg1::Langs((Langs::Rust)));
}
