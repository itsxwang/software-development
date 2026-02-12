/// Reverses a given string.
fn reverse_string(s: &str) -> String {
    s.chars().rev().collect()
}

/// Calculates the factorial of a non-negative integer.
/// Returns 1 for 0! and panics for negative inputs (though the u64 type prevents this).
fn factorial(n: u64) -> u64 {
    if n == 0 {
        1
    } else {
        let mut result = 1;
        for i in 1..=n {
            result *= i;
        }
        result
    }
}

fn main() {
    println!("Hello, world!");
    // https://doc.rust-lang.org/book/ch11-01-writing-tests.html#how-to-write-tests
    println!("Original string: 'hello'");
    println!("Reversed string: '{}'", reverse_string("hello"));
    println!("Factorial of 5: {}", factorial(5)); // Example usage

    // https://doc.rust-lang.org/book/ch11-01-writing-tests.html#structuring-test-functions

    // String example
    let mut s = String::from("foo");
    s.push_str("bar");
    assert_eq!(s, "foobar");
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn exploration() {
        assert_eq!(2 + 2, 4);
    }

    #[test]
    #[should_panic]
    fn another() {
        panic!("Make this test fail");
    }

    #[test]
    fn test_reverse_string() {
        assert_eq!(reverse_string("hello"), "olleh");
        assert_eq!(reverse_string("Rust"), "tsuR");
        assert_eq!(reverse_string(""), "");
    }

    #[test]
    fn test_factorial() {
        assert_eq!(factorial(0), 1);
        assert_eq!(factorial(1), 1);
        assert_eq!(factorial(5), 120);
    }
}

