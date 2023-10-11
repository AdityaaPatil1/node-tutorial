const path = require('path');
console.log(path.sep);
const filepath = path.join('Content','textt','another text','jon.txt');
console.log(filepath);
const absloute = path.resolve(__dirname,'Content','textt','another text','jon.txt')
console.log(absloute);