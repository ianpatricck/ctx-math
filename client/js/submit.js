var question = document.getElementById('question')

async function submit() {
    fetch('http://localhost:8000/resolve', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: question.value })
        
    }).then(res => res.json())
}
