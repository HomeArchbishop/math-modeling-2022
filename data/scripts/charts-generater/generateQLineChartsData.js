const fs = require('fs')
const { resolve } = require('path')

const txt = fs.readFileSync(resolve(__dirname, '../../results/charts/cppOutputQ.txt')).toString()

const Q = txt.split('\n').map(line => +line.match(/(?<=q=?).+/)[0])

const border = 37515
const end = 37600

const data = {
  labels: Object.keys(Q).slice(border, end),
  datasets: [{
    label: `Q值（${border}-${end || 'end'}）`,
    data: Q.slice(border, end),
    borderWidth: 1,
    borderColor: '#00ffaa44',
    backgroundColor: '#00aaaa'
  }]
}

fs.writeFileSync(resolve(__dirname, '../../../analyse/charts/assets/data/data.js'), 'export default ' + JSON.stringify(data, null, 2))
