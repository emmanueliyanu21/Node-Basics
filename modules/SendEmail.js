const events = require('events');
// const EventEmitter = require('events').EventEmitter

let emitter = new events.EventEmitter();

module.exports = emitter;