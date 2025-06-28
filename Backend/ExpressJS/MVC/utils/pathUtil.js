const path = require('path');

// `require.main.filename` is the absolute path of the entry point file that was run with node, which in our case is app.js.
exports.rootDir = path.dirname(require.main.filename);