use crate::garden::Garden;
use ch7_code_organization::r3;
pub use garden::veg::Asparagus;
pub mod garden;

mod cu {

    pub mod xx {

        fn a() {
            println!("a func");
        }
        pub struct Rks {
            pub Color: String,
            Element: String,
        }

        impl Rks {
            pub fn init(color: &str) -> Rks {
                Rks {
                    Color: color.to_string(),
                    Element: "Element".to_string(),
                }
            }
        }
    }
}
fn main() {
    let rks_in = cu::xx::Rks::init("red");
    rks_in.Color;
    // rks_in.Element; // private field so compiler give error
    //  ch7_code_organization::r3(); // `use`  creates shortcut
    // https://doc.rust-lang.org/book/ch07-01-packages-and-crates.html#packages-and-crates ->

    // https://doc.rust-lang.org/book/ch07-02-defining-modules-to-control-scope-and-privacy.html#modules-cheat-sheet
    Asparagus {};
    r3();
    Garden {};

    // https://doc.rust-lang.org/book/ch07-03-paths-for-referring-to-an-item-in-the-module-tree.html#starting-relative-paths-with-super

    // https://doc.rust-lang.org/book/ch07-03-paths-for-referring-to-an-item-in-the-module-tree.html#making-structs-and-enums-public

    // https://doc.rust-lang.org/book/ch07-04-bringing-paths-into-scope-with-the-use-keyword.html#bringing-paths-into-scope-with-the-use-keyword.

    // https://doc.rust-lang.org/book/ch07-04-bringing-paths-into-scope-with-the-use-keyword.html#re-exporting-names-with-pub-use

    // https://doc.rust-lang.org/book/ch07-04-bringing-paths-into-scope-with-the-use-keyword.html#using-nested-paths-to-clean-up-use-lists

    // https://doc.rust-lang.org/book/ch07-04-bringing-paths-into-scope-with-the-use-keyword.html#importing-items-with-the-glob-operator

    // https://doc.rust-lang.org/book/ch07-05-separating-modules-into-different-files.html#separating-modules-into-different-files

    // `as` can also be for import renaming
    //  use std::io::Result as IoResult; -> example
    //  same pub rule with apply with as, reexport with `pub use` so other scopes like modules, can also refer to that item with that alias
    // as exists only at compile time

    // Test the Restaurant struct
    use ch7_code_organization::Restaurant;

    let mut my_restaurant = Restaurant::new("Rusty Bites".to_string(), 50);
    println!("Initial status: {}", my_restaurant.status());

    my_restaurant.open();
    println!("Status after opening: {}", my_restaurant.status());

    match my_restaurant.admit_customers(30) {
        Ok(_) => println!("Successfully admitted customers"),
        Err(e) => println!("Error: {}", e),
    }

    println!("Status after admitting customers: {}", my_restaurant.status());

    match my_restaurant.admit_customers(30) {
        Ok(_) => println!("Successfully admitted customers"),
        Err(e) => println!("Error: {}", e), // This should fail - not enough capacity
    }

    match my_restaurant.serve_customers(15) {
        Ok(_) => println!("Successfully served customers"),
        Err(e) => println!("Error: {}", e),
    }

    println!("Final status: {}", my_restaurant.status());
    my_restaurant.close();
}
