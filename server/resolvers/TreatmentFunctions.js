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
    let finalFormat

    keyWords.forEach((key) => {
        if (currentQuestion.includes(key))
            currentQuestion = currentQuestion.replace(new RegExp(key, 'gi'), operation)
        finalFormat = currentQuestion
    })

    return finalFormat
}

module.exports = loopForOperations
