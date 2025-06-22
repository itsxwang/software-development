const http = require("http");
const requestHandler= require("./reqHandler");

const server = http.createServer(requestHandler)

server.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});