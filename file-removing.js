const fs = require('fs');

fs.rmdirSync('./newDir');
try {
    fs.unlinkSync('./newDir/data.html');
} catch (err) {
    console.log('no such directory')
}
