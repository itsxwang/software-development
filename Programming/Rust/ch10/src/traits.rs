// https://doc.rust-lang.org/book/ch10-01-syntax.html#performance-of-code-using-generics
pub trait Summarize {
    fn Summarize(&self) -> String;
    fn Summarize2(&self) -> String {
        String::from("default")
    }

}
// https://doc.rust-lang.org/book/ch10-02-traits.html#implementing-a-trait-on-a-type


pub struct User{
   pub name: String,
   pub post: String
}

impl Summarize for User {
    fn Summarize(&self) -> String {
        format!("{}: {}", self.name, self.post)
    }
}



