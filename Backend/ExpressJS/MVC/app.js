const path = require("path");
const express = require("express");

const session = require("express-session");

require("dotenv").config();

const hostRouter = require("./routes/hostRouter");
const storeRouter = require("./routes/storeRouter");
const termsRouter = require("./routes/termsRouter");

const { default: mongoose } = require("mongoose");
const authRouter = require("./routes/authRouter");
const MongoDBStore = require("connect-mongodb-session")(session);



const store = new MongoDBStore({
  uri: process.env.DB_PATH,
  collection: "sessions"
});

const app = express();

// make public folder available to server
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store
  })
);


app.use(storeRouter);
app.use("/auth", authRouter);
app.use("/host", hostRouter);
app.use(termsRouter);
    
app.use((req, res) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

mongoose
  .connect(process.env.DB_PATH)
  .then(() => {
    console.log("Connected to database");
    app.listen(7001, () => {
      console.log("Server started on port http://localhost:7001");
    });
  })
  .catch((err) => {
    console.log("Database connection failed", err);
    console.log(process.env.DB_PATH);
  });
