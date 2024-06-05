/*
const fsPromises = require('fs').promises;   
const path = require('path')

const fileOps = async () => {

    try {   
        const data = await fsPromises.readFile(path.join(__dirname, 'file2','starter.txt'), 'utf8');
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'file2','starter.txt'));
        await fsPromises.writeFile(path.join(__dirname, 'file2','promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'file2','promiseWrite.txt'), '\n\n nice to meet you.');
        await fsPromises.rename(path.join(__dirname, 'file2','promiseWrite.txt'), path.join(__dirname, 'file2','promiseComplete.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'file2','promiseComplete.txt'), 'utf8');
        console.log(newData);
        
    }
    catch (err) {
        console.error(err);
    }
}

fileOps();  




// fs.writeFile(path.join(__dirname, 'file2','reply.txt'), 'Nice to meet you.' , (err) => {
//     if (err) throw err;
//     console.log('write complete');

//     fs.appendFile(path.join(__dirname, 'file2','reply.txt'), '\n\n Yes it is.' , (err) => {
//         if (err) throw err;
//         console.log('Append complete');
    
//         fs.rename(path.join(__dirname, 'file2','reply.txt'), path.join(__dirname, 'file2','newReply.txt'), (err) => {
//             if (err) throw err;
//             console.log('Rename complete');
//           })
//     })
// })


//exit on uncaught exception

process.on('uncaughtException', err => {
    console.log(`There was an uncaught error: ${err}`);
    process.exit(1);
  })
*/
console.log('Testing')