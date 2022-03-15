const fs = require('fs')
const { resolve } = require('path')

const data = require('../../results/top500.json')

let slicedObject = {}
let slicedObjectCnt = 0

let fileCnt = 1

Object.keys(data).forEach(name => {
  slicedObject[name] = data[name]
  slicedObjectCnt++
  if (slicedObjectCnt > 49) {
    fs.writeFileSync(resolve(__dirname, `../../results/slice/${fileCnt}.json`), JSON.stringify(slicedObject, null, 2))
    fileCnt++
    slicedObjectCnt = 0
    slicedObject = {}
  }
})
