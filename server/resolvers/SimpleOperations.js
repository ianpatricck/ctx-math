const dataOperationsContext = require('../database')
const operationLoops = require('./operationLoops')

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
        let finalQuestion

        const additionArray = dataOperationsContext.map((elements) => elements.addition)
        const subtractionArray = dataOperationsContext.map((elements) => elements.subtraction)
        const multiplicationArray = dataOperationsContext.map((elements) => elements.multiplication)
        const divisionArray = dataOperationsContext.map((elements) => elements.division)
        const potentiationArray = dataOperationsContext.map((elements) => elements.potentiation)

        finalQuestion = operationLoops.loopForAddition(question, additionArray.join(' ').split(','))
        finalQuestion = operationLoops.loopForSubtraction(finalQuestion, subtractionArray.join(' ').split(','))
        finalQuestion = operationLoops.loopForMultiplication(finalQuestion, multiplicationArray.join(' ').split(','))
        finalQuestion = operationLoops.loopForDivision(finalQuestion, divisionArray.join(' ').split(','))
        finalQuestion = operationLoops.loopForPotentiation(finalQuestion, potentiationArray.join(' ').split(','))

        return eval(finalQuestion)
    }
}

module.exports = SimpleOperations
