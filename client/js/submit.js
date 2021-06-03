var question = document.getElementById('question')

function submit() {
    fetch('http://localhost:8000/resolve', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            question: question
        }
    }).then((res) => {
        console.log(res)
    }).catch((error) => {
        console.error('Error:', error)
    })
}