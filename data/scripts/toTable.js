const data = require('../results/basic-next.json')
const fs = require('fs')
const { resolve } = require('path')

let str = 'name\tuid\tdesc\ticonShip\tfansCnt\tliveTime\r\n'

Object.keys(data).forEach(name => {
  str += data[name].name + '\t'
    + ('' + data[name].uid) + '\t'
    + (data[name].desc || '') + '\t'
    + (data[name].iconShip || '') + '\t'
    + data[name].fansCnt + '\t'
    + (data[name].liveTime || '') + '\t'
    + '\r\n'
})

fs.writeFileSync(resolve(__dirname, '../results/basic-next.xlsx'), str)
