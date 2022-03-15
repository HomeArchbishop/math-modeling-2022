const fs = require('fs')
const { resolve } = require('path')

// const K = require('../results/attactions/K.json')
// const W = require('../results/attactions/W.json')
const R_1 = require('../results/attactions/R_1.json')
const F = require('../results/attactions/F.json')
// F[n1][n2].value
// F[n1][n2].target

const vtbNameList = Object.keys(F)

const relateName = (nameFrom, nameTo) => [nameFrom, nameTo].sort().join('____AND____')
const splitName = name => name.split('____AND____')

const connectRelate = {}
vtbNameList.forEach(nameFrom => {
  vtbNameList.forEach(nameTo => {
    if (nameFrom === nameTo) { return }
    if (R_1[nameTo][nameFrom].value === 0) { return }
    connectRelate[relateName(nameFrom, nameTo)] = F[nameFrom][nameTo].value
  })
})

const relateNameSort = (() => {
  const __r__ = Object.keys(connectRelate).sort((relateOne, relateTwo) => connectRelate[relateTwo] - connectRelate[relateOne])
  console.log(__r__.length)
  return __r__.slice(0, __r__.length / 5 + 1)
})()

const top1_10Relate = relateNameSort.reduce((p, relateName) => {
  p[relateName] = connectRelate[relateName]
  return p
}, {})

const F_CONNECT = {}

const vtbConnectCnt = vtbNameList.reduce((p, c) => {
  p[c] = 0
  return p
}, {})

Object.keys(top1_10Relate).forEach(relateName => {
  const [ nameOne, nameTwo ] = splitName(relateName)
  if (!F_CONNECT[nameOne]) { F_CONNECT[nameOne] = {} }
  if (!F_CONNECT[nameTwo]) { F_CONNECT[nameTwo] = {} }
  F_CONNECT[nameOne][nameTwo] = {
    conn: true,
    target: F[nameOne][nameTwo].target
  }
  F_CONNECT[nameTwo][nameOne] = {
    conn: true,
    target: F[nameOne][nameTwo].target
  }
  vtbConnectCnt[nameOne]++
  vtbConnectCnt[nameTwo]++
})

const adjust = function () {
  const bigVtbNameList = vtbNameList.filter(vtbName => vtbConnectCnt[vtbName] > 99)
  const smallVtbNameList = vtbNameList.filter(vtbName => vtbConnectCnt[vtbName] < 5)
  
  bigVtbNameList.forEach(name => {
    const connectVtbNameListSort = Object.keys(F_CONNECT[name]).sort()
  })
}

adjust()

// fs.writeFileSync(resolve(__dirname, '../results/attactions/F_CONNECT_NEW.json'), JSON.stringify(F_CONNECT, null, 2))
