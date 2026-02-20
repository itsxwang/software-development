use std::{
    cell::RefCell,
    rc::{Rc, Weak},
    sync::RwLockReadGuard,
};

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

    // ------------------------------------------------------------------------------

    // https://doc.rust-lang.org/book/ch15-06-reference-cycles.html#reference-cycles-can-leak-memory
    // https://doc.rust-lang.org/book/ch15-06-reference-cycles.html#creating-a-reference-cycle

    // https://doc.rust-lang.org/book/ch15-06-reference-cycles.html#preventing-reference-cycles-using-weakt

    #[derive(Debug)]
    struct Tree {
        value: i32,
        parent: RefCell<Weak<Tree>>,
        children: RefCell<Vec<Rc<Tree>>>,
    }

    let leaf = Rc::new(Tree {
        value: 3,
        parent: RefCell::new(Weak::new()),
        children: RefCell::new(vec![]),
    });
    println!(" leaf parent:  {:?}", leaf.parent.borrow().upgrade());
    let branch = Rc::new(Tree {
        value: 5,
        parent: RefCell::new(Weak::new()),
        children: RefCell::new(vec![Rc::clone(&leaf)]),
    });

    println!("branch weak count: {:?}", Rc::weak_count(&branch));
    leaf.parent.replace(Rc::downgrade(&branch));
    println!("branch weak count: {:?}", Rc::weak_count(&branch));

    println!("leaf parent: {:?}", leaf.parent.borrow().upgrade());

    // https://doc.rust-lang.org/book/ch15-06-reference-cycles.html#preventing-reference-cycles-using-weakt

    // https://doc.rust-lang.org/book/ch15-06-reference-cycles.html#visualizing-changes-to-strong_count-and-weak_count
}
