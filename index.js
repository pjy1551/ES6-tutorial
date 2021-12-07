var express = require('express')
var cost = require('./lecture/constAndLet/constAndLet')

var app = express()
app.listen(8099);


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    let main = 'ES6 tutroial test'
    res.send(cost)
})
