const fs = require("fs");

// for writing a file
// ----------------------------------
// fs.writeFile('test.txt', 'Hello World! ', 'utf8', function (err) {
//     if (err) {
// return console.log(err);
//     }
//     else {
//         console.log("The file was saved!");
//     }
// })

// for reading a file
// ----------------------------------
// fs.readFile('test.txt', 'utf8', function (err, data) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(data);
// })

// for deleting a file
// ----------------------------------
// fs.unlink('test.txt', function (err) {
//     if (err) {
//         return console.log(err);
//     }
// })

// reading code of current js file and writing in another js file
// ----------------------------------
fs.readFile(
  "D:\\software_dev\\Backend\\NodeJS\\writing_files_with_nodejs\\my.js",
  "utf8",
  function (err, data) {
    if (err) {
      return console.log(err);
    }
    fs.writeFile("test.js", data, "utf8", function (err) {
      if (err) {
        return console.log(err);
      }
    });
  }
);
