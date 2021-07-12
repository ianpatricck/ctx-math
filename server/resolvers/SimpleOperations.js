const dataOperationsContext = require('../database')

/**
 * Simple Operations
 * 
 */

function loopForAddition(currentQuestion, keyWords) {
    let finalFormat

    keyWords.forEach((key) => {
        if (currentQuestion.includes(key))
            currentQuestion = currentQuestion.replace(new RegExp(key, 'gi'), '+')
        finalFormat = currentQuestion
    })

    return finalFormat
}

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

        finalQuestion = loopForAddition(question, additionArray.join(' ').split(','))

        return eval(finalQuestion)
    }
}

module.exports = SimpleOperations
