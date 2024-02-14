const fs = require('fs')

//  and remove directory with file

fs.unlink('./new_directory/some.txt', ()=>{
    fs.rmdir('./new_directory', ()=>{})
})