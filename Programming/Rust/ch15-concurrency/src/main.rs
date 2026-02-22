use std::{
    sync::{Mutex, mpsc},
    thread,
};

use crate::share_st::incr;
mod deadlock;
mod share_st;
fn main() {
    // https://doc.rust-lang.org/book/ch16-01-threads.html#using-threads-to-run-code-simultaneously

    // https://doc.rust-lang.org/book/ch16-01-threads.html#creating-a-new-thread-with-spawn
    let (tx, rx) = mpsc::channel(); // multiple producer single consumer, means it has multiple sending ends but only one receiving end.
    let v = vec![1, 2, 3];
    let handle = thread::spawn(move || {
        for i in 1..10 {
            println!("hi number {i} from the spawned thread!");
        }

        println!("number v: {v:?}");
        tx.send(v).unwrap();
    });

    let mut for_loop_done = false;
    let result = loop {
        match rx.try_recv() {
            Ok(rec) => break rec,
            Err(mpsc::TryRecvError::Empty) => {
                println!("Main thread: still waiting for data...");
                if for_loop_done {
                    continue;
                } else {
                    for i in 1..5 {
                        println!("hi number {i} from the main thread!");
                        if i == 4 {
                            for_loop_done = true;
                            continue;
                        }
                    }
                    continue;
                }
            }
            Err(mpsc::TryRecvError::Disconnected) => {
                panic!("The channel disconnected unexpectedly!");
            }
        }
    };
    println!("resultant vector: {result:?}");

    handle.join().unwrap();
    // https://doc.rust-lang.org/book/ch16-01-threads.html#waiting-for-all-threads-to-finish

    // https://doc.rust-lang.org/book/ch16-01-threads.html#using-move-closures-with-threads

    // https://doc.rust-lang.org/book/ch16-02-message-passing.html#transfer-data-between-threads-with-message-passing

    // https://doc.rust-lang.org/book/ch16-02-message-passing.html#transferring-ownership-through-channels

    // https://doc.rust-lang.org/book/ch16-02-message-passing.html#sending-multiple-values

    // https://doc.rust-lang.org/book/ch16-02-message-passing.html#creating-multiple-producers

    // https://doc.rust-lang.org/book/ch16-03-shared-state.html#controlling-access-with-mutexes

    // https://doc.rust-lang.org/book/ch16-03-shared-state.html#the-api-of-mutext
    let m = Mutex::new(5);

    {
        let mut num = m.lock().unwrap();
        *num = 6;
    }

    println!("m = {m:?}");

    // https://doc.rust-lang.org/book/ch16-03-shared-state.html#shared-access-to-mutext

    incr();

    // https://doc.rust-lang.org/book/ch16-03-shared-state.html#comparing-refcelltrct-and-mutextarct
    deadlock::deadlock_example();

    // https://doc.rust-lang.org/book/ch16-04-extensible-concurrency-sync-and-send.html#extensible-concurrency-with-send-and-sync

    // https://doc.rust-lang.org/book/ch16-04-extensible-concurrency-sync-and-send.html#transferring-ownership-between-threads
}
