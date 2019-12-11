var express = require('express')
var Client = require('../models').Client

var router = express.Router()

router.get('/client', function(req, res, next){
    Client.findAll({order: ['name']})
        .then(client => {
            return res.json(client)
        })
        .catch( err => next.err() )
})

module.exports = router