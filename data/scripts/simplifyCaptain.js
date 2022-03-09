// 简化舰长重合列表

const fs = require('fs')
const { resolve } = require('path')

const sliceData = require('../results/captains/captains.json')

const simplfiedDataUid = {}
const simplfiedDataName = {}
const simplfiedDataAll = {}

// let captainCnt = 0

Object.keys(sliceData).forEach(name => {
  // captainCnt += sliceData[name].captainList.length
  simplfiedDataName[name] = sliceData[name].captainList
    .map(item => item.name).sort()
  simplfiedDataUid[name] = sliceData[name].captainList
    .map(item => item.uid).sort((f, n) => f - n)
  simplfiedDataAll[name] = {}
  sliceData[name].captainList.forEach(item => {
    simplfiedDataAll[name][item.name] = item.uid
  })
})

// console.log(captainCnt)

fs.writeFileSync(resolve(__dirname, '../results/captains/captains-simplied-uid.json'), JSON.stringify(simplfiedDataUid, null, 2))
fs.writeFileSync(resolve(__dirname, '../results/captains/captains-simplied-name.json'), JSON.stringify(simplfiedDataName, null, 2))
fs.writeFileSync(resolve(__dirname, '../results/captains/captains-simplied-all.json'), JSON.stringify(simplfiedDataAll, null, 2))
