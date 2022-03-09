const fs = require('fs')
const { resolve } = require('path')

// const K = require('../results/attactions/K.json')
// const W = require('../results/attactions/W.json')
// const R_1 = require('../results/attactions/R_1.json')
const F = require('../results/attactions/F.json')
// F[n1][n2].value
// F[n1][n2].target

const vtbNameList = Object.keys(F)

const F_CONNECT = vtbNameList.reduce((p, nameFrom) => {
  const nameToList = Object.keys(F[nameFrom])
  const nameConnectedBorderF = F[nameFrom][nameToList
    .sort((nameI, nameII) => F[nameFrom][nameI] - F[nameFrom][nameII])
    .slice(1, ~~(Object.keys(F[nameFrom]).length / 5)).reverse()[0]].value // FIXME do NOT include the same score
  console.log(nameConnectedBorderF)
  p[nameFrom] = nameToList.reduce((l, nameTo) => {
    // FIXME do NOT include the bin-conn
    l[nameTo] = {
      conn: F[nameFrom][nameTo].value >= nameConnectedBorderF,
      target: F[nameFrom][nameTo].target
    }
    return l
  }, {})
  return p
}, {})

fs.writeFileSync(resolve(__dirname, '../results/attactions/F_CONNECT.json'), JSON.stringify(F_CONNECT, null, 2))
