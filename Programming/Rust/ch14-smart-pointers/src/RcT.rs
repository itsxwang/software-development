// https://doc.rust-lang.org/book/ch15-04-rc.html#rct-the-reference-counted-smart-pointer

// https://doc.rust-lang.org/book/ch15-04-rc.html#sharing-data

// https://doc.rust-lang.org/book/ch15-04-rc.html#cloning-to-increase-the-reference-count

use std::rc::Rc;

enum List {
    Cons(i32, Rc<List>),
    Nil,
}

use crate::RcT::List::{Cons, Nil};
pub fn rc_t() {
    let a = Rc::new(Cons(5, Rc::new(Cons(10, Rc::new(Nil)))));
    let b = Cons(3, Rc::clone(&a)); // a.clone is different from this clone, .clone make deep copy, Rc::clone just make one more new pointer to the Rc<List> means that will be 1 more owner of Rc<List> and it increase the reference count
    println!("refs after b {}", Rc::strong_count(&a)); // reference count of a is 2 at this point

    {
        let c = Cons(4, Rc::clone(&a)); 
        println!("refs {}", Rc::strong_count(&a)); // 3 at this point
    }
    println!("refs {}", Rc::strong_count(&a)); // 2 at this point because c owner goes out of scope, and ref count decrease when owners goes out of scope

    //  https://doc.rust-lang.org/book/ch15-04-rc.html#cloning-to-increase-the-reference-count
}
