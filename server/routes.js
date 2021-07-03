const express = require('express')
const router = express.Router()

const SimpleOperations = require('./resolvers/SimpleOperations')

var simpleOperations = new SimpleOperations()

const TestOperationsStatus = (result = []) => {
    const finalResult = result.map((operation) => {
        return !Number(operation) && operation == false ? "It was not possible to perform the calculation" : operation
    })

    return finalResult
}

router

    .post('/resolve', (req, res) => {
        if (req.body.message) {

            /*
             * Tests
             * 
             */

            let basicOperations = simpleOperations.basicOperators(req.body.message)

            const result = TestOperationsStatus([
                basicOperations
            ])

            res.json({ result: result })
        }
    })

module.exports = router
