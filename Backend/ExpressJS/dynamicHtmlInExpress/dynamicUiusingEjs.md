- [Need of Dynamic ui](https://youtu.be/WaObzvMEgd4?si=wsZicO8nSe4K7Jj6)

- [Share variables using global variables](https://youtu.be/WaObzvMEgd4?si=S3LBb-Rgx740LKv7&t=287)

- [What is EJS (Embedded JavaScript)](https://youtu.be/WaObzvMEgd4?si=3rVfaSSiz3QKlJrI&t=1037)

- [Using EJS templates](https://youtu.be/WaObzvMEgd4?si=gtfpTxU311PGCKlA&t=1457)

---
## Syntax:

  - 1️⃣ `<% %>` — For Logic

    - This is used for executing JavaScript code, like conditionals, loops, or any logic that doesn’t produce output directly.

    - Whatever you write inside doesn’t get added to the rendered page unless you explicitly output it.

    - Example:

    ```ejs
    <% if (user) { %>
    <h1>Welcome back!</h1>
      <% } %>
    ```

    Here, EJS just processes the if statement. Nothing from inside the tag itself is rendered as text.

  - 2️⃣ `<%= %>` — For Output

    - This is used when you want to insert the value of a variable into the rendered HTML.

    - It also HTML-escapes the value automatically for security (to prevent XSS attacks).

    - Example:\
      `<h1>Hello, <%= user.name %>!</h1>`
      So it basically used to insert value in the dom dynamically

  - 3️⃣ `<%- %>` — Output Unescaped

    - Same as <%= %>, but does NOT escape the value, allowing you to insert raw HTML.

    - Example:
      ```ejs
      <%- htmlSnippet %>
      ```
      If htmlSnippet contains `<strong>bold</strong>`, it will be rendered as bold text.

--- 
## [Partials (to increase reusability)](https://youtu.be/WaObzvMEgd4?si=oD3PI0NjRSKH9Akl&t=2067) 

- Partials are snippets of HTML that can be reused across multiple templates(basically multiple `ejs` files).


