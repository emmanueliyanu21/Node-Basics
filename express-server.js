const express = require('express');
const app = express();
const port = process.env.PORT || 3200;

// app.get('/', (req, res) => {
//     res.send('<h2>Hello, Its working</h2>')
// });

// app.get('./api', (req, res) => {
//     res.send('<h2>API Page </h2>')
// })

app.get('/post/:id', (req, res) => {
    res.send(`Her is post ${params.id}`)
})

app.listen(port);
console.log('Its working');