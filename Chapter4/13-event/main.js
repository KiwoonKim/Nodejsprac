const logger = require('./logger.js');

// 새로 선언하면 안됨.
// const EventEmitter = require('events')
// const emitter = new EventEmitter();

// emitter.on('log', (event) =>{
//     console.log((event));
// })

const Logger = new logger.Logger();


Logger.on('log', (event)=>{
    console.log(event);
})
Logger.log(() => {
    console.log('........ doing something!');
})