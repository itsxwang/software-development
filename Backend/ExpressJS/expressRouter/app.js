// core
const path = require("path");

// external 
const express = require("express");

// local 
const contactRouter = require("./routes/contactRouter");
const homeRouter = require("./routes/homeRouter");
const choiceRouter = require("./routes/choiceRouter");
const pathUtil = require("./utils/pathUtil");


const app = express();


// these will ensure that the data is parsed correctly
app.use(express.static(path.join(pathUtil, "public"))); // ensure the public folder can be accessed by our server
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); // for JSON data

app.use(homeRouter);
app.use(contactRouter);   
app.use(choiceRouter)

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
})

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});