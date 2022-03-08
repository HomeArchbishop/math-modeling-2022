const fs = require('fs')
const { resolve } = require('path')

const txt = fs.readFileSync(resolve(__dirname, '../results/top500.txt')).toString()

const queryList = txt.replace(/\n/g, '\t').split('\t')

console.log(queryList)

const nextData = {}

queryList.forEach((v, index) => {
  if (index % 3) { return }
  nextData[v] = {
    name: v,
    uid: queryList[index + 1],
    fansCnt: +queryList[index + 2]
  }
})

fs.writeFileSync(resolve(__dirname, '../results/top500.json'), JSON.stringify(nextData, null, 2))

