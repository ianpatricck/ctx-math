const API_URL = '' // API para envio das questões.

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