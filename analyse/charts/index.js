import './assets/chart.min.js'

import data from './assets/data/data.js'

// import K from '/data/results/attactions/K.json'

const ctx = document.getElementById('mainCanvas').getContext('2d')

const myChart = new Chart(ctx, {
  type: 'line',
  data,
  options: {
    plugins: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 14
          }
        }
      }
    }
  }
})
