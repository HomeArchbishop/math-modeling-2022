const fs = require('fs')
const { resolve } = require('path')

// const infoData = require('../results/top500.json')
const groupData = require('../../results/charts/group.json')
const hingeData = require('../../results/charts/hinge.json')
const centerData = require('../../results/charts/center.json')
const aloneData = require('../../results/charts/alone.json')
const F = require('../../results/attactions/F.json')
const K = require('../../results/attactions/K.json')
const W = require('../../results/attactions/W.json')
const indexMap = require('../../results/attactions/cpp-data/lessData/indexMap.json')
const indexArray = require('../../results/attactions/cpp-data/lessData/indexArray.json')
const connData = require('../../results/attactions/cpp-data/lessData/cppData.json')

const chartData = { nodes: [], links: [] }

const vtbNameList = indexArray // .slice(0, 50)

// (1) nodes
const renderName = vtbName => {
  return centerData.includes(indexMap[vtbName])
    ? vtbName + '_中心人物'
    : aloneData.includes(indexMap[vtbName])
      ? vtbName + '_边缘人物'
      : vtbName
}
vtbNameList.forEach(vtbName => {
  chartData.nodes.push({
    id: '' + indexMap[vtbName],
    name: renderName(vtbName),
    val: 20,
    group: centerData.includes(indexMap[vtbName]) ? 3 : aloneData.includes(indexMap[vtbName]) ? 1 : 2
  })
})

// (2) links
const tmp = vtbNameList.reduce((p, c) => {
  p[c] = 0
  return p
}, {})
const groupTmp = []
vtbNameList.forEach(vtbName => {
  const vtbIndex = indexMap[vtbName]
  if (!groupTmp.includes(groupData[vtbIndex])) {
    groupTmp.push(groupData[vtbIndex])
  }
  connData[vtbIndex].forEach((val, index) => {
    if (val === 1) {
      // vtbIndex -> index
      // if (groupData[vtbIndex] === groupData[index]) {
        chartData.links.push({
          source: '' + vtbIndex,
          target: '' + index,
          width: 8,
          length: 200
        })
      // }
      // } else if (hingeData[groupData[vtbIndex]] === vtbIndex && hingeData[groupData[index]] === index) {
      //   chartData.links.push({
      //     source: '' + vtbIndex,
      //     target: '' + index,
      //     width: 1,
      //     length: 3300
      //   })
      // }
      tmp[indexArray[vtbIndex]]++
      tmp[indexArray[index]]++
    }
  })
})

// chartData.nodes.forEach(obj => {
//   obj.name += '__' + tmp[obj.name]
// })

console.log(groupTmp.length)

fs.writeFileSync(resolve(__dirname, '../../results/charts/chartData.json'), JSON.stringify(chartData, null, 2))
fs.writeFileSync(resolve(__dirname, '../../../analyse/charts/ex/data.js'), 'var data = ' + JSON.stringify(chartData))
