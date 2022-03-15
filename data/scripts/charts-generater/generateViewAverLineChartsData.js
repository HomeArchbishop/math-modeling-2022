const K = require('../../results/attactions/K.json')
const fs = require('fs')
const { resolve } = require('path')

const data = {
  labels: Object.keys(K),
  datasets: [{
    label: '平均播放数',
    data: Object.values(K).map(v => v > 1_000_000 ? 0 : v),
    borderWidth: 1,
    borderColor: '#aaff0044',
    backgroundColor: '#aaff00'
  }]
}

fs.writeFileSync(resolve(__dirname, '../../../analyse/charts/assets/data/data.js'), 'export default ' + JSON.stringify(data, null, 2))
