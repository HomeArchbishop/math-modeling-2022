// const data = require('../results/captains/short-simplified-all.json')
const data = require('../results/captains/captains-simplied-all.json')

const fs = require('fs')
const { resolve } = require('path')

const vtbNameList = Object.keys(data)

const contactData = {}

vtbNameList.forEach(vtbNameFrom => {
  const captainNameFromList = Object.keys(data[vtbNameFrom])

  contactData[vtbNameFrom] = {}

  vtbNameList.forEach(vtbNameTo => {
    // the same vtubers
    if (vtbNameFrom === vtbNameTo) { return }

    // the repeated vtubers
    if (contactData[vtbNameTo] && contactData[vtbNameTo][vtbNameFrom]) {
      contactData[vtbNameFrom][vtbNameTo] = contactData[vtbNameTo][vtbNameFrom]
      return
    }

    contactData[vtbNameFrom][vtbNameTo] = {}

    const captainNameToList = Object.keys(data[vtbNameTo])

    captainNameFromList.forEach(captainNameFrom => {
      if (captainNameToList.includes(captainNameFrom)) {
        // is the contact captain
        contactData[vtbNameFrom][vtbNameTo][captainNameFrom] = data[vtbNameFrom][captainNameFrom]
      }
    })
  })
})

fs.writeFileSync(resolve(__dirname, '../results/captains/captain-contact-list.json'), JSON.stringify(contactData, null , 2))
