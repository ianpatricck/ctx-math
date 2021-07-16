var question = document.getElementById('question')

function createResultMessage(result) {
    if (document.querySelector('.result-value')) {
        const resultValue = document.querySelector('.result-value')
        document.querySelector('.result').removeChild(resultValue)
    }

    const resultValue = document.createElement('h3')
    resultValue.classList.add('result-value')

    document.querySelector('.result').appendChild(resultValue)
    resultValue.innerText = String(result.result)
}

async function submit() {
    await fetch('http://localhost:8000/resolve', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: question.value })
        
    })
    .then(res => res.json())
    .then(result => {
        createResultMessage(result)
    })
}
