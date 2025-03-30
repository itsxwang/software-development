[See this](https://youtu.be/-G-zic_LS0A?si=jn5uQYCOUXcSxpq0&t=28603)

- [Where `px` still use](https://youtu.be/-G-zic_LS0A?si=-NrLLGx0DCdoe1xL&t=28885)

- [Percentages relative unit](https://youtu.be/-G-zic_LS0A?si=Le7yGtHuKo4aG7WA&t=28987)
     - [Percentages Unit guidance](https://youtu.be/-G-zic_LS0A?si=3PKTTXwMPmsKvAg8&t=29275)
          - [Common Percentage use cases](https://youtu.be/-G-zic_LS0A?si=2UWcUw3HSiuWJFtE&t=30007)

- [REMs and EMs](https://youtu.be/-G-zic_LS0A?si=SNySdsrwNos_K9_6&t=30361)
     - [REMs](https://youtu.be/-G-zic_LS0A?si=d_gJAHMkFKs11KxF&t=30377)
          - [We usually set font-size of root element to `62.5%` (10/16), because 62.5% makes `1rem` = 10px, that easier to work with](https://youtu.be/-G-zic_LS0A?si=t5Z-HTLMDIWcWPEK&t=30867)
               - **One more example**  
                    If the user increases the browser's default font size to 19px and you have:
                    ```css
                    html {
                         font-size: 62.5%;
                    }
                    ```
                    Then the computed font-size of `<html>`(root element) will be:  
                    ```
                    19px × 62.5% = 11.875px
                    ```
                    So, the new base `1rem` will be `11.875px` instead of `10px`.

                    **Why Does This Happen?**  
                    The browser's default font size affects the root `<html>` element.  

                    Since you are using a relative percentage (`62.5%`), it scales based on the user's preference.

                    **How It Affects Your Website**  
                    If you define sizes using `rem` (relative units), your entire website will scale proportionally based on the user's browser font settings.  

                    If you use `px` (absolute units), they will not be affected by the browser font-size setting.
        - [REMs Guidance](https://youtu.be/-G-zic_LS0A?si=R7jbolOCbbmY4xgy&t=31025)

     - [EMs](https://youtu.be/-G-zic_LS0A?si=PWbOjB5RzHFJleRg&t=31065)
         - [Example of using EMs](https://youtu.be/-G-zic_LS0A?si=cIflU4UIk6k6QJXN&t=31321)
          ```css
          a {       
          font-size: 50px;
          padding: 0.4em 0.8em;
          border-radius: 0.4em;
          }
         /*  This allow us to scale the button based on the font size 
          of element(here anchor tag) */ 
          ```
     - [EMs Guidance](https://youtu.be/-G-zic_LS0A?si=FRSLqWsREcssTIIY&t=31451)

- [vw and vh, to size elements relative to the viewport](https://youtu.be/-G-zic_LS0A?si=GfBbi4g-s-tASSoQ&t=31919)
     - [vh and vw guidance, ***vh can be used with min-height that ensures all content is above the fold(means we not have to scroll to see the content***, ***vw can be used for creating responsive text when it is a main standalone and not confined within a container***)](https://youtu.be/-G-zic_LS0A?si=gaG4aHta0qAFPUKU&t=32137)