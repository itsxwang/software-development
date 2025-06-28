const fs = require("fs");
const path = require("path");
const { rootDir } = require("../utils/pathUtil");
const { v4: uuidv4 } = require("uuid");

module.exports = class Home {
  constructor(aboutHome, homeAddress, contactinfo, homePrice, homeImage, id) {
    this.id = id;
    this.aboutHome = aboutHome;
    this.homeAddress = homeAddress;
    this.contactinfo = contactinfo;
    this.homePrice = homePrice;
    this.homeImage = homeImage;
  }

  save(callback) {
    Home.fetchAll((homes) => {
      if (this.id) {
        const existingHomeIndex = homes.findIndex(
          (home) => home.id === this.id
        );
        homes[existingHomeIndex] = this;
      } else {
        this.id = uuidv4();
        homes.push(this);
      }

      fs.writeFile(
        path.join(rootDir, "data", "homes.json"),
        JSON.stringify(homes, null, 2),
        (err) => {
          if (!err) {
            callback();
          }
        }
      );
    });
  }

  // NOTE: When you have to empty data of homes.json, remove all objects inside the array, don't remove array itself otherwise JSON.parse will cause error
  static fetchAll(callback) {
    fs.readFile(
      path.join(rootDir, "data", "homes.json"),
      (err, fileContent) => {
        callback(!err ? JSON.parse(fileContent) : []);
      }
    );
  }

  static findById(id, callback) {
    Home.fetchAll((homes) => {
      const home = homes.find((home) => home.id === id);
      callback(home);
    });
  }

  static deleteById(id, callback) {
    Home.fetchAll((homes) => {
      const updatedHomes = homes.filter((home) => {
        if (home.id === id) {
          fs.unlink(path.join(rootDir, "public", home.homeImage), (err) => {
            if (err) {
              console.log("failed to delete image after deleting home: ", err);
            }
          });
          return false;
        }
        return true;
      });

      fs.writeFile(
        path.join(rootDir, "data", "homes.json"),
        JSON.stringify(updatedHomes, null, 2),
        (err) => {
          if (!err) {
            callback();
          }
        }
      );
    });
  }
};
