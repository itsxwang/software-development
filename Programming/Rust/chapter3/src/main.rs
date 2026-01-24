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

}
