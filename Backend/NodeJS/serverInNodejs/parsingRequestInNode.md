- [Understanding Streams](https://youtu.be/u2CKVFcvaxA?si=CQRtGfK6OIZdQHpp&t=77)
    - Streaming means the data is being read in chunks, not all at once.
    - Like the data travelling on internet happens in stream(its not like GB of data travelled at once), means the data flow continuously from one side to another.
- And most helpful thing you can do with stream is, processing chunk as soon as it is available.
- [Socket explained](https://youtu.be/u2CKVFcvaxA?si=VI1okEM8-80Mfk2k&t=277)
    - Basically helps us to connect with some connection.
- [Buffers explained](https://youtu.be/u2CKVFcvaxA?si=Pa3ajtDU0juneu6j&t=757)
    - Buffers are basically used to collect the chunks, and sort them in order (basically kind of pre-processing) as soon as the chunks arrive from the client/server, before sending them for processing.


- [Reading Chunks](https://youtu.be/u2CKVFcvaxA?si=QFtYqxSMj5bdK4pH&t=937)

```jsx
const http = require("http");
const fs = require("fs");

const arrayToAdd = [];
const server = http.createServer((req, res) => {
  if (req.url === "/form") {
    res.write("<html>");
    res.write("<head><title>Form</title></head>");

    res.write("<body>");
    res.write('<form action="/submit-details" method="POST">');

    res.write(
      '<input type="text" id="name" name="name" placeholder="Enter your name"><br><br>'
    );

    res.write('<label for="gender">Gender:</label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label><br><br>');

    res.write('<button type="submit">Submit</button>');

    res.write("</form>");

    res.write("</body>");

    res.write("</html>");
    res.end();
    return;
  } else if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Home</title></head>");
    res.write("<body><h1>Welcome to Home Page</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/submit-details" && req.method === "POST") {
    res.statusCode = 302;
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    // this will run when the request ends
    req.on("end", () => {
      res.end("<h1>Details submitted successfully</h1>");
      const bufferString = Buffer.concat(body).toString();
      const params = new URLSearchParams(bufferString); // [[key1,value1],[key2,value2]] , of form
    const object = {}
      for (const [key,value] of params) {
          object[key] = value
          
      }
      arrayToAdd.push(object)
      fs.writeFileSync("data.json", JSON.stringify(arrayToAdd,null,2), (err) => {
              if (err) {
                  console.log(err);
              }
        })

    });
  }
});

server.listen(3000, (req, res) => {
  console.log("Server is running on http://localhost:3000");
});
```