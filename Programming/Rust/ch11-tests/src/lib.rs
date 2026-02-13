/// Reverses a given string.
pub fn reverse_string(s: &str) -> String {
    s.chars().rev().collect()
}

/// Calculates the factorial of a non-negative integer.
/// Returns 1 for 0! and panics for negative inputs (though the u64 type prevents this).
pub fn factorial(n: u64) -> u64 {
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

        assert_ne!(5, 121) // means if not equal -> pass
    }

    // assert example
    fn add_two(a: i32) -> i32 {
        a + 2
    }
    #[test]
    fn it_adds_two() {
        let result = add_two(2);
        assert!(4 == add_two(2), "no, result is {}", result);
    }
}

// https://doc.rust-lang.org/book/ch11-01-writing-tests.html#testing-equality-with-assert_eq-and-assert_ne

// https://doc.rust-lang.org/book/ch11-01-writing-tests.html#adding-custom-failure-messages

// https://doc.rust-lang.org/book/ch11-01-writing-tests.html#checking-for-panics-with-should_panic

// https://doc.rust-lang.org/book/ch11-01-writing-tests.html#using-resultt-e-in-tests

// https://doc.rust-lang.org/book/ch11-02-running-tests.html#controlling-how-tests-are-run

// https://doc.rust-lang.org/book/ch11-02-running-tests.html#running-tests-in-parallel-or-consecutively

// https://doc.rust-lang.org/book/ch11-02-running-tests.html#showing-function-output // -- --show-output

// https://doc.rust-lang.org/book/ch11-02-running-tests.html#ignoring-tests-unless-specifically-requested

// https://doc.rust-lang.org/book/ch11-03-test-organization.html#test-organization

// https://doc.rust-lang.org/book/ch11-03-test-organization.html#unit-tests

// https://doc.rust-lang.org/book/ch11-03-test-organization.html#the-tests-module-and-cfgtest

// https://doc.rust-lang.org/book/ch11-03-test-organization.html#private-function-tests

// https://doc.rust-lang.org/book/ch11-03-test-organization.html#integration-tests


// https://doc.rust-lang.org/book/ch11-03-test-organization.html#the-tests-directory

// https://doc.rust-lang.org/book/ch11-03-test-organization.html#the-tests-directory

// https://doc.rust-lang.org/book/ch11-03-test-organization.html#submodules-in-integration-tests

// https://doc.rust-lang.org/book/ch11-03-test-organization.html#integration-tests-for-binary-crates