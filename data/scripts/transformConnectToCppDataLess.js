const F_CONNECT = require('../results/attactions/F_CONNECT_LESS.json')
// F_CONNECT[n1][n2].conn :== boolean
// F_CONNECT[n1][n2].target

const fs = require('fs')
const { resolve } = require('path')

const indexArray = []
const indexMap = {}

const nameListLen = Object.keys(F_CONNECT).length

const cppData = new Array(nameListLen).fill('').map(() => new Array(nameListLen).fill(0))
// cppData[i][j] = -1 :== self
// cppData[i][j] = 1 :== i -> j
// cppData[i][j] = 0 :== NO_CONN

Object.keys(F_CONNECT).forEach((name, index) => {
  indexMap[name] = index
  indexArray[index] = name
})

Object.keys(F_CONNECT).forEach(nameFrom => {
  cppData[indexMap[nameFrom]][indexMap[nameFrom]] = 0
  Object.keys(F_CONNECT[nameFrom]).forEach(nameTo => {
    if (F_CONNECT[nameFrom][nameTo].conn) {
      F_CONNECT[nameFrom][nameTo].target === nameFrom
        ? cppData[indexMap[nameTo]][indexMap[nameFrom]] = 1
        : cppData[indexMap[nameFrom]][indexMap[nameTo]] = 1
    }
  })
})

const cppDataTxt = cppData.flat().join('\r\n')

const cppDataShort = cppData.slice(0, 50).map(c => c.slice(0, 50))

const cppDataShortTxt = cppDataShort.flat().join('\r\n')

const cppDataTxtTX = cppData.reduce((p, cA) => p + cA.join(' ') + '\r\n', '')

fs.writeFileSync(resolve(__dirname, '../results/attactions/cpp-data/lessData/cppData.txt'), cppDataTxt)
fs.writeFileSync(resolve(__dirname, '../results/attactions/cpp-data/lessData/cppData.json'), JSON.stringify(cppData, null, 2))
fs.writeFileSync(resolve(__dirname, '../results/attactions/cpp-data/lessData/cppDataShort.json'), JSON.stringify(cppDataShort, null, 2))
fs.writeFileSync(resolve(__dirname, '../results/attactions/cpp-data/lessData/cppDataShort.txt'), cppDataShortTxt)
fs.writeFileSync(resolve(__dirname, '../results/attactions/cpp-data/lessData/indexMap.json'), JSON.stringify(indexMap, null, 2))
fs.writeFileSync(resolve(__dirname, '../results/attactions/cpp-data/lessData/indexArray.json'), JSON.stringify(indexArray, null, 2))
fs.writeFileSync(resolve(__dirname, '../results/attactions/cpp-data/lessData/cppDataTX.txt'), cppDataTxtTX)
