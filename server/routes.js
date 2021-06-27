const express = require('express')
const router = express.Router()

const SimpleOperations = require('./resolvers/SimpleOperations')

var simpleOperations = new SimpleOperations()

router

    .post('/resolve', (req, res) => {
        if (req.body.message) {
            const basicResult = simpleOperations.basicOperators(req.body.message)
            res.json({ result: basicResult })
        }
    })

module.exports = router
