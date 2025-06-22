const path = require("path");
console.log(path.join(__dirname, "views", "404.html"));


console.log(path.dirname(require.main.filename));