// const fs = require('fs');

// fs.writeFile('data.html', `\n Hello World, the world has been integrated with technology \n`, 'utf-8', (err) => {
//     if (err) return err;
//     console.log("the file was created");
// })

// fs.appendFile('data.html', `\n Hello World, the world has been integrated with technology \n`, 'utf-8', (err) => {
//     if (err) return err;
//     console.log("the file was created");
// })

// Problem 1
// fs.open('./start.html', 'r', function (err, fileToRead) {
//     if (!err) {
//         fs.readFile(fileToRead, { encoding: 'utf-8' }, function (err, data) {
//             if (!err) {
//                 console.log('received data: ' + data);
//                 response.writeHead(200, { 'Content-Type': 'text/html' });
//                 response.write(data);
//                 response.end();
//             } else {
//                 console.log(err);
//             }
//         });
//     } else {
//         console.log(err);
//     }
// });

// Solution1
// var fs = require('fs'),
//     path = require('path'),
//     filePath = path.join(__dirname, 'start.html');

// fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
//     if (!err) {
//         console.log('received data: ' + data);
//         response.writeHead(200, { 'Content-Type': 'text/html' });
//         response.write(data);
//         response.end();
//     } else {
//         console.log(err);
//     }
// }); 