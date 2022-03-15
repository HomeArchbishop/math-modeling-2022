const fs = require('fs')
const { resolve } = require('path')

// const K = require('../results/attactions/K.json')
// const W = require('../results/attactions/W.json')
const R_1 = require('../results/attactions/R_1.json')
const F = require('../results/attactions/F.json')
// F[n1][n2].value
// F[n1][n2].target

const vtbNameList = Object.keys(F)

const F_CONNECT = vtbNameList.reduce((p, nameFrom) => {
  const nameToList = Object.keys(F[nameFrom])

  const nameConnectedList = nameToList
    .sort((nameI, nameII) => F[nameFrom][nameII].value - F[nameFrom][nameI].value)
    .slice(0, 5)

  p[nameFrom] = {}
  nameConnectedList.forEach(nameConnected => {
    p[nameFrom][nameConnected] = {
      conn: R_1[nameFrom][nameConnected].value !== 0,
      target: F[nameFrom][nameConnected].target
    }
  })
  return p
}, {})

fs.writeFileSync(resolve(__dirname, '../results/attactions/F_CONNECT_LESS.json'), JSON.stringify(F_CONNECT, null, 2))
