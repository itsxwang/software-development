use trpl::{Either, Html};

fn main() {
    // https://doc.rust-lang.org/book/ch17-00-async-await.html#fundamentals-of-asynchronous-programming-async-await-futures-and-streams

    // https://doc.rust-lang.org/book/ch17-01-futures-and-syntax.html#futures-and-the-async-syntax

    // https://doc.rust-lang.org/book/ch17-01-futures-and-syntax.html#our-first-async-program

    // https://doc.rust-lang.org/book/ch17-01-futures-and-syntax.html#our-first-async-program/

    // web scraper

    // https://doc.rust-lang.org/book/ch17-01-futures-and-syntax.html#executing-an-async-function-with-a-runtime
    let args: Vec<String> = std::env::args().collect();

    trpl::block_on(async {
        let title_fut_1 = page_title(&args[1]);
        let title_fut_2 = page_title(&args[2]);

        let (url, maybe_title) = match trpl::select(title_fut_1, title_fut_2).await {
            Either::Left(left) => left,
            Either::Right(right) => right,
        };

        println!("{url} returned first");
        match maybe_title {
            Some(title) => println!("Its page title was: '{title}'"),
            None => println!("It had no title."),
        }
    })
}
async fn page_title(url: &str) -> (&str, Option<String>) {
    let response = trpl::get(url).await;
    let response_text = response.text().await;
    let title = Html::parse(&response_text)
        .select_first("title")
        .map(|title| title.inner_html());
    (url, title)
}
