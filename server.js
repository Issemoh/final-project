var express = require('express')
var bodyParser = require('body-parser')
var client_api = require('./routes/Clint')

var app = express()

app.use(bodyParser.json())

app.use('/api', client_api)


// Those are Error handlers
app.use(function(req, res, res, next){
    res.status(404).send('Not found')
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Server error')
})

//
var server = app.listen(process.env.PORT || 3000, function() {
    console.log('app running on port', server.address().port)
})