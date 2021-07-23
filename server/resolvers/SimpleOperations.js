const dataOperationsContext = require('../database/dataOperationsContext')
const genericQuestions = require('../database/genericQuestions')

const { loopForOperations, checksForCharactersToBeDeleted } = require('./TreatmentFunctions')

class SimpleOperations {

    constructor() {
        this.finalQuestion = null
    }

    /**
     * Method for doing basic calculations without using context.
     * 
     * @param  question 
     * @returns Number || Boolean
     *  
     */

    basicOperationsInNumbers(question) {
        try {
            return eval(question)
        } catch {
            return false
        }
    }

    /**
     * Check for a generic question, 'already implemented in the database'.
     * 
     * @param  question 
     * @returns String
     * 
     */  

    checkForSomethingGeneric(question) {
        // console.log(genericQuestions)
    }

    /**
     * Method that solves contextual problems and tries to bring a correct result.
     * 
     * @param  question 
     * @returns Number || Boolean
     * 
     */  

    solveOperationsInSimpleContext(question) {
        this.finalQuestion = question

        const operators = dataOperationsContext.reduce(object => object)

        try {

            this.finalQuestion = loopForOperations(this.finalQuestion, operators.addition, '+')
            this.finalQuestion = loopForOperations(this.finalQuestion, operators.subtraction, '-')
            this.finalQuestion = loopForOperations(this.finalQuestion, operators.multiplication, '*')
            this.finalQuestion = loopForOperations(this.finalQuestion, operators.division, '/')
            this.finalQuestion = loopForOperations(this.finalQuestion, operators.potentiation, '**')

            return checksForCharactersToBeDeleted(this.finalQuestion)
        } catch {
            return false
        }
    }
}

module.exports = SimpleOperations
