const API_URL = 'https://ctx-math-api.herokuapp.com/resolve' // API para envio das questões.

async function submit() {
    await fetch(API_URL, {
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
