const path = require('path');

module.exports = path.dirname(process.mainModule.filename);
console.log(path.dirname(process.mainModule.filename));