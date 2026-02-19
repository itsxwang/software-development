use std::{cell::RefCell, rc::Rc};

pub fn ref_c() {
    // https://doc.rust-lang.org/book/ch15-05-interior-mutability.html#refcellt-and-the-interior-mutability-pattern

    // https://doc.rust-lang.org/book/ch15-05-interior-mutability.html#enforcing-borrowing-rules-at-runtime

    // https://doc.rust-lang.org/book/ch15-05-interior-mutability.html#using-interior-mutability

    // https://doc.rust-lang.org/book/ch15-05-interior-mutability.html#testing-with-mock-objects

    // https://doc.rust-lang.org/book/ch15-05-interior-mutability.html#tracking-borrows-at-runtime

    let vecRef = RefCell::new(5);
    let br = vecRef.borrow();

    // ✅ The Correct Way
    let my_cell = RefCell::new(5); // The "Locker" is now safe in a variable
    let vec_ref = my_cell.borrow_mut(); // The "Key" is valid as long as my_cell exists
    println!("{}", vec_ref);

    let value = Rc::new(RefCell::new(5));
    *value.borrow_mut() = 7;
    let e = value.borrow();
    println!("{}", e);

    // https://doc.rust-lang.org/book/ch15-05-interior-mutability.html#allowing-multiple-owners-of-mutable-data
}
