const express = require('express')
const fs = require('fs')
const PORT = 3001
const HOST = 'localhost'

const app = express()

app.set('view engine', 'ejs') // pattern
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    // fs.createReadStream('./views/index.html').pipe(res)
    res.render('index')
})

app.get('/about', (req, res) => {
    // res.sendFile(__dirname + '/views/about.html')
    res.render('about')
})

app.get('/user/:username/:id', (req, res) => {
    let hobbies = [ 'Children', 'Family', 'Bla-Bla']
    let data = { user_id: req.params.id, username: req.params.username , hobbies: hobbies}
    res.render('user', data)
})


app.post('/check-user', (req, res) => {
    let username = req.body.username
    if(username == "")
        return res.redirect('/')
    else
        return res.redirect('/user/' + username + "/234")
})

app.get('*', (req, res) => {
    fs.createReadStream('./views/404.html').pipe(res)
})




app.listen(PORT, ()=>{
    console.log(`Sever started: http://${HOST}:${PORT}`)
})