// 根据重合舰长列表 统计数据

const captainData = require('../results/captains/captains-simplied-all.json')
const contactData = require('../results/captains/captain-contact-list.json')

const fs = require('fs')
const { resolve } = require('path')

const vtbNameList = Object.keys(contactData)

const contactCntData = {}

vtbNameList.forEach(vtbNameFrom => {
  const vtbNameToList = Object.keys(contactData[vtbNameFrom])

  contactCntData[vtbNameFrom] = {}

  vtbNameToList.forEach(vtbNameTo => {
    const cnt = Object.keys(contactData[vtbNameFrom][vtbNameTo]).length || 0
    const allCaptainNum = Object.keys(captainData[vtbNameFrom]).length
    contactCntData[vtbNameFrom][vtbNameTo] = {
      cnt,
      all: allCaptainNum,
      per: cnt / allCaptainNum
    }
  })
})

fs.writeFileSync(resolve(__dirname, '../results/captains/captain-contact-stat.json'), JSON.stringify(contactCntData, null , 2))
