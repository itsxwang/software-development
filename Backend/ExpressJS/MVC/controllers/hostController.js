const path = require("path");
const Home = require("../models/homes");

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
  const { aboutHome, homeAddress, contactinfo, homePrice } = req.body;
  const homeImage = req.file ? "/uploads/" + req.file.filename : "";
  const HomeModel = require("../models/homes");
  const home = new HomeModel(
    aboutHome,
    homeAddress,
    contactinfo,
    homePrice,
    homeImage
  );
  home.save(() => {
    res.redirect("/host/host-homes");
  });
};

exports.gethostHomes = (req, res) => {
  Home.fetchAll((homes) => {
    res.render(path.join("host", "host-homes"), {
      homes: homes,
      currentPage: "hostHomes",
      pageTitle: "Host Homes",
    });
  });
};

exports.geteditHome = (req, res) => {
  const editing = true;
  Home.findById(req.params.id, (home) => {
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
  Home.findById(id, (existingHome) => {
    if (!existingHome) {
      return res.redirect("/host/host-homes");
    }
    let homeImage = existingHome.homeImage;
    // If a new file is uploaded, update image and delete old one
    if (req.file) {
      homeImage = "/uploads/" + req.file.filename;
      // Only delete if the old image exists and is not empty
      if (
        existingHome.homeImage &&
        existingHome.homeImage.startsWith("/uploads/")
      ) {
        const oldImagePath = path.join(
          rootDir,
          "public",
          existingHome.homeImage
        );
        fs.unlink(oldImagePath, (err) => {
          if (err) console.error("Failed to delete old image:", err);
        });
      }
    }
    const { aboutHome, homeAddress, contactinfo, homePrice } = req.body;
    // Save updated home
    const home = new Home(
      aboutHome,
      homeAddress,
      contactinfo,
      homePrice,
      homeImage,
      id
    );
    home.save(() => {
      res.redirect("/host/host-homes");
    });
  });
};

exports.deleteHomeConfirmation = (req, res) => {
    res.render(path.join("host", "delete-home-confirmation"), {
      homeId: req.params.id,
      currentPage: "deleteHome",
      pageTitle: "Delete Home",
    });
}