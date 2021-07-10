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
    
    return finalResultArray.reverse().reduce(element => element)
}

router

    .post('/resolve', (req, res) => {
        if (req.body.message) {

            /*
             * Tests
             * 
             */

            let basic = simpleOperations.basic(req.body.message)
            let contextualized = simpleOperations.contextualized(req.body.message)

            const result = TestOperationsStatus([
                basic,
                contextualized
            ])

            res.json({ result: result })
        }
    })

module.exports = router
