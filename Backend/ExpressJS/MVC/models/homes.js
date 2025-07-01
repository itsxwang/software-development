const { homesDb: db } = require('../utils/databaseUtil');
const { v4: uuidv4 } = require("uuid");

module.exports = class Home {
  constructor(name, description, address, price, image,id) {
    this.name = name;
    this.description = description;
    this.address = address;
    this.price = price;
    this.image = image;
    this.id = id // can be undefined
  }

  save() {
    if (this.id) {
      // Update existing home
      return db.execute(
      'UPDATE homes SET home = ?, address = ?, description = ?, price = ?, image = ? WHERE id = ?',
      [this.home, this.address, this.description, this.price, this.image, this.id]
      );
    } else {
      // Insert new home
      this.id = uuidv4();
      return db.execute(
      'INSERT INTO homes (id, name, address, description, price, image) VALUES (?, ?, ?, ?, ?, ?)',
      [this.id, this.name, this.address, this.description, this.price, this.image]
      );
    }
  }

  static fetchAll() {
    return db.execute('SELECT * FROM homes') 
  }

  static findById(id) {
    return db.execute('SELECT * FROM homes WHERE id = ?', [id])
  }

  static deleteById(id) {
    return db.execute('DELETE FROM homes WHERE id = ?', [id]);
  }
};
