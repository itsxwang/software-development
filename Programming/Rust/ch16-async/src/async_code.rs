use std::{string, thread, time::Duration};

pub fn asy() {
    // https://doc.rust-lang.org/book/ch17-02-concurrency-with-async.html#applying-concurrency-with-async

    // https://doc.rust-lang.org/book/ch17-02-concurrency-with-async.html#creating-a-new-task-with-spawn_task
    trpl::block_on(async {
        let (tx, mut rx) = trpl::channel();
        let tx1 = tx.clone();

        // Spawn a receiver task that runs concurrently
        let receiver_handle = trpl::spawn_task(async move {
            while let Some(s) = rx.recv().await {
                println!("received '{s}'");
            }
        });

        let fut1 = async {
            for i in 1..10 {
                tx1.send(format!("hi number {i} from the first task!"))
                    .unwrap();
                trpl::sleep(Duration::from_millis(500)).await;
            }
        };

        let fut2 = async {
            for i in 1..5 {
                tx.send(format!("hi number {i} from the second task!"))
                    .unwrap();
                trpl::sleep(Duration::from_millis(500)).await;
            }
        };

        trpl::join(fut1, fut2).await;

        // Wait for the receiver task to finish to ensure all messages are printed.
        receiver_handle.await.unwrap();
    });
}

// instead of trpl.sleep use trpl.yield
pub fn sendme() {
    trpl::block_on(async {
        let one_ms = Duration::from_millis(1);

        let a = async {
            println!("'a' started.");
            slow("a", 30);
            trpl::yield_now().await;
            slow("a", 10);
            trpl::yield_now().await;
            slow("a", 20);
            trpl::yield_now().await;
            println!("'a' finished.");
        };

        let b = async {
            println!("'b' started.");
            slow("b", 75);
            trpl::yield_now().await;
            slow("b", 10);
            trpl::yield_now().await;
            slow("b", 15);
            trpl::yield_now().await;
            slow("b", 350);
            println!("'b' finished.");
        };

    });
}

fn slow(name: &str, ms: u64) {
    thread::sleep(Duration::from_millis(ms));
    println!("'{name}' ran for {ms}ms");
}

// https://doc.rust-lang.org/book/ch17-04-streams.html#streams-futures-in-sequence

// https://doc.rust-lang.org/book/ch17-06-futures-tasks-threads.html#putting-it-all-together-futures-tasks-and-threads
