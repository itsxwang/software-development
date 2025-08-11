const { check, validationResult } = require("express-validator");
const path = require("path");
const User = require("../models/user");
const Home = require("../models/homes");
const bcrypt = require("bcryptjs");

exports.getLogin = (req, res) => {
  res.render(path.join("auth", "login"), {
    currentPage: "login",
    pageTitle: "Login",
    isLoggedIn: req.session.isLoggedIn,
    errors: [],
    oldInput: {},
    userType: req.session.user ? req.session.user.userType : null,
  });
};

exports.postLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email.trim() });

  let error = [];
  if (!user) {
    error = "Account does not exist.";
  } else {
    error = "Password is incorrect.";
  }

  if (!user) {
    return res.status(422).render(path.join("auth", "login"), {
      currentPage: "login",
      pageTitle: "Login",
      isLoggedIn: req.session.isLoggedIn,
      errors: [error],
      oldInput: { email },
      userType: req.session.user ? req.session.user.userType : null,
    });
  }


  
  req.session.isLoggedIn = true;
  req.session.user = user;
  // await req.session.save();
  res.redirect("/");
};

exports.postLogout = (req, res) => {
  req.session.isLoggedIn = false;
  res.redirect("/");
};

exports.getSignup = (req, res) => {
  res.render(path.join("auth", "signup"), {
    currentPage: "signup",
    pageTitle: "Signup",
    isLoggedIn: req.session.isLoggedIn,
    errors: [],
    oldInput: { username: "", email: "", userType: "" },
    userType: req.session.user ? req.session.user.userType : null,
  });
};

exports.postSignup = [
  check("username")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Username cannot be empty"),

  check("password")
    .trim()
    .isLength({ min: 7 })
    .withMessage("Password must be at least 7 characters long.")
    .matches(/\d/)
    .withMessage("Password must contain a number.")
    .matches(/[a-zA-Z]/)
    .withMessage("Password must contain a letter.")
    .matches(/[!@#$%^&*]/)
    .withMessage("Password must contain a special character."),

  check("confirm_password").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Passwords do not match.");
    }
    return true;
  }),

  check("email")
    .trim()
    .isEmail()
    .withMessage("Please enter a valid email address."),

  check("userType")
    .notEmpty()
    .withMessage("Please select a whether you are a host or a guest.")
    .isIn(["host", "guest"])
    .withMessage("Invalid valid user type."),

  check("terms").custom((value) => {
    if (value !== "on") {
      throw new Error("You must agree to the terms and conditions.");
    }
    return true;
  }),

  (req, res) => {
    const errors = validationResult(req);
    const { username, email, userType, password } = req.body;
    if (!errors.isEmpty()) {
      return res.status(422).render(path.join("auth", "signup"), {
        currentPage: "signup",
        pageTitle: "Signup",
        errors: errors.array().map((error) => error.msg),
        isLoggedIn: req.session.isLoggedIn,
        oldInput: {
          username,
          email,
          userType,
        },
        userType: req.session.user ? req.session.user.userType : null,
      });
    }

    bcrypt.hash(password, 12).then((hashedPassword) => {
      const user = new User({
        username,
        email,
        password: hashedPassword,
        userType,
      });
      user
        .save()
        .then(() => {
          res.redirect("/auth/login");
        })
        .catch((err) => {
          let error = err;
          if (err.code === 11000) {
            error = new Error("This email address is already registered.");
          }

          return res.status(422).render(path.join("auth", "signup"), {
            currentPage: "signup",
            pageTitle: "Signup",
            errors: [error],
            isLoggedIn: req.session.isLoggedIn,
            oldInput: {
              username,
              email,
              userType,
            },
            userType: req.session.user ? req.session.user.userType : null,
          });
        });
    });
  },
];
