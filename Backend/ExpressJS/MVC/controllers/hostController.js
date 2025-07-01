const path = require("path");
const Home = require("../models/homes");
const Favourite = require("../models/favourites");

const fs = require("fs");
const { rootDir } = require("../utils/pathUtil");

exports.getaddHome = (req, res) => {
  const editing = false;
  res.render(path.join("host", "edit-home"), {
    editing,
    currentPage: "addHome",
    pageTitle: "Add Home",
  });
};

exports.postAddHome = (req, res) => {
  const { name, description, address, price } = req.body;
  const image = req.file ? "/uploads/" + req.file.filename : "";
  const home = new Home(
    name,
    description,
    address,
    price,
    image
  );
  home.save().then(() => {
    res.redirect("/host/host-homes");
  });
};

exports.gethostHomes = (req, res) => {
  Home.fetchAll().then(([homes]) => {
    res.render(path.join("host", "host-homes"), {
      homes: homes,
      currentPage: "hostHomes",
      pageTitle: "Host Homes",
    });
  });
};

exports.geteditHome = (req, res) => {
  const editing = true;
  Home.findById(req.params.id).then(([rows]) => {
    const home = rows[0];
    if (!home) {
      return res.redirect("/host/host-homes");
    }
    res.render(path.join("host", "edit-home"), {
      home: home,
      editing,
      currentPage: "editHome",
      pageTitle: "Edit Home",
    });
  });
};

exports.posteditHome = (req, res) => {
  const id = req.params.id;
  Home.findById(id).then(([rows]) => {
    const existingHome = rows[0];
    if (!existingHome) {
      return res.redirect("/host/host-homes");
    }
    let image = existingHome.image;
    // If a new file is uploaded, update image and delete old one
    if (req.file) {
      image = "/uploads/" + req.file.filename;
      // Only delete if the old image exists and is not empty
      if (
        existingHome.image &&
        existingHome.image.startsWith("/uploads/")
      ) {
        const oldImagePath = path.join(
          rootDir,
          "public",
          existingHome.image
        );
        fs.unlink(oldImagePath, (err) => {
          if (err) console.error("Failed to delete old image:", err);
        });
      }
    }
    const { name, address, description, price } = req.body;
    // Save updated home
    const home = new Home(
      name,
      description,
      address,
      price,
      image,
      id
    );
    home.save().then(() => {
      res.redirect("/host/host-homes");
    });
  });
};

exports.deleteListingConfirmation = (req, res) => {
  res.render(path.join("host", "delete-home-confirmation"), {
    id: req.params.id,
    currentPage: "deleteHome",
    pageTitle: "Delete Home",
  });
};

exports.deleteHome = (req, res) => {
  
  Home.deleteById(req.params.id).then(() => {
    
    Favourite.deleteFromFavourites(req.params.id, () => {
      res.redirect("/host/host-homes");
    });
    
  });
  
};
