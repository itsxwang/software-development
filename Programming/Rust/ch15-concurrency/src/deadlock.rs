use std::sync::{Arc, Mutex};
use std::thread;
use std::time::Duration;

pub fn deadlock_example() {
    let a = Arc::new(Mutex::new(0));
    let b = Arc::new(Mutex::new(0));

    let ac1 = Arc::clone(&a);
    let ac2 = Arc::clone(&a);
    let bc1 = Arc::clone(&b);
    let bc2 = Arc::clone(&b);

    let handle1 = thread::spawn(move || {
        let mut a_num = ac1.lock().unwrap();
        *a_num += 1;
        println!("Thread 1 holds a lock and starts waiting for b lock");
        thread::sleep(Duration::from_millis(1000)); // Ensure Thread 2 starts first
        let mut b_num = bc1.lock().unwrap(); // Deadlock here: Thread 1 waits for b, but Thread 2 holds it
        *b_num += 1;
    });

    let handle2 = thread::spawn(move || {
        let mut b_num = bc2.lock().unwrap();
        *b_num += 1;
        println!("Thread 2 holds b lock and starts waiting for a lock");
        thread::sleep(Duration::from_millis(1000)); // Allow Thread 1 to acquire a
        let mut a_num = ac2.lock().unwrap(); // Deadlock here: Thread 2 waits for a, but Thread 1 holds it
        *a_num += 1;
    });

    handle1.join().unwrap();
    handle2.join().unwrap();

    println!("Done {}", *a.lock().unwrap()); // This line will never execute
}
