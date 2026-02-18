
// https://doc.rust-lang.org/book/ch14-00-more-about-cargo.html#more-about-cargo-and-cratesio

// https://doc.rust-lang.org/book/ch14-01-release-profiles.html#customizing-builds-with-release-profiles

// https://doc.rust-lang.org/book/ch14-02-publishing-to-crates-io.html#publishing-a-crate-to-cratesio

// https://doc.rust-lang.org/book/ch14-02-publishing-to-crates-io.html#documentation-comments-as-tests

// https://doc.rust-lang.org/book/ch14-02-publishing-to-crates-io.html#contained-item-comments

mod worspaces;

//! # Add
//!
//! Calculations more easy!

/// Adds one to the number given.
///
/// # Examples
/// ```
/// let arg = 5;
/// let answer = ch13_cargo::add_one(arg);
///
/// assert_eq!(6, answer);
/// ```
pub fn add_one(x: i32) -> i32 {
    let answer = x + 1;
    answer
}

/// Adds two to the number given.
///
/// # Examples
/// ```
///  let arg = 5;
///  let answer = ch13_cargo::add_two(arg);
///  assert_eq!(7, answer);
///
///
/// ```
pub fn add_two(x: i32) -> i32 {
    let answer = x + 2;
    answer
}

/// Represents a color with Red, Green, and Blue values.
/// # Examples
///  ```
///  let c = ch13_cargo::Color(122, 17, 40);
///  assert_eq!(c.0, 122);
/// ```
pub struct Color(pub i32, pub i32, pub i32);

// https://doc.rust-lang.org/book/ch14-02-publishing-to-crates-io.html#exporting-a-convenient-public-api

// https://doc.rust-lang.org/book/ch14-02-publishing-to-crates-io.html#setting-up-a-cratesio-account

// https://doc.rust-lang.org/book/ch14-02-publishing-to-crates-io.html#adding-metadata-to-a-new-crate

// https://doc.rust-lang.org/book/ch14-02-publishing-to-crates-io.html#publishing-a-new-version-of-an-existing-crate 


// https://doc.rust-lang.org/book/ch14-03-cargo-workspaces.html#adding-a-test-to-a-workspace
    