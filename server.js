const http = require('http')
const fs = require('fs')

let server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })

    if (req.url == '/')
        fs.createReadStream('./views/index.html').pipe(res)
    else if (req.url == '/about')
        fs.createReadStream('./views/about.html').pipe(res)
    else
        fs.createReadStream('./views/404.html').pipe(res)

})

const PORT = 3001
const HOST = 'localhost'

server.listen(PORT, HOST, ()=>{
    console.log(`Sever started: http://${HOST}:${PORT}`)
})