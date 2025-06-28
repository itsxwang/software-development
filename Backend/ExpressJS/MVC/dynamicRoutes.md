- [What are dynamic paths, query and path parameters](https://youtu.be/qbHmaHjOKPE?si=aY8lASuVtIU4hm4s&t=77)

- `req.params.pathparamName` is used to access the dynamic path parameters in the request URL.

  - Example: `/user/123` (user access this url)
  ```js
  app.get("/user/:id", (req, res) => {
    const userId = req.params.id;
    console.log(userId); // 123
  });
  ```

- `req.query.paramName` is used to access the query parameters in the request URL.
  - Example: `?name=John&age=30` (user access this url)
    ```js
    app.get("/user", (req, res) => {
      const name = req.query.name;
      const age = req.query.age;
      console.log(name, age); // John 30
    });
    ```

