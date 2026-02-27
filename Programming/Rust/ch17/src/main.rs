use post::Post;

mod post;

fn main() {
    // https://doc.rust-lang.org/book/ch18-02-trait-objects.html#defining-a-trait-for-common-behavior

    // trait objects -> a way to treat different types as the same thing as long as they implement the same trait.
    let mut post = Post::new();

    post.add_text("I ate a salad for lunch today");
    assert_eq!("", post.content());

    post.request_review();
    assert_eq!("", post.content());
    

    post.add_text("I ate a salad for lunch today222");

    post.approve();
    assert_eq!("", post.content());

    post.approve();
    assert_eq!("I ate a salad for lunch today", post.content());

    post.reject();
    assert_eq!("", post.content());
}