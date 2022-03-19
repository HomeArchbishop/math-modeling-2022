const fs = require('fs')
const { resolve } = require('path')

const groupTxt = fs.readFileSync(resolve(__dirname, '../results/charts/cppOutput.txt')).toString()

const data = groupTxt.split('\n').map(s => s.split(' '))

// const hinge = data.map(arr => arr[1])

const group = data.map(arr => arr[1]).filter(s => s || s === 0)

const tmp = group.reduce((p, c) => {
  if (!p[c]) {
    p[c] = 0
  }
  p[c]++
  return p
}, {})
console.log(Object.keys(tmp).length)

fs.writeFileSync(resolve(__dirname, '../results/charts/group.json'), JSON.stringify(group))
