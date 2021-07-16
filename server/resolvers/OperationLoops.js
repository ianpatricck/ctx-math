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

module.exports = {
    loopForAddition,
    loopForSubtraction,
    loopForMultiplication,
    loopForDivision,
    loopForPotentiation,
}
