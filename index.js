var express = require('express')
var app = express()
app.listen(8099);
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    let test = 'ES6 tutroial'
    res.send(test)
})
