const express = require('express')
const router = express.Router()

const SimpleOperations = require('./resolvers/SimpleOperations')

var simpleOperations = new SimpleOperations()

const TestOperationsStatus = (result = []) => {
    const finalResultArray = result.map((operation) => {
        if (!Number(operation) && operation == false && operation !== 0) {
            return "Não foi possível realizar o cálculo"
        } else {
            return operation
        }
    })

    var finalNumber

    finalResultArray.forEach(number => {
        if (number !== undefined) {
            finalNumber = number
        }
    })

    return finalNumber
}

router

    .post('/resolve', (req, res) => {
        if (req.body.message) {

            /*
             * This method will test all conditions and return whether or not the calculation failed.
             * 
             */

            const result = TestOperationsStatus([
                simpleOperations.basicOperationsInNumbers(req.body.message),
                simpleOperations.solveOperationsInSimpleContext(req.body.message)
            ])

            res.json({ result: result })
        }
    })

module.exports = router
