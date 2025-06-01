[Creating node js server](https://youtu.be/nNihy9kZmIU?si=sgGoaYK0gxhZyh7B)

- [How DNS(Domain Name System) works](https://youtu.be/nNihy9kZmIU?si=sgGoaYK0gxhZyh7B)
  - **This process also tell in detail in \***DNSWorking.md**\* file**
- [How web works](https://youtu.be/nNihy9kZmIU?si=4pDKfHubAiYi2aS4&t=547)

---

## Web Request-Response Lifecycle

1. **Client Request Initiation**: The client (browser) _initiates a network call_ by entering a URL.
2. **DNS Resolution**: The _browser contacts a DNS server_ to get the IP address of the domain.
3. **TCP Connection**: The browser _establishes a TCP connection_ with the server's IP address.
4. **HTTP Request**: The _browser sends an HTTP request_ to the server.
5. **Server Processing**: The _server processes the request_ and prepares a response.
6. **HTTP Response**: The _server sends an HTTP response_ back to the client.
7. **Network Transmission**: The _response travels back_ to the client over the network.
8. **Client Receives Response**: The _browser receives and interprets the response_.
9. **Rendering**: The _browser renders the content_ of the response and displays it to the user.

---

[What are protocols](https://youtu.be/nNihy9kZmIU?si=QSF9X12QKDenOJCP&t=837)

---

- [Node Core Modules](https://youtu.be/nNihy9kZmIU?si=RsQ1J4zYfIoTX35O&t=1007)
  - So Cores modules are basically those modules that comes with installation of Node.js and we can use them in our project without installing them separately.

---

### Code to make a server, and listen on port

```js
const http = require("http");

// we create server here, the callback function runs when someone makes the request on the server
const server = http.createServer((req, res) => {
  console.log(req);
});

// server start listening on port 3001
server.listen(3001, () =>
  console.log("this callback runs when server starts listening on port 3001")
);
```

### This is how you can stop the server conditionally

- Here it stop the server after 2 seconds when user makes the request
- Basicall `process.exit()` helps us to exit the loop(to be precise, node program)

```js
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  setTimeout(() => {
    process.exit(); 
  }, 2000);
});

server.listen(3001, () => {
  console.log("Server is running on port 3001");
});
```

---

## And in this you can route requests

```js
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/about") {
    // set status code
    res.setHeader("Content-Type", "text/html"); // its just a response metadata

    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><title>About</title></head>");
    res.write("<body><h1>This is about page</h1></body>");
    res.write("</html>");
    return res.end();
  }
  // for root page or any other url that user tries to access
  res.setHeader("Content-Type", "text/html");
  res.write("<!DOCTYPE html>");
  res.write("<html>");
  res.write("<head><title>Pink</title></head>");
  res.write("<body><h1>Hello World</h1></body>");
  res.write("</html>");
  res.end(); // you can also send html in `res.end()`, but for that content type should be `text/html`
});

server.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
```

- [More examples, on routing requests](https://youtu.be/9HYAaXwS7I4?si=KM8x3OIScaVrBWiU&t=1297)

**_// after `res.end()`, the response is sent, and you can't add anything response after that, that's why we return in last line in `/about` response_**

## [Taking user Input](https://youtu.be/9HYAaXwS7I4?si=5oPLekehhf-fFx2F&t=1837)

- [redirecting requests](https://youtu.be/9HYAaXwS7I4?si=45KNLpOtUMxTqSoh&t=2637)