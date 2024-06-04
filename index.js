const fs = require('fs')    
const path = require('path')


fs.readFile(path.join(__dirname, 'file2','starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})

console.log('hello...');

fs.writeFile(path.join(__dirname, 'file2','reply.txt'), 'Nice to meet you.' , (err) => {
    if (err) throw err;
    console.log('write complete');
})

fs.appendFile(path.join(__dirname, 'file2','Test.txt'), 'Testing the text.' , (err) => {
    if (err) throw err;
    console.log('append complete');
})

//exit on uncaught exception

process.on('uncaughtException', err => {
    console.log(`There was an uncaught error: ${err}`);
    process.exit(1);
  })
