const fs = require("fs");
const path = require("path");
const { rootDir } = require("../utils/pathUtil");

module.exports = class Home {
  constructor(aboutHome, homeAddress, contactinfo, homePrice, homeImage) {
    this.aboutHome = aboutHome;
    this.homeAddress = homeAddress;
    this.contactinfo = contactinfo;
    this.homePrice = homePrice;
    this.homeImage = homeImage;
  }

  save() {
    Home.fetchAll((homes) => {
      homes.push(this);

      fs.writeFile(
        path.join(rootDir, "data", "homes.json"),
        JSON.stringify(homes, null, 2),
        (err) => {
          console.log(err);
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
};
