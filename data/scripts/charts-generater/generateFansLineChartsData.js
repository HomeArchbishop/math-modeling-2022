const fans = require('../../results/top500.json')
const fs = require('fs')
const { resolve } = require('path')

const data = {
  labels: Object.keys(fans),
  datasets: [{
    label: '粉丝数',
    data: Object.values(fans).map(obj => obj.fansCnt),
    borderWidth: 1,
    borderColor: '#00ffaa44',
    backgroundColor: '#00aaaa'
  }]
}

fs.writeFileSync(resolve(__dirname, '../../../analyse/charts/assets/data/data.js'), 'export default ' + JSON.stringify(data, null, 2))
