const https = require('https');
const fs = require('fs');

const url = 'https://jsonplaceholder.typicode.com/posts';
https.get(url, res => {
    res.setEncoding('UTF-8');
    let body = '';
    res.on('data', data => {
        body += data;
    })
    res.on('end', () => {
        // fs.writeFile('data.json', body, 'utf8', (err) => {
        //     if (err) return err;
        //     console.log('we just pull all the post and created a file');
        // })
        body = JSON.parse(body);
        console.log(`${body[0].title }`);
    })
})