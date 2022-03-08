const data = require('../../results/captains/captain-contact-stat.json')

let max = -Infinity

let nameList = []

Object.keys(data).forEach(name => {
  Object.keys(data[name]).forEach(nameII => {
    if (data[name][nameII].per > max) {
      max = data[name][nameII].per
      nameList[0] = name
      nameList[1] = nameII
    }
  })
})

console.log(max, nameList)
