var question = document.getElementById('question')

async function submit() {
    await fetch('http://localhost:8000/resolve', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            question: JSON.stringify({ message: question.value })
        }
    }).then((res) => {
        console.log(res)
    }).catch((error) => {
        console.error('Error:', error)
    })
}