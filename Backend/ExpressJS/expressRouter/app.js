// core
const path = require("path");

// external 
const express = require("express");

// local 
const contact = require("./routes/contactRouter");
const home = require("./routes/homeRouter");
const choice = require("./routes/choiceRouter");

const app = express();


// these will ensure that the data is parsed correctly
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // for JSON data

app.use(home);
app.use(contact);   
app.use(choice)

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
})

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});