var express = require('express')
var client = require('../models').Client

var router = express.Router()

router.get('/client', function(req, res, next){
    client.findAll({order: ['name']})
        .then(client => {
            return res.json(client)
        })
        .catch( err => next.err() )
})

module.exports = router