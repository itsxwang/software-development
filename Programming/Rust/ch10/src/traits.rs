// https://doc.rust-lang.org/book/ch10-01-syntax.html#performance-of-code-using-generics
pub trait summarize {
    fn summarize(&self) -> String;
    fn summarize2(&self) -> String {
        String::from("default")
    }

}
// https://doc.rust-lang.org/book/ch10-02-traits.html#implementing-a-trait-on-a-type


pub struct User{
   pub name: String,
   pub post: String
}

impl summarize for User {
    fn summarize(&self) -> String {
        format!("{}: {}", self.name, self.post)
    }
}



