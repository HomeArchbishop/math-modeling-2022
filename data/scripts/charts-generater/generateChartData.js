const fs = require('fs')
const { resolve } = require('path')

// const infoData = require('../results/top500.json')
const groupData = require('../../results/charts/group.json')
const F = require('../../results/attactions/F.json')
const K = require('../../results/attactions/K.json')
const W = require('../../results/attactions/W.json')
const indexMap = require('../../results/attactions/cpp-data/lessData/indexMap.json')
const indexArray = require('../../results/attactions/cpp-data/lessData/indexArray.json')
const connData = require('../../results/attactions/cpp-data/lessData/cppData.json')

const chartData = { nodes: [], links: [] }

const vtbNameList = indexArray // .slice(0, 50)

// (1) nodes
vtbNameList.forEach(vtbName => {
  chartData.nodes.push({
    id: '' + indexMap[vtbName],
    name: vtbName,
    val: (K[vtbName] * W[vtbName]) ** .5,
    group: groupData[indexMap[vtbName]]
  })
})

// (2) links
const tmp = vtbNameList.reduce((p, c) => {
  p[c] = 0
  return p
}, {})
vtbNameList.forEach(vtbName => {
  const vtbIndex = indexMap[vtbName]
  connData[vtbIndex].forEach((val, index) => {
    if (val === 1) {
      // vtbIndex -> index
      const length = groupData[vtbIndex] !== groupData[index] ? 4000 :
        1 // 250000 / F[vtbName][indexArray[index]].value
      chartData.links.push({
        source: '' + vtbIndex,
        target: '' + index,
        width: 1,
        length
      })
      tmp[indexArray[vtbIndex]]++
      tmp[indexArray[index]]++
    }
  })
})

chartData.nodes.forEach(obj => {
  obj.name += '__' + tmp[obj.name]
})

fs.writeFileSync(resolve(__dirname, '../../results/charts/chartData.json'), JSON.stringify(chartData, null, 2))
fs.writeFileSync(resolve(__dirname, '../../../analyse/charts/ex/data.js'), 'var data = ' + JSON.stringify(chartData))
