const emitter = require('./modules/SendEmail')

emitter.on('newEvents', (message) => {
    console.log(`Email: ${message}`)
});
emitter.emit('newEvents', 'Send activation mails to users after registration');


// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter { }

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//     console.log('an event occurred!');
// });
// myEmitter.emit('event');

// event - driven architecture in which certain kinds of objects(called "emitters") emit named events that cause Function objects("listeners") to be called.

// Node.js Events
// In Node.js applications, Events and Callbacks concepts are used to provide concurrency.As Node.js applications are single threaded and every API of Node js are asynchronous.So it uses async function to maintain the concurrency.Node uses observer pattern.Node thread keeps an event loop and after the completion of any task, it fires the corresponding event which signals the event listener function to get executed.

// Event Driven Programming
// Node.js uses event driven programming.It means as soon as Node starts its server, it simply initiates its variables, declares functions and then simply waits for event to occur.It is the one of the reason why Node.js is pretty fast compared to other similar technologies.

// There is a main loop in the event driven application that listens for events, and then triggers a callback function when one of those events is detected.

// Difference between Events and Callbacks:
// Although, Events and Callbacks look similar but the differences lies in the fact that callback functions are called when an asynchronous function returns its result where as event handling works on the observer pattern.Whenever an event gets fired, its listener function starts executing.Node.js has multiple in -built events available through events module and EventEmitter class which is used to bind events and event listeners.

// EventEmitter class to bind event and event listener:

// // Import events module  
// var events = require('events');
// // Create an eventEmitter object  
// var eventEmitter = new events.EventEmitter();
// To bind event handler with an event:

// // Bind event and even handler as follows  
// eventEmitter.on('eventName', eventHandler);
// To fire an event:

// // Fire an event   
// eventEmitter.emit('eventName');
// Node.js Event Example
// File: main.js

// // Import events module  
// var events = require('events');
// // Create an eventEmitter object  
// var eventEmitter = new events.EventEmitter();

// // Create an event handler as follows  
// var connectHandler = function connected() {
//     console.log('connection succesful.');

//     // Fire the data_received event   
//     eventEmitter.emit('data_received');
// }

// // Bind the connection event with the handler  
// eventEmitter.on('connection', connectHandler);
// // Bind the data_received event with the anonymous function  
// eventEmitter.on('data_received', function () {
//     console.log('data received succesfully.');
// });
// // Fire the connection event   
// eventEmitter.emit('connection');
// console.log("Program Ended.");