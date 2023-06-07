$(document).ready(()=>{
    const metrika = JSON.parse($('#metrika').val())
    const dates = [];
    const visits = [];
    const pageviews = [];
    const users = [];
    metrika.forEach(el=>{
        dates.push(el.date)
        visits.push(el.visits)
        pageviews.push(el.pageviews)
        users.push(el.users)
    })
    setChart('visits-table',visits,dates,'Количество посещений')
    setChart('pageviews-table',pageviews,dates,'Количество просмотров')
    setChart('users-table',users,dates,'Количество пользователей')
})

function setChart(id,data,dates,text) {
    const myCanvas = document.getElementById(id);
    const myCanvasContext = myCanvas.getContext("2d");
    const gradientStroke1 = myCanvasContext.createLinearGradient(0, 80, 0, 280);
    gradientStroke1.addColorStop(0, 'rgba(108, 95, 252, 0.8)');
    gradientStroke1.addColorStop(1, 'rgba(108, 95, 252, 0.2) ');

    const gradientStroke2 = myCanvasContext.createLinearGradient(0, 80, 0, 280);
    gradientStroke2.addColorStop(0, 'rgba(5, 195, 251, 0.8)');
    gradientStroke2.addColorStop(1, 'rgba(5, 195, 251, 0.2) ');
    document.getElementById(id).innerHTML = '';

    new Chart(myCanvas, {
        type: 'line',
        data: {
            labels: dates,
            type: 'line',

            datasets: [{
                label: text,
                data: data,
                backgroundColor: gradientStroke1,
                borderColor: "#05c3fb",
                pointBackgroundColor: '#fff',
                pointHoverBackgroundColor: gradientStroke1,
                pointBorderColor: "#05c3fb",
                pointHoverBorderColor: gradientStroke1,
                pointBorderWidth: 1,
                pointRadius: 5,
                pointHoverRadius: 5,
                borderWidth: 3,
                fill: 'origin',
                lineTension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: false,
                    }
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function (context) {
                            var label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.parsed.y || '';
                            return label;
                        }
                    }
                }
            },
            scales: {
                x: {
                    display: true,
                    grid: {
                        display: false,
                        drawBorder: false,
                        color: 'rgba(119, 119, 142, 0.08)'
                    },
                    ticks: {
                        autoSkip: true,
                        color: '#b0bac9'
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'Month',
                        fontColor: 'transparent'
                    }
                },
                y: {
                    ticks: {
                        min: 0,
                        max: 200,
                        stepSize: 10,
                        color: "#b0bac9",
                    },
                    display: true,
                    grid: {
                        display: true,
                        drawBorder: false,
                        zeroLineColor: 'rgba(142, 156, 173,0.1)',
                        color: "rgba(142, 156, 173,0.1)",
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'sales',
                        fontColor: 'transparent'
                    }
                }
            },
            title: {
                display: false,
                text: 'Normal Legend'
            }
        }
    })
}
