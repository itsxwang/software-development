fn five() -> i32 {
    5
}

fn main() {
    println!("Hello, world!");
    const THREE_HOURS_IN_SECONDS: i32 = 60 * 60 * 3;
    println!("Three hours in seconds is: {}", THREE_HOURS_IN_SECONDS);

    // tuples can't be changed but their elements can be accessed individually (x,y,z) = tup
    let tup: (i32, f64, u8) = (500, 6.4, 1);
    // let (x, y, z) = tup;
    // access by indexing, `tup.0`, `tup.n`  .
    println!("x {}", tup.0);

    let ra: [i32; 5] = [1, 2, 3, 4, 5];
    println!("ra {:?}", ra);
    let xx = five();
    println!("xx {}", xx);

    let x = if true {
        let expresso = String::from("red");
        expresso.len()
    } else {
        0
    };
    println!("x {}", x);

    // loop {} -> continue and break supported

    let mut counter = 0;
    let below10 = loop {
        if counter == 9 {
            break counter;
        } else {
            counter += 1
        }
    };
    println!("below10 {}", below10);

    // 'looplabels: loop {}
    // let a = [10, 20, 30, 40, 50];

    // for element in a {
    //     println!("the value is: {element}");
    // }

    // machine code produce from for loops are much efficient because: 1- Compiler don't have to add a runtime code for make a checks to compare a index value with array len at every iteration
    for number in (1..4).rev() {
        println!("{number}!");
    }
}
