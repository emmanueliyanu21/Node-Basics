// const execute = require('child_process').exec;

// execute("ls", (err, stdout) => {
//     if (err) {
//         return err
//     }
//     console.log(stdout)
// })

// const { spawn } = require('child_process');
// const ls = spawn('ls', ['-lh', '/usr']);

// ls.stdout.on('data', (data) => {
//     console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//     console.error(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//     console.log(`child process exited with code ${code}`);
// });


// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// // listener #1
// var listner1 = function listner1() {
//     console.log('listner1 executed.');
// }

// // listener #2
// var listner2 = function listner2() {
//     console.log('listner2 executed.');
// }

// // Bind the connection event with the listner1 function
// eventEmitter.addListener('connection', listner1);

// // Bind the connection event with the listner2 function
// eventEmitter.on('connection', listner2);

// var eventListeners = require('events').EventEmitter.listenerCount
//     (eventEmitter, 'connection');
// console.log(eventListeners + " Listner(s) listening to connection event");

// // Fire the connection event 
// eventEmitter.emit('connection');

// // Remove the binding of listner1 function
// eventEmitter.removeListener('connection', listner1);
// console.log("Listner1 will not listen now.");

// // Fire the connection event 
// eventEmitter.emit('connection');

// eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
// console.log(eventListeners + " Listner(s) listening to connection event");

// console.log("Program Ended.");

// const spawn = require('child_process').spawn;
// const ls = spawn('ls', ['-lh', '/usr']);

// ls.stdout.on('data', (data) => {
//     console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//     console.log(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//     console.log(`child process exited with code ${code}`);
// });


// Explanation on child process
// Node.js Child Process
// The Node.js child process module provides the ability to spawn child processes in a similar manner to popen(3).

// There are three major way to create child process:

// child_process.exec() method: This method runs a command in a console and buffers the output.
// child_process.spawn() method: This method launches a new process with a given command.
// child_process.fork() method: This method is a special case of spawn() method to create child processes.

// Example 1
// const exec = require('child_process').exec;
// exec('my.bat', (err, stdout, stderr) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(stdout);
// });  

// example 2
// const fs = require('fs');
// const child_process = require('child_process');
// for (var i = 0; i < 3; i++) {
//     var workerProcess = child_process.exec('node support.js ' + i,
//         function (error, stdout, stderr) {
//             if (error) {
//                 console.log(error.stack);
//                 console.log('Error code: ' + error.code);
//                 console.log('Signal received: ' + error.signal);
//             }
//             console.log('stdout: ' + stdout);
//             console.log('stderr: ' + stderr);
//         });
//     workerProcess.on('exit', function (code) {
//         console.log('Child process exited with exit code ' + code);
//     });
// }  


// Node.js child_process.spawn() method
// The child_process.spawn() method launches a new process with a given command.This method returns streams(stdout & stderr) and it is generally used when the process returns large amount of data.

// Syntax:

// child_process.spawn(command[, args][, options])

// Parameters:

// 1) command: It specifies the command to run.

// 2) args: It specifies an array List of string arguments.

// 3) options: It may contain one or more of the following options:

// cwd: It specifies the current working directory of the child process.
// env: It specifies environment key - value pairs.
// stdio: Array | String Child's stdio configuration
// customFds: Array Deprecated File descriptors for the child to use for stdio
// detached Boolean : The child will be a process group leader
// uid Number: Sets the user identity of the process.
// gid Number: Sets the group identity of the process.

// Node.js child_process.spawn() example
// Create two js files named support.js and master.js, having the following code:

// File: support.js

// console.log("Child Process " + process.argv[2] + " executed.");
// // File: master.js

// const fs = require('fs');
// const child_process = require('child_process');
// for (var i = 0; i < 3; i++) {
//     var workerProcess = child_process.spawn('node', ['support.js', i]);
//     workerProcess.stdout.on('data', function (data) {
//         console.log('stdout: ' + data);
//     });
//     workerProcess.stderr.on('data', function (data) {
//         console.log('stderr: ' + data);
//     });
//     workerProcess.on('close', function (code) {
//         console.log('child process exited with code ' + code);
//     });
// }  


// Node.js child_process.fork() method
// The child_process.fork method is a special case of the spawn() to create Node processes.This method returns object with a built -in communication channel in addition to having all the methods in a normal ChildProcess instance.

//     Syntax:

// child_process.fork(modulePath[, args][, options])
// Parameters:

// 1) modulePath: This is a string specifies the module to run in the child.

// 2) args: It specifies an array List of string arguments.

// 3) options: It may contain one or more of the following options:

// cwd: It specifies the current working directory of the child process.
// env: It specifies environment key - value pairs.
// execPath: This is a string Executable used to create the child process.
// execArgv: It specifies Array List of string arguments passed to the executable(Default: process.execArgv).
// silent: It specifies Boolean If true, stdin, stdout, and stderr of the child will be piped to the parent, otherwise they will be inherited from the parent, see the "pipe" and "inherit" options for spawn()'s stdio for more details (default is false).
// uid Number: Sets the user identity of the process.
// gid Number: Sets the group identity of the process.
//     Node.js child_process.fork() example
// Create two js files named support.js and master.js, having the following code:

// File: support.js

// const fs = require('fs');
// const child_process = require('child_process');
// for (var i = 0; i < 3; i++) {
//     var worker_process = child_process.fork("support.js", [i]);
//     worker_process.on('close', function (code) {
//         console.log('child process exited with code ' + code);
//     });
// }  