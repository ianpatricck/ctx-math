var question = document.getElementById('question')

async function submit() {
    res = await fetch('http://localhost:8000/resolve', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: question.value })
    })

    res.then(res => res.json())
}
