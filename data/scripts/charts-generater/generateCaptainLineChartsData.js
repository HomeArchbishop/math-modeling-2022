const captain = require('../../results/captains/captains-simplied-name.json')
const fs = require('fs')
const { resolve } = require('path')

const data = {
  labels: Object.keys(captain),
  datasets: [{
    label: '舰长数',
    data: Object.values(captain).map(obj => obj.length),
    borderWidth: 1,
    borderColor: '#ff000044',
    backgroundColor: '#ff0000'
  }]
}

fs.writeFileSync(resolve(__dirname, '../../../analyse/charts/assets/data/data.js'), 'export default ' + JSON.stringify(data, null, 2))
