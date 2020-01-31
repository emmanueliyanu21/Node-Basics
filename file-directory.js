const fs = require('fs');

if (!fs.exists("views")) {
    fs.mkdir('views', (err) => {
        if (err) return err;
        fs.writeFile('./views/new.html', 'the future of work will really be exicting', (err) => {
            if (err) return err;
            console.log('file and folder successfully created');
        })
    });
}