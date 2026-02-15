// https://doc.rust-lang.org/book/ch13-02-iterators.html#processing-a-series-of-items-with-iterators

// https://doc.rust-lang.org/book/ch13-02-iterators.html#the-iterator-trait-and-the-next-method

// https://doc.rust-lang.org/book/ch13-02-iterators.html#methods-that-consume-the-iterator

// https://doc.rust-lang.org/book/ch13-02-iterators.html#methods-that-consume-the-iterator

// https://doc.rust-lang.org/book/ch13-02-iterators.html#closures-that-capture-their-environment

pub fn iterfn() {
    let v1 = vec![1, 2, 3];
    let v1_iter = v1.iter().map(|x| x * 7).collect::<Vec<_>>();
    println!("{:?}", v1_iter);
}

// https://doc.rust-lang.org/book/ch13-04-performance.html#performance-in-loops-vs-iterators
