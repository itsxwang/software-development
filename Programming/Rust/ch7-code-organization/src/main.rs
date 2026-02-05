use crate::garden::Garden;
use ch7_code_organization::r3;
use garden::veg::Asparagus;
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
}
