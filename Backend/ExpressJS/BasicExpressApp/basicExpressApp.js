const http = require("http");
const express = require("express");
const app = express();

// 👇 This is IMPORTANT
app.use(express.urlencoded({ extended: true })); // tells Express to parse form body data, important for POST requests
// ✅ Now `req.body` contains the data from the form (name, email, gender).


app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/contact", (req, res) => {
  res.send(`
    <html>
      <head>
        <style>
            body {
              font-family: Arial, sans-serif;
              background: #f4f4f4;
              padding: 40px;
            }
            .contact-form {
              background: #fff;
              padding: 24px 32px;
              border-radius: 8px;
              box-shadow: 0 2px 8px rgba(0,0,0,0.08);
              max-width: 400px;
              margin: 0 auto;
            }
            .contact-form input[type="text"],
            .contact-form input[type="email"] {
              width: 100%;
              padding: 8px 10px;
              margin: 8px 0 16px 0;
              border: 1px solid #ccc;
              border-radius: 4px;
              box-sizing: border-box;
            }
            .contact-form label {
              margin-right: 8px;
            }
            .contact-form button {
              background: #007bff;
              color: #fff;
              border: none;
              padding: 10px 18px;
              border-radius: 4px;
              cursor: pointer;
              font-size: 16px;
            }
            .contact-form button {
              transition: background-color 0.3s ease;
            }
            .contact-form button:hover {
              background: #0056b3;
            }
        </style>
      </head>
      <body>
        <form class="contact-form" action="/form" method="POST">
            <h2>Contact Us</h2>
            <input type="text" id="name" name="name" placeholder="Enter your name" required><br>
            <input type="email" id="email" name="email" placeholder="Enter your email" required><br>
            <label>Gender:</label>
            <input type="radio" id="male" name="gender" value="male">
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female">Female</label><br><br>
            <button type="submit">Submit</button>
        </form>
      </body>
    </html>
  `);
});

app.post("/form", (req, res) => {
  console.log(req.body);
  res.send(`Contact form submitted. Here’s what we received:
    <pre>${JSON.stringify(req.body, null, 2)}</pre>`);
});

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
