/*
    Plot two arrays of data using Chart.js lib
*/
const plotData = function (data1, data2, label = null) {

    //limit chart data to last X number of data points
    var newdata1 = data1.slice(-50);
    var newdata2 = data2.slice(-50);
    var newLabel = label.slice(-50);
    var N = label ? newLabel : [...Array(Math.max(newdata1.length, newdata2.length)).keys()];

    var config = {
        type: 'line',
        data: {
            labels: N,
            datasets: [{
                label: 'Predicted',
                fill: false,
                backgroundColor: 'red',
                borderColor: 'red',
                data: newdata2,
            }, {
                label: 'Actual',
                backgroundColor: 'blue',
                borderColor: 'blue',
                data: newdata1,
                fill: false,
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Crypto Price Prediction'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Date'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Stock Value'
                    }
                }]
            }
        }
    };

    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = new Chart(ctx, config);
}    
