var express = require('express')
var execute = require('./execute')

var app = express()
app.listen(8099);


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send(execute)
})
