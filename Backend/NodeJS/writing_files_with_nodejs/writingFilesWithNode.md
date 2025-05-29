Code to writefile with node

## for writing a file
```js
// fs is a built-in module in Node.js that provides a way to interact with the file system.
const fs = require('fs');


fs.writeFile('test.txt', 'Hello World!', function (err) {
    if (err) {
        return console.log(err);
    } 
})
```

## for reading a file
```js
// fs is a built-in module in Node.js that provides a way to interact with the file system.
const fs = require('fs');


fs.readFile('test.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);
})
```

## for deleting a file
```js
fs.unlink('test.txt', function (err) {
    if (err) {
        return console.log(err);
    }
})
```