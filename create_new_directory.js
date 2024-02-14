const fs = require('fs')


// create directory with file in it

fs.mkdir('new_directory', ()=>{
    fs.writeFile('./new_directory/some.txt','Hello World! ', ()=>{})
})