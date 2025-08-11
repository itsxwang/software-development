const path = require("path");
const Home = require("../models/homes");
const User = require("../models/user");

const fs = require("fs");
const { rootDir } = require("../utils/pathUtil");

exports.getaddHome = (req, res) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/auth/login");
  }
  const editing = false;
  res.render(path.join("host", "edit-home"), {
    editing,
    currentPage: "addHome",
    pageTitle: "Add Home",
    isLoggedIn: req.session.isLoggedIn,
    userType: req.session.user ? req.session.user.userType : null,
  });
};

exports.postAddHome = async (req, res) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/auth/login");
  }

  const { name, description, address, price } = req.body;
  const image = req.file ? "/uploads/" + req.file.filename : "";
  const home = new Home({
    name,
    description,
    address,
    price,
    image,
  });

  home.save().then(() => {
    User.findById(req.session.user._id).then((user) => {
      user.hostedHomes.push(home._id);
      user.save();
      return res.redirect("/host/host-homes");
    });
  });
};

exports.gethostHomes = async (req, res) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/auth/login");
  }

  const homes = await User.findById(req.session.user._id).populate(
    "hostedHomes"
  );

  res.render(path.join("host", "host-homes"), {
    homes: homes.hostedHomes,
    currentPage: "hostHomes",
    pageTitle: "Host Homes",
    isLoggedIn: req.session.isLoggedIn,
    userType: req.session.user ? req.session.user.userType : null,
  });
};

exports.geteditHome = async (req, res) => {
  const home = await User.findById(req.session.user._id).populate(
    "hostedHomes"
  );

  if (!req.session.isLoggedIn) {
    return res.redirect("/auth/login");
  }

  const editing = true;

  if (!home) {
    return res.redirect("/host/host-homes");
  }

  res.render(path.join("host", "edit-home"), {
    home: home.hostedHomes.find((home) => home.id == req.params.id),
    editing,
    currentPage: "editHome",
    pageTitle: "Edit Home",
    isLoggedIn: req.session.isLoggedIn,
    userType: req.session.user ? req.session.user.userType : null,
  });
};

exports.posteditHome = async (req, res) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/auth/login");
  }
  const id = req.params.id;
  Home.findById(id)
    .then((home) => {
      if (!home) {
        return res.redirect("/host/host-homes");
      }
      let image = home.image;
      // If a new file is uploaded, update image and delete old one
      if (req.file) {
        image = "/uploads/" + req.file.filename;
        // Only delete if the old image exists and is not empty
        if (home.image && home.image.startsWith("/uploads/")) {
          const oldImagePath = path.join(rootDir, "public", home.image);
          fs.unlink(oldImagePath, (err) => {
            if (err) console.error("Failed to delete old image:", err);
          });
        }
      }
      const { name, address, description, price } = req.body;
      home.name = name;
      home.address = address;
      home.description = description;
      home.price = price;
      home.image = image;
      // Save updated home
      // const newhome = new Home({ name, description, address, price, image });
      home.save().then(() => {
        res.redirect("/host/host-homes");
      });
    })
    .catch((err) => {
      console.log("Error, editing home", err);
    });
};

exports.deleteListingConfirmation = (req, res) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/auth/login");
  }
  res.render(path.join("host", "delete-home-confirmation"), {
    id: req.params.id,
    currentPage: "deleteHome",
    pageTitle: "Delete Home",
    isLoggedIn: req.session.isLoggedIn,
    userType: req.session.user ? req.session.user.userType : null,
  });
};

exports.deleteHome = async (req, res) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/auth/login");
  }
  const user = await User.findById(req.session.user._id);

  user.favourites = user.favourites.filter((home) => {
    return home.toString() !== req.params.id;
  });

  user.hostedHomes = user.hostedHomes.filter((home) => {
    return home._id.toString() !== req.params.id;
  });
  user.save();

  Home.findByIdAndDelete(req.params.id).then((home) => {
    res.redirect("/host/host-homes");
    console.log(home.image);
    if (home.image)
      fs.unlink(path.join(rootDir, "public", home.image), (err) => {
        if (err) console.error("Failed to delete old image:", err);
      });
  });
};
