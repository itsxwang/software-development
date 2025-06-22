const express = require("express");
const app = express();

const path = require("path");

app.get("/", (req, res) => {
  // beautiful home page
  res.send("Home page");
});

app.get("/about", (req, res) => {
  // beautiful about page
  res.send("About page");
});

// now 404

app.use((req, res) => res.sendFile(path.join(__dirname, "views", "404.html")));

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
