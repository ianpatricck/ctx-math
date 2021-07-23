const keysToBeIgnored = require('../database/expressionsToBeIgnored')

/**
 * Loop function responsible for translating 
 * the expressions described in mathematical language.
 * 
 * @param currentQuestion 
 * @param keyWords 
 * @param operation 
 * @returns String
 * 
 */

const loopForOperations = (currentQuestion, keyWords, operation) => {
    var finalFormat

    keyWords.forEach((key) => {
        if (currentQuestion.toLowerCase().includes(key))
            currentQuestion = currentQuestion.replace(new RegExp(key, 'gi'), operation)
                
        finalFormat = currentQuestion
    })

    return finalFormat
}

/**
 * Function to check if there is something to be 
 * ignored by the expression.
 * 
 * @param questionToBeTraited
 * @returns String
 * 
 */

const checksForCharactersToBeDeleted = (questionToBeTraited) => {
    var finalFormat

    var questionLowerCase = questionToBeTraited.toLowerCase()

    keysToBeIgnored.forEach((key) => {
        if (questionLowerCase.includes(key))
            questionLowerCase = questionLowerCase.replace(key, '')
        finalFormat = questionLowerCase
    })

    return eval(finalFormat)
}

module.exports = {
    loopForOperations,
    checksForCharactersToBeDeleted
}
