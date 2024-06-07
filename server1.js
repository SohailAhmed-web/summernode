const http = require('http');
const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises;

const logEvents = require('./logEvents');
const EventEmitter = require('events');

class Emitter extends EventEmitter {}

// Initialize object
const myEmitter = new Emitter();

const PORT = process.env.PORT || 3500;

const serveFile = async (filePath, contentType, response) => {
    try {
        const rawData = await fsPromises.readFile(filePath, 'utf8');
        const data = contentType === 'application/json'
        ? JSON.parse(rawData) : 
        response.writeHead(200, { 'Content-Type': contentType });
        response.end(
            contentType === 'application/json' ? JSON.stringify(data) : data
        );
    } catch (err) {
        console.log(err);
        response.statusCode = 500;
        response.end('Server Error');
    }
};

const server = http.createServer(async (req, res) => {
    console.log(req.url, req.method);

    const extension = path.extname(req.url);

    let contentType;

    switch (extension) {
        case '.html':
            contentType = 'text/html';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        default:
            contentType = 'text/html';
            break;
    }

    let filePath = 
        contentType === 'text/html' && req.url === '/'
            ? path.join(__dirname, 'views', 'index.html')
            : contentType === 'text/html' && req.url.slice(-1) === '/'
            ? path.join(__dirname, 'views', req.url, 'index.html')
            : contentType === 'text/html'
            ? path.join(__dirname, 'views', req.url)
            : path.join(__dirname, req.url);

    // Make .html extension not required in the browser
    if (!extension && req.url !== '/') filePath += '.html';

    try {
        const fileStat = await fsPromises.stat(filePath);
        if (fileStat.isFile()) {
            serveFile(filePath, contentType, res);
        } else {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Bad Request: Path is a directory, not a file');
        }
    } catch (err) {
        if (err.code === 'ENOENT') {
            switch (path.parse(filePath).base) {
                case 'old-page.html':
                    res.writeHead(301, { Location: '/new-page.html' });
                    res.end();
                    break;
                case 'www-page.html':
                    res.writeHead(301, { Location: '/' });
                    res.end();
                    break;
                default:
                    serveFile(path.join(__dirname, 'views', '404.html'), 'text/html', res);
                    break;
            }
        } else {
            console.log(err);
            res.statusCode = 500;
            res.end('Server Error');
        }
    }
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
