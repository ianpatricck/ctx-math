const express = require('express')
const router = express.Router()

const SimpleOperations = require('./resolvers/SimpleOperations')

var simpleOperations = new SimpleOperations()

router

    .post('/resolve', (req, res) => {
        if (req.body.message) {
            question = req.body.message

            simpleOperations.interpreter(question)
        }
    })

module.exports = router
