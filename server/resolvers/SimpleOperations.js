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

function loopForSubtraction(currentQuestion, keyWords) {
    let finalFormat

    keyWords.forEach((key) => {
        if (currentQuestion.includes(key))
            currentQuestion = currentQuestion.replace(new RegExp(key, 'gi'), '-')
        finalFormat = currentQuestion
    })

    return finalFormat
}

function loopForMultiplication(currentQuestion, keyWords) {
    let finalFormat

    keyWords.forEach((key) => {
        if (currentQuestion.includes(key))
            currentQuestion = currentQuestion.replace(new RegExp(key, 'gi'), '*')
        finalFormat = currentQuestion
    })

    return finalFormat
}

function loopForDivision(currentQuestion, keyWords) {
    let finalFormat

    keyWords.forEach((key) => {
        if (currentQuestion.includes(key))
            currentQuestion = currentQuestion.replace(new RegExp(key, 'gi'), '/')
        finalFormat = currentQuestion
    })

    return finalFormat
}

function loopForPotentiation(currentQuestion, keyWords) {
    let finalFormat

    keyWords.forEach((key) => {
        if (currentQuestion.includes(key))
            currentQuestion = currentQuestion.replace(new RegExp(key, 'gi'), '**')
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
        const subtractionArray = dataOperationsContext.map((elements) => elements.subtraction)
        const multiplicationArray = dataOperationsContext.map((elements) => elements.multiplication)
        const divisionArray = dataOperationsContext.map((elements) => elements.division)
        const potentiationArray = dataOperationsContext.map((elements) => elements.potentiation)

        finalQuestion = loopForAddition(question, additionArray.join(' ').split(','))
        finalQuestion = loopForSubtraction(finalQuestion, subtractionArray.join(' ').split(','))
        finalQuestion = loopForMultiplication(finalQuestion, multiplicationArray.join(' ').split(','))
        finalQuestion = loopForDivision(finalQuestion, divisionArray.join(' ').split(','))
        finalQuestion = loopForPotentiation(finalQuestion, potentiationArray.join(' ').split(','))
        
        console.log(finalQuestion)

        return eval(finalQuestion)
    }
}

module.exports = SimpleOperations
