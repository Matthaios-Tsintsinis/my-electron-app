const ctx = document.getElementById('myChart');

let myvar = [23, 45, 34, 56, 12, 54, 76, 85, 56, 54, 34, 54]
let myvar2 = [45, 12, 76, 23, 28, 69, 47, 25, 34, 74, 98, 64]

let myvarnames = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

let chart_test = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: myvarnames,
      datasets: [{
        label: 'Test Columns', //oi mple mpares.
        data: myvar,
        borderWidth: 1
      }, {
        label: 'Test Columns2', //oi kokkines mpares.
        data: myvar2,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        maintainAscpectRatio: false,
        y: {
          beginAtZero: true
        }
      }
    }
  });

//gia na paroume px to onoma (label) tou chart mas mporoume na kanoume to exhs
// thetoume mia metablhth h opoia "katefthinei" xrhsimopoiontas thn . apo thn arxh mexri ekei
// pou theloume na to ftasoume

let chart_label = chart_test.data.datasets[0].label
console.log(chart_label) //exei san output to onoma tou chart mas dhladh "Test Columns 1"
let chart_label2 = chart_test.data.datasets[1].label
console.log(chart_label) //exei san output to onoma tou allou chart mas dhladh "Test Columns 2"

const ctx2 = document.getElementById('myChart2');
let chart_test2 = new Chart(ctx2, {
  type: 'line',
    data: {
      labels: myvarnames,
      datasets: [{
        label: 'Test Lines 1', //oi mple mpares.
        data: myvar,
        // backgroundColor: '#000',
        // hoverBackgroundColor: '#36A2EB',
        borderWidth: 1,
        tension: 0.3,
        // fill: false,
        // borderColor: 'rgb(75, 192, 192)',
        // pointRadius: 20,
        // pointStyle: false, 
        // borderColor: 'black',
        // hoverBorderColor: 'blue',
      }, {
        label: 'Test Lines 2', //oi kokkines mpares.
        data: myvar2,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
          y: {
            beginAtZero: true,
            display: true,
            text: 'Hello this is a test!',
          }
      }
  }
  });


console.log(myvar)
myvar = [] //clearing the list while having already outputed the values on the chart.
console.log(myvar)



