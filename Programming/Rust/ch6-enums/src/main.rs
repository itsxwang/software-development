#[allow(unused_variables)]
#[allow(dead_code)]
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

    prg(Prg1::Langs(Langs::Rust));

    // https://doc.rust-lang.org/book/ch06-02-match.html#the-optionte-match-pattern -> the-optiont-match-pattern

    // https://doc.rust-lang.org/book/ch06-02-match.html#catch-all-patterns-and-the-_-placeholder

    enum Dice {
        One,
        Two,
        Three,
        Four,
        Five,
        Six,
    }

    fn roll(dice: Dice) -> i32 {
        match dice {
            Dice::One => 1,
            Dice::Six => 6,
            _ => 0,
        }
    }

    // https://doc.rust-lang.org/book/ch06-03-if-let.html#concise-control-flow-with-if-let-and-letelse -> concise-control-flow-with-if-let-and-letelse

    // if let else
    let dice1 = Dice::One;
    if let Dice::One = dice1 {
        println!("dice unlock")
    } else {
        println!("dice not unlock")
    }

    #[derive(Debug)]
    enum UsState {
        Alabama,
        Alaska,
    }

    enum Coin {
        Penny,
        Nickel,
        Dime,
        Quarter(UsState),
    }

    impl UsState {
        fn existed_in(&self, year: u32) -> bool {
            match self {
                UsState::Alabama => year >= 1868,
                UsState::Alaska => year >= 1959,
            }
        }
    }

    // if let else version
    fn describe_state_quarter(coin: Coin) -> Option<String> {
        let state = if let Coin::Quarter(state) = coin {
            state
        } else {
            return None;
        };
        if state.existed_in(1900) {
            Some(format!("{state:?} is pretty old, for America!"))
        } else {
            Some(format!("{state:?} is relatively new."))
        }
    }

    // let...else
    /*     fn describe_state_quarter(coin: Coin) -> Option<String> {
        let Coin::Quarter(state) = coin else { // means if coin is Coin::Quarter then bind `state` variable with the value of `Coin::Quarter` variant
            return None;
        };
        if state.existed_in(1900) {
            Some(format!("{state:?} is pretty old, for America!"))
        } else {
            Some(format!("{state:?} is relatively new."))
        }
    } */

    println!(
        "{:#?}",
        describe_state_quarter(Coin::Quarter(UsState::Alaska))
    );

    println!("{:#?}", describe_state_quarter(Coin::Nickel));

    // https://doc.rust-lang.org/book/ch06-03-if-let.html#staying-on-the-happy-path-with-letelse -> let...else
}
