let canvas = document.querySelector('#soda-chart')
let context = canvas.getContext('2d')

let chart = new Chart(context,{
    type: 'bar',
    data: {
        labels: ['Coke', 'Pepsi','Either','Sprite' ,'Neither'],
        datasets: [{
            label: 'Number of votes',
            data: [18, 14, 7, 10],
            backgroundColor: ['red' ,'blue', 'green', 'yellow' ,'black'],
        }]
    },
    options: {
        scales: {
            YAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        }
    }

})