const readline = require('readline');
const util = require('util');
const http = require('http')

// Excercise 1
// const RL = readline.createInterface(process.stdin, process.stdout);
// RL.question('What is your local name? ', (name) => {
//     RL.setPrompt(`${name} how old are you `);
//     RL.prompt();
//     RL.on('line', (age) => {
//         if (age < 18) {
//             util.log(`${name.trim()} because you are ${age} years old, you cannot proceed`);
//             RL.close();
//         } else {
//             util.log(`${name.trim()} since you are ${age}, you can now enjoy our services`);
//             RL.close();
//         }
//     })
// });


// The node.js "util" module provides some functions to print formatted strings as well as some 'utility' functions that are helpful for debugging purposes.Use require('util') to access these functions

// create interface understanding

// question

// line & data
// 

// excercise 2
// var readline = require('readline'),
//     rl = readline.createInterface(process.stdin, process.stdout),
//     prefix = 'OHAI> ';

// rl.on('line', function (line) {
//     switch (line.trim()) {
//         case 'hello':
//             console.log('world!');
//             break;
//         default:
//             console.log('Say what? I might have heard `' + line.trim() + '`');
//             break;
//     }
//     rl.setPrompt(prefix, prefix.length);
//     rl.prompt();
// }).on('close', function () {
//     console.log('Have a great day!');
//     process.exit(0);
// });
// console.log(prefix + 'Good to see you. Try typing stuff.');
// rl.setPrompt(prefix, prefix.length);
// rl.prompt();


// Excericse 3
// var arr = ['elem1', 'elem2', 'elem3', 'elem4', 'elem5'],
//     lastIndx = arr.length - 1;
// showArrElem();
// function showArrElem() {
//     console.log('press number from 0 to ' + lastIndx + ', or "q" to quit');
//     process.stdin.setRawMode(true);
//     process.stdin.on('readable', function () {
//         var key = String(process.stdin.read());
//         showArrEl(key);
//     });

//     function showArrEl(key) {
//         console.log(arr[key]);
//     }

// };

// Excercise 4
// var req = http.get("http://www.google.com", function (res) {
//     console.log("Got response: " + res.statusCode);

//     res.on('data', function (chunk) {
//         console.log(chunk.toString())
//     });

// }).on('error', function (e) {
//     console.log("Got error: " + e.message);
// });

// more explanation
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     terminal: false
// });

// rl.on('line', function (line) {
//     console.log(line);
// })

// Excerise 4.1

// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("What is your name ? ", function (name) {
//     rl.question("Where do you live ? ", function (country) {
//         console.log(`${name}, is a citizen of ${country}`);
//         rl.close();
//     });
// });

// rl.on("close", function () {
//     console.log("\nBYE BYE !!!");
//     process.exit(0);
// });

// Excerise 5
// const prompt = require('prompt');

// prompt.start();

// prompt.get(['username', 'email'], function (err, result) {

//     console.log('Command-line input received:');
//     console.log('  username: ' + result.username);
//     console.log('  email: ' + result.email);

//     data = result.username;
// });

// console.log(data);
// https://stackoverflow.com/questions/48125976/how-to-read-data-from-console-in-node-js

// var prompt = require('prompt');

// function getPromt() {
//     return new Promise((resolve, recect) => { //why new promise
//         prompt.start();

//         prompt.get(['username', 'email'], function (err, result) {
//             console.log('Command-line input received:');
//             console.log('  username: ' + result.username);
//             console.log('  email: ' + result.email);
//             resolve(result.username);
//         });
//     });
// }
// getPromt().then(data =>
//     console.log('After promise ' + data), () => { });

// const prompt = require('prompt');

// prompt.start();

// prompt.get(['username', 'email'], function (err, result) {
//     if (err) { return onErr(err); }
//     console.log('Command-line input received:');
//     console.log('  Username: ' + result.username);
//     console.log('  Email: ' + result.email);
// });

// function onErr(err) {
//     console.log(err);
//     return 1;
// }

// var readline = require('readlin÷ße');

// Excercise 6
// function createCLI(opt) {

//     var rl = readline.createInterface({
//         input: opt.input,
//         output: opt.output,
//         terminal: opt.terminal || true,
//         completer: opt.completer ||
//             function asyncCompleter(linePartial, callback) {
//                 var completion = linePartial.split(/[ ]+/);
//                 callback(null, [completion, linePartial]);
//             }
//     });

//     rl.on('line', function (line) {
//         if (!line.trim()) { this.prompt(); }
//         else { this.write(line); }
//     }).on('close', function () {
//         this.output.write('\n Have a great day!');
//         process.exit(0);
//     }).setPrompt(' > ');

//     rl.output.write(' CLI initialized\n');
//     return rl;
// }

// var cli = createCLI({
//     input: process.stdin,
//     output: process.stdout
// });

// cli.prompt();


