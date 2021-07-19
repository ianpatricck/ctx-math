const dataOperationsContext = require('../database')
const loopForOperations = require('./operationLoops')

/**
 * Simple Operations
 * 
 */

class SimpleOperations {
    basic(question) {
        try {
            return eval(question)
        } catch {
            return false
        }
    }

    contextualized(question) {
        let finalQuestion = question

        const operators = dataOperationsContext.reduce(object => object)

        try {

            finalQuestion = loopForOperations(finalQuestion, operators.addition, '+')
            finalQuestion = loopForOperations(finalQuestion, operators.subtraction, '-')
            finalQuestion = loopForOperations(finalQuestion, operators.multiplication, '*')
            finalQuestion = loopForOperations(finalQuestion, operators.division, '/')
            finalQuestion = loopForOperations(finalQuestion, operators.potentiation, '**')

            return eval(finalQuestion)
        } catch {
            return false
        }


    }
}

module.exports = SimpleOperations
