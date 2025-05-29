// Creating Node server
// https://youtu.be/nNihy9kZmIU?si=89yegUsRc5bCmzLE&t=1421

const http = require('http');


const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(3001, () => {
    console.log('Server is running on port 3001');
});