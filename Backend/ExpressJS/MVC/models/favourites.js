const fs = require("fs");
const path = require("path");
const { rootDir } = require("../utils/pathUtil");

const favouriteDataPath = path.join(rootDir, "data", "favourites.json");

module.exports = class Favourite {
  constructor(homeId) {
    this.homeId = homeId;
  }

  static changeFavouritesData(homeId) {
    Favourite.getFavourites((favourites) => {
      if (favourites.includes(homeId)) {
        fs.writeFile(
          favouriteDataPath,
          JSON.stringify(favourites.filter((favourite) => favourite !== homeId), null , 2),
          (err) => {  
            if (err)
            console.log(err);
          }
        );
      } else {
        favourites.push(homeId);
        fs.writeFile(favouriteDataPath, JSON.stringify(favourites, null, 2), (err) => {
          if (err)
          console.log(err);
        });
      }
    });
  }

  static getFavourites(callback) {
    fs.readFile(favouriteDataPath, (err, fileContent) => {
      if (err || !fileContent || fileContent.length === 0) {
        callback([]);
        return;
      }
      try {
        callback(JSON.parse(fileContent));
      } catch (e) {
        callback([]);
      }
    }); 
  }

  static deleteFromFavourites(homeId,callback) {
    Favourite.getFavourites((favourites) => {
      fs.writeFile(
        favouriteDataPath,
        JSON.stringify(favourites.filter((favourite) => favourite !== homeId), null, 2),
        (err) => {
          if (!err && typeof callback === "function") {
            callback();
          }
        }
      );
    });
  }
};
