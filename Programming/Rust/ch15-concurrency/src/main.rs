use std::thread;
fn main() {
    // https://doc.rust-lang.org/book/ch16-01-threads.html#using-threads-to-run-code-simultaneously

    // https://doc.rust-lang.org/book/ch16-01-threads.html#creating-a-new-thread-with-spawn

    let handle =     thread::spawn(|| {
        for i in 1..10 {
            println!("hi number {i} from the spawned thread!");
        }
    });

    for i in 1..5 {
        println!("hi number {i} from the main thread!");
    }

    handle.join().unwrap();
    // https://doc.rust-lang.org/book/ch16-01-threads.html#waiting-for-all-threads-to-finish

    // https://doc.rust-lang.org/book/ch16-01-threads.html#using-move-closures-with-threads
    
}
