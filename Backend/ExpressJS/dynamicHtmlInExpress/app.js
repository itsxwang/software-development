//  core
const path = require("path");

// external
const express = require("express");

// local
const homeRouter = require("./routes/homeRouter");
const contactRouter = require("./routes/contactRouter");
const choiceRouter = require("./routes/choiceRouter");

const app = express();

// make public folder accessible
app.use(express.static(path.join(__dirname, "public")));

// set view engine to ejs
app.set("view engine", "ejs");
// set views folder, basically telling where all ejs files are, so it will search given name (that we give in res.render('nameOfFile',{})) in that folder, we can also give array of folders, and it will search then sequentially
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));

app.use(homeRouter);
app.use(contactRouter);
app.use(choiceRouter);

app.use((req, res) => {
  res.status(404).render("404", { pageTitle: "Page Not Found - MYPage" });
});

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
