var labels = [0, 1, 2, 3, 4, 5]

var data = {
    labels: labels,
    datasets: [{
        label: '',
        backgroundColor: 'rgb(170, 126, 187)',
        borderColor: 'black',
        data: [0, 1, 2, 3, 4, 5],
    }]
}

const config = {
    type: 'line',
    data
}

var chart = new Chart(
    document.getElementById('chart'),
    config
)