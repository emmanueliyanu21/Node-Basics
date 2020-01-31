const express = require('express');
const app = express();

app.use('/css', express.static(__dirname + '/public'));

app.use((req, res, next) => {
    console.log('middleware');
    next();
});

app.get('/', (req, res) => {
    res.send(`
    
        <html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <h2>Hello world</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur nesciunt distinctio quisquam eius.
        Repudiandae corporis repellendus praesentium autem, harum aliquam voluptas qui, ipsam velit optio mollitia
        reprehenderit quos iusto.</p>
</body>
 
</html>
    
    `)
}).listen(3300);
console.log('listening on port 3300')