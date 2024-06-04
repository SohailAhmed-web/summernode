//how nodejs differs from vanilla js
//1)nodejs runs on server - not in browser (backend not frontend)
//2) the console is the terminal window
//console.log('Hello World');

//3) global object instead of window object
//console.log(global);
//4) has common core modules that we will explore
//5) common js modules instead of es6 modules
//6) missing some JS APIs like fetch
const os = require('os');
const path = require('path');
const {add , subtract, multiply, divide} = require('./math');

console.log(add(2,3));
console.log(subtract(2,3));
console.log(multiply(2,3));
console.log(divide(2,3));




// console.log(os.type());
// console.log(os.platform());
// console.log(os.homedir());
// console.log(os.version());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));


