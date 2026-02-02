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
    println!("{:#?} {} {:#?} {}", home.kind, home.address, loopback.kind, loopback.address);
}
