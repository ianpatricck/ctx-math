var question = document.getElementById('question')

function createResultMessage(result) {
    // Verifica se existe um valor já exibido na tela
    // -> Caso exista, exclui a mensagem para evitar duplicação.

    if (document.querySelector('.result-value-success')) {
        const resultValueSuccess = document.querySelector('.result-value-success')
        document.querySelector('.result').removeChild(resultValueSuccess)
    }

    // Verifica se existe uma mensagem de erro
    // -> Caso exista, exclui a mensagem para evitar duplicação.
    
    if (document.querySelector('.result-value-danger')) {
        const resultValueDanger = document.querySelector('.result-value-danger')
        document.querySelector('.result').removeChild(resultValueDanger)
    }

    const resultValue = document.createElement('h3')

    if (Number(result.result)) {
        resultValue.classList.add('result-value-success')
    } else {
        resultValue.classList.add('result-value-danger')
    }

    document.querySelector('.result').appendChild(resultValue)
    resultValue.innerText = String(result.result)
}
