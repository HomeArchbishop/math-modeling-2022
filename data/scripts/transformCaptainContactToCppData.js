const data = require('../results/captains/captain-contact-stat.json')

const fs = require('fs')
const { resolve } = require('path')

const indexArray = []

const indexMap = {}

const nameListLen = Object.keys(data).length

const cppData = new Array(nameListLen).fill('').map(() => new Array(nameListLen).fill(1))

Object.keys(data).forEach((name, index) => {
  indexMap[name] = index
  indexArray[index] = name
})

let allCnt = 0
let zeroCnt = 0

Object.keys(data).forEach(nameFrom => {
  Object.keys(data[nameFrom]).forEach(nameTo => {
    console.log(indexMap[nameFrom], indexMap[nameTo], data[nameFrom][nameTo].per)
    cppData[indexMap[nameFrom]][indexMap[nameTo]] = data[nameFrom][nameTo].per
    allCnt++
    zeroCnt += !(data[nameFrom][nameTo].per)
  })
})

console.log(allCnt, zeroCnt, allCnt - zeroCnt)

const cppDataTxt = cppData.flat().join('\r\n')

fs.writeFileSync(resolve(__dirname, '../results/captains/cpp-data/cppData.txt'), cppDataTxt)
fs.writeFileSync(resolve(__dirname, '../results/captains/cpp-data/cppData.json'), JSON.stringify(cppData, null, 2))
fs.writeFileSync(resolve(__dirname, '../results/captains/cpp-data/indexMap.json'), JSON.stringify(indexMap, null, 2))
fs.writeFileSync(resolve(__dirname, '../results/captains/cpp-data/indexArray.json'), JSON.stringify(indexArray, null, 2))
