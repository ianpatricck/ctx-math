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
