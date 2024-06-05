const fs = require('fs');

const rs = fs.createReadStream('./file2/lorem.txt', {encoding: 'utf8'});
const ws = fs.createWriteStream('./file2/new-lorem.txt');

rs.pipe(ws);

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// })