// Creating Node server
// https://youtu.be/nNihy9kZmIU?si=89yegUsRc5bCmzLE&t=1421

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.write("<html>");
    res.write("<head><title>About</title></head>");
    res.write("<body><h1>This is about page</h1></body>");
    res.write("</html>");
    res.end();
    return;
  } else if (req.url === "/form") {
    res.write("<h1>Welcome to Home page</h1>");
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

    return res.end();
  } else if (req.url.toLowerCase() === "/submit-details" && req.method === "POST") {
    res.setHeader("Content-Type", "text/html");
    setTimeout(() => {
      res.statusCode = 302;
      res.setHeader('Location', '/');
      res.write("<html>");
      res.write("<head><title>form-submission</title></head>");
      res.write("<body><h1>Completed</h1></body>");
      res.write("</html>");
      // Redirect to home page after form submission
     return res.end();
    }, 2000);
    return;
  } else if (req.url === "/" || req.url === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Pink</title></head>");
    res.write("<body><h1>Hello World</h1></body>");
    res.write("</html>");
    return res.end();
  }
  else {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 404;
    res.write("<html>");
    res.write("<head><title>404</title></head>");
    res.write("<body style='display:flex; justify-content:center; align-items:center;'><h1 style='color:red;'>Page not found</h1></body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});