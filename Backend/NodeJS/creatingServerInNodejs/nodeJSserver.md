[Creating node js server](https://youtu.be/nNihy9kZmIU?si=sgGoaYK0gxhZyh7B)

- [How DNS(Domain Name System) works](https://youtu.be/nNihy9kZmIU?si=sgGoaYK0gxhZyh7B)
    - **This process also tell in detail in ***DNSWorking.md*** file**
- [How web works](https://youtu.be/nNihy9kZmIU?si=4pDKfHubAiYi2aS4&t=547)


--- 

## Web Request-Response Lifecycle

1. **Client Request Initiation**: The client (browser) *initiates a network call* by entering a URL.
2. **DNS Resolution**: The *browser contacts a DNS server* to get the IP address of the domain.
3. **TCP Connection**: The browser *establishes a TCP connection* with the server's IP address.
4. **HTTP Request**: The *browser sends an HTTP request* to the server.
5. **Server Processing**: The *server processes the request* and prepares a response.
6. **HTTP Response**: The *server sends an HTTP response* back to the client.
7. **Network Transmission**: The *response travels back* to the client over the network.
8. **Client Receives Response**: The *browser receives and interprets the response*.
9. **Rendering**: The *browser renders the content* of the response and displays it to the user.

---

[What are protocols](https://youtu.be/nNihy9kZmIU?si=QSF9X12QKDenOJCP&t=837)


----


- [Node Core Modules](https://youtu.be/nNihy9kZmIU?si=RsQ1J4zYfIoTX35O&t=1007)
     - So Cores modules are basically those modules that comes with installation of Node.js and we can use them in our project without installing them separately.

---

### Code to make a server, and listen on port 

```js
const http = require('http');


// we create server here
const server = http.createServer((req, res) => {
    console.log(req);
});


// server start listening on port 3001
server.listen(3001,()=>console.log('this callback runs when server starts listening on port 3001'));
```