# How to Stop Serving a Node.js Website

There are several ways to stop a Node.js server, depending on your environment:

## 1. Using the Terminal

- **Ctrl + C**: In the terminal where your server is running, press `Ctrl + C` to gracefully stop the Node.js process.

## 2. On Unix-based Systems (Linux/macOS)

- **Find the Process ID (PID):**
    ```bash
    ps aux | grep node
    ```
    or
    ```bash
    lsof -i :<port>
    ```
- **Kill the Process:**
    ```bash
    kill -9 <PID>
    ```



## 3. Programmatically in Node.js

- **Stop the Server:**
    ```js
    const server = require('http').createServer();

    server.on('request', (req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Hello World</h1>');
        res.end();
    });
    server.listen(3000, () => {
        console.log('Server is running on port localhost:3000');
    });
    server.close();
    ```
- **Terminate the Process:**
    ```js
    process.exit();
    ```

## 4. Using Process Managers

- Tools like **PM2** or **Nodemon** can help you start, stop, and manage Node.js processes efficiently.

## 5. If Running in the Background

- **Bring to Foreground:**
    ```bash
    fg
    ```
- Then stop with `Ctrl + C`.
