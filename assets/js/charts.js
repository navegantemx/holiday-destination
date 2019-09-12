  // Traversy Media https://www.youtube.com/watch?v=sE08f4iuOhA
    
let myChart = document.getElementById('myChart').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let massPopChart = new Chart(myChart, {
    type: 'pie', // bar, horizontalBar, pie, line, doughnut, radar, polarAerea
    data: {
        labels: ['Puebla', 'Merida', 'Guanajuato', 'Oaxaca', 'Mexico City'],
        datasets: [{
            label: 'Population',
            data: [1434062, 777615, 72237, 255029, 12294193],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 50, 192, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],

            borderWith: 1,
            borderColor: '#777',
            hoverBoarderWidth: 3,
            hoverBoarderColor: '#000'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Statistical population',
            fontSize: 25
        },
        legend: {
            position: 'right'
        }
    },
});
    
        
