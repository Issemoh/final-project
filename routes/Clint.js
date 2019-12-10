var express = require('express')
var Client = require('../models').Client

var router = express.Router()

router.get('/client', function(req, res, next){
    Client.findAll({order: ['name']})
        .then(client => {
            console.log("clients" , client)
            return res.json(client)
        })
        .catch( err => {
            console.log("error ", err)
            return next(err)
         } )
})

module.exports = router