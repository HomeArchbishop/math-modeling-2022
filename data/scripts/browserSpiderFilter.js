const data = require('../results/basic-origin.json')
const fs = require('fs')
const { resolve } = require('path')

const nextData = {}

const checkValid = obj => {
  // chinese team and more
  if (/字幕|汉化/ig.test(obj.name)) { return false }
  // never live
  if (!obj.popu && !obj.liveTime) { return false }
  // time longer than 6 months
  if (/月/g.test(obj.liveTime) && +obj.liveTime.match(/\d+/g)[0] > 5) { return false }
  if (/年/g.test(obj.liveTime)) { return false }
  // else
  return true
}

Object.keys(data)
  .filter(name => checkValid(data[name]))
  .forEach(name => nextData[name] = data[name])

fs.writeFileSync(
  resolve(__dirname, '../results/basic-next.json'),
  JSON.stringify(JSON.parse(JSON.stringify(nextData).replace(/\\r|\\n/g, '')), null, 2)
)
