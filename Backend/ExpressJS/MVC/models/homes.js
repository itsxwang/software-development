const fs = require('fs');
const path = require('path');
const { rootDir } = require('../utils/pathUtil');

const homes = JSON.parse(fs.readFileSync(
  path.join(rootDir, 'data', 'homes.json'),
  'utf8'
));


module.exports = class Home {
  constructor(aboutHome, homeAddress, contactinfo, homePrice, homeImage) {
    this.aboutHome = aboutHome;
    this.homeAddress = homeAddress;
    this.contactinfo = contactinfo;
    this.homePrice = homePrice;
    this.homeImage = homeImage;
  }

  save() {
    homes.push(this);
    fs.writeFileSync(
      path.join(rootDir, 'data', 'homes.json'),
      JSON.stringify(homes, null, 2)
    );
  }

  static fetchAll() {
    return homes;
  }
}