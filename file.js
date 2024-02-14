const fs = require('fs')


// create and write data to the file
fs.readFile('some.txt', 'utf-8', (err, data) => {
    fs.writeFile('some.txt', err  + '\nHello World!', (err, data) => {
        console.log('All performed')
    } )
} )