const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use('/assets', express.static(__dirname + '/public'));

app.use((req, res, next) => {
    console.log('middleware')
    next();
})

app.post('/post', (req, res) => {
    console.log(`its working`); 
})


app.listen(3400)
console.log('listening on port 3400')

//npm install body-parser
// SMART

// Vision Boars
// 1. set goals
// 2. Specific goals for every area of ur life
// 3. Category
    // family
    // Finance
        // save $20k this year
    // Travel 
        // Want to get into 3 new country this year

// 4. Get pictures 
    // Virtual vision board
    // Physical vision board
// 5. Keep it in focus