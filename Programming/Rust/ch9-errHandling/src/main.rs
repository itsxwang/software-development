fn main() {

    // https://doc.rust-lang.org/book/ch09-01-unrecoverable-errors-with-panic.html

    // https://doc.rust-lang.org/book/ch09-01-unrecoverable-errors-with-panic.html#unwinding-the-stack-or-aborting-in-response-to-a-panic

    panic!("crash and burn"); // gt c
    // -> will panic the program -> rust walk back in the stack and in clean up the data for every function it encounters in between
}
