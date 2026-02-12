       ## 1️⃣ What is `.parse()`? (one-line truth)

       > **`.parse()` converts a string into another type, if that type knows how to be built from a string.**

       Example:

       ```rust
       let x: i32 = "42".parse().unwrap();
       ```

       ---

       ## 2️⃣ What `.parse()` REALLY is under the hood

       `.parse()` is just a method from this trait:

       ```rust
       use std::str::FromStr;
       ```

       ### The trait:

       ```rust
       trait FromStr {
           type Err;
           fn from_str(s: &str) -> Result<Self, Self::Err>;
       }
       ```

       ### `.parse()` is basically:

       ```rust
       "42".parse::<i32>()
       ```

       which calls:

       ```rust
       i32::from_str("42")
       ```

       ---

       ## 3️⃣ Why `.parse()` returns `Result`

       Because **parsing can fail**:

       ```rust
       let x: i32 = "abc".parse().unwrap(); // 💥 panic
       ```

       Actual return type:

       ```rust
       Result<T, T::Err>
       ```

       So you must handle failure:

       ```rust
       let x = "42".parse::<i32>()?;
       ```

       ---

       ## 4️⃣ How Rust knows *what type* to parse into

       Rust needs a **target type**.

       ### Three ways to provide it:

       #### ✅ 1. Type annotation (most common)

       ```rust
       let x: i32 = "42".parse().unwrap();
       ```

       #### ✅ 2. Turbofish

       ```rust
       let x = "42".parse::<i32>().unwrap();
       ```

       #### ✅ 3. Context (return type, argument, etc.)

       ```rust
       fn get_num() -> i32 {
           "42".parse().unwrap()
       }
       ```

       ❌ Without a target type:

       ```rust
       let x = "42".parse().unwrap(); // ERROR
       ```

       ---

       ## 5️⃣ What types support `.parse()`?

       Any type that implements:

       ```rust
       FromStr
       ```

       ### Built-in examples:

       | Type                | Works?               |
       | ------------------- | -------------------- |
       | `i32`, `u64`, `f32` | ✅                    |
       | `bool`              | ✅                    |
       | `char`              | ✅                    |
       | `String`            | ❌ (already a string) |
       | `PathBuf`           | ❌                    |

       Example:

       ```rust
       let b: bool = "true".parse().unwrap();
       let f: f64 = "3.14".parse().unwrap();
       ```

       ---

       ## 6️⃣ `.parse()` + `?` (real-world Rust)

       Very common pattern:

       ```rust
       fn read_port(s: &str) -> Result<u16, Box<dyn std::error::Error>> {
           let port = s.parse()?; // error auto-converted
           Ok(port)
       }
       ```

       This works because:

       * `u16::Err` implements `Error`
       * `?` uses `.into()` to convert error types (what you learned earlier)

       ---

       ## 7️⃣ Custom parsing (THIS is powerful)

       You can make **your own types parseable**.

       ### Example:

       ```rust
       use std::str::FromStr;

       struct UserId(u32);

       impl FromStr for UserId {
           type Err = &'static str;

           fn from_str(s: &str) -> Result<Self, Self::Err> {
               let id = s.parse::<u32>().map_err(|_| "invalid id")?;
               Ok(UserId(id))
           }
       }
       ```

       Now this works:

       ```rust
       let uid: UserId = "123".parse().unwrap();
       ```

       🔥 This is how config files, CLI args, env vars, etc. work in Rust.

       ---

       ## 8️⃣ `.parse()` vs `.into()` (important difference)

       | Method     | Purpose           |
       | ---------- | ----------------- |
       | `.parse()` | **String → Type** |
       | `.into()`  | **Type → Type**   |

       ```rust
       let x: i32 = "42".parse().unwrap(); // string → number
       let y: i64 = x.into();              // number → number
       ```

       They solve **different problems**.

       ---

       ## 9️⃣ Common beginner errors (you’re doing great if you hit these)

       ### ❌ Forgetting type

       ```rust
       let n = "42".parse().unwrap();
       ```

       ### ❌ Ignoring `Result`

       ```rust
       let n: i32 = "42".parse(); // ERROR
       ```

       ### ❌ Parsing owned `String` incorrectly

       ```rust
       let s = String::from("42");
       let n: i32 = s.parse().unwrap(); // ✅ works
       ```

       ---

       ## 🔟 Mental model (lock this in)

       > **`.parse()` calls `T::from_str(&str)` and gives you a `Result<T, Err>`.**

       That’s it. No magic.

       ---

       ## ✅ One-line summary

       > **`.parse()` converts strings into types that implement `FromStr`, returning a `Result` because parsing can fail.**
