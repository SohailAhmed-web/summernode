const logEvents = require('./logEvents');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

//initialize object
const myEmitter = new MyEmitter();

//add listener for log event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    myEmitter.emit('log', 'Log event emitted!');
}, 2000);


const {format} = require('date-fns');
const {v4: uuid} = require('uuid');
 
console.log(format(new Date(), 'yyyy-MM-dd\tHH:mm:ss'));

console.log(uuid()) 
