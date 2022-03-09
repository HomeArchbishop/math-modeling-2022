const fs = require('fs')
const { resolve } = require('path')

const averageView = require('../results/counts/average-view.json')
// averageView[name].average

const top500 = require('../results/top500.json')
// top500[name].fansCnt

const captainContact = require('../results/captains/captain-contact-stat.json')
// captainContact[name1][name2].per

const vtbNameList = Object.keys(top500)

const highestFansCnt = vtbNameList.reduce((p, n) => {
  return Math.max(top500[n].fansCnt, p)
}, -Infinity)

const K = vtbNameList.reduce((p, name) => {
  p[name] = averageView[name].average
  return p
}, {})

const W = vtbNameList.reduce((p, name) => {
  p[name] = top500[name].fansCnt / highestFansCnt
  return p
}, {})

const R_1 = vtbNameList.reduce((p, nameFrom) => {
  p[nameFrom] = vtbNameList.reduce((l, nameTo) => {
    if (nameFrom === nameTo) { return l }
    l[nameTo] = {
      value: Math.max(
        captainContact[nameFrom][nameTo].per,
        captainContact[nameTo][nameFrom].per
      ),
      target: captainContact[nameFrom][nameTo].per > captainContact[nameTo][nameFrom].per
        ? nameTo : nameFrom
    }
    return l
  }, {})
  return p
}, {})

// TODO
const G = 1

const F = vtbNameList.reduce((p, nameFrom) => {
  p[nameFrom] = vtbNameList.reduce((l, nameTo) => {
    if (nameFrom === nameTo) { return l }
    l[nameTo] = {
      value: G * (K[nameFrom] * W[nameFrom] * K[nameTo] * W[nameTo]) ** .5 * R_1[nameFrom][nameTo].value,
      target: R_1[nameFrom][nameTo].target
    }
    if (R_1[nameFrom][nameTo] === R_1[nameTo][nameFrom]) {
      l[nameTo].bin = true
    }
    return l
  }, {})
  return p
}, {})

fs.writeFileSync(resolve(__dirname, '../results/attactions/K.json'), JSON.stringify(K, null, 2))
fs.writeFileSync(resolve(__dirname, '../results/attactions/W.json'), JSON.stringify(W, null, 2))
fs.writeFileSync(resolve(__dirname, '../results/attactions/R_1.json'), JSON.stringify(R_1, null, 2))
fs.writeFileSync(resolve(__dirname, '../results/attactions/F.json'), JSON.stringify(F, null, 2))
