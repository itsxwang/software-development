const http = require("http");

const navBar = `
<nav style="background: linear-gradient(90deg, #4e54c8, #8f94fb); padding: 1.2em 0; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
    <ul style="list-style: none; margin: 0 auto; padding: 0; display: flex; gap: 2em; justify-content: center; align-items: center; max-width: 900px;">
        <li><a href="/home" style="color: #fff; text-decoration: none; font-weight: bold; font-size: 1.1em; letter-spacing: 1px; transition: color 0.2s;">Home</a></li>
        <li><a href="/about" style="color: #fff; text-decoration: none; font-weight: bold; font-size: 1.1em; letter-spacing: 1px; transition: color 0.2s;">About</a></li>
        <li><a href="/contact" style="color: #fff; text-decoration: none; font-weight: bold; font-size: 1.1em; letter-spacing: 1px; transition: color 0.2s;">Contact</a></li>
    </ul>
</nav>
`;

const baseHtml = (title, content) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <title>${title}</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <style>
        body {
            font-family: 'Segoe UI', Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(120deg, #f8fafc 0%, #e0e7ff 100%);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        nav {
            top: 0;
            left: 0;
            right: 0;
            position: fixed;
            z-index: 999;
        }
        nav > ul > li {
            display: inline-block;
            margin-right: 1em;
            transition: color 0.2s;
        }
        nav > ul > li a {
            position: relative;
            color: #fff;
            text-decoration: none;
            font-weight: bold;
            font-size: 1.1em;
            letter-spacing: 1px;
            transition: color 0.2s;
        }
        nav > ul > li a::after {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            bottom: -3px;
            width: 0;
            height: 2px;
            background: #fff;
            transition: width 0.3s cubic-bezier(.4,0,.2,1);
        }
        nav > ul > li a:hover::after {
            width: 100%;
        }
        .container {
            max-width: 700px;
            margin: 3em auto;
            background: #fff;
            border-radius: 18px;
            box-shadow: 0 8px 32px rgba(76, 110, 245, 0.08);
            padding: 2.5em 2em;
            text-align: center;
        }
        h1 {
            color: #4e54c8;
            margin-bottom: 0.5em;
            font-size: 2.5em;
            letter-spacing: 1px;
        }
        p {
            color: #444;
            font-size: 1.2em;
            margin-top: 0.5em;
        }
        .btn {
            display: inline-block;
            margin-top: 2em;
            padding: 0.7em 2em;
            --first-color: #4e54c8;
            --second-color: #8f94fb;
            background-color: #4e54c8  ;
            color: #fff;
            color: #fff;
            border: none;
            border-radius: 25px;
            font-size: 1.1em;
            font-weight: bold;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(76, 110, 245, 0.08);
            transition: all 0.2s;
            
            text-decoration: none;
        }
        .btn:hover {
            background-color: white;
            color: #4e54c8;
            border: 1px solid #4e54c8;
            box-shadow: 0 2px 8px rgba(76, 110, 245, 0.08);
            
        }
            }
        @media (max-width: 600px) {
            .container { padding: 1.2em 0.5em; }
            h1 { font-size: 2em; }
        }
    </style>
</head>
<body>
    ${navBar}
    <div class="container">
        ${content}
    </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/" || req.url === "/home") {
    res.end(
      baseHtml(
        "Home",
        `
            <h1>Welcome to the Amazing Node.js Server!</h1>
            <p>Experience a beautiful UI built with pure HTML and CSS, served by Node.js.</p>
            <a class="btn" href="/about">Learn More</a>
        `
      )
    );
  } else if (req.url === "/about") {
    res.end(
      baseHtml(
        "About",
        `
            <h1>About This Project</h1>
            <p>This is a simple Node.js server that demonstrates how to serve stunning HTML UIs without any frameworks.</p>
            <a class="btn" href="/contact">Contact Us</a>
        `
      )
    );
  } else if (req.url === "/contact") {
    res.end(
      baseHtml(
        "Contact",
        `
            <h1>Contact</h1>
            <p>Have questions or feedback? Reach out to us at <a href="mailto:info@example.com" style="color:#4e54c8;text-decoration:underline;">info@example.com</a>.</p>
            <a class="btn" href="/home">Back to Home</a>
        `
      )
    );
  } else {
    res.statusCode = 404;
    res.end(
      baseHtml(
        "404",
        `
            <h1 style="color:#e53e3e;">404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <a class="btn" href="/home">Go Home</a>
        `
      )
    );
  }
});

server.listen(3002, () => {
  console.log("Server is running on http://localhost:3002");
});
