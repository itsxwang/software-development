const homes = [];

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
  }

  static fetchAll() {
    return homes;
  }
}