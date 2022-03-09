const fs = require('fs')
const { resolve } = require('path')

const joinedData = {}

Array(11).fill('').map((_, index) => index + 1).forEach(index => {
  const sliceData = require('../../results/captains/slice/' + `${index}.json`)
  Object.keys(sliceData).forEach(name => {
    joinedData[name] = sliceData[name]
  })
})

fs.writeFileSync(resolve(__dirname, '../../results/captains/captains.json'), JSON.stringify(joinedData, null, 2))
