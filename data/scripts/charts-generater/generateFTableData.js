const fs = require('fs')
const { resolve } = require('path')

const F = require('../../results/attactions/F.json')

const shortNameList = Object.keys(F).slice(0, 12)

const shortF = shortNameList.reduce((p, name) => {
  p[name] = {}
  shortNameList.forEach(nameB => {
    if (name === nameB) {
      p[name][nameB] = '/'
      return
    }
    p[name][nameB] = F[name][nameB].value.toFixed(2)
  })
  return p
}, {})

const txt = '\t'
  + Object.keys(shortF).join('\t') + '\n'
  + Object.keys(shortF).reduce((p, name) => {
    p += name + '\t'
      + Object.values(shortF[name]).join('\t') + '\n'
    return p
  }, '')

  fs.writeFileSync(resolve(__dirname, '../../results/attactions/F_Table.json'), JSON.stringify(shortF, null, 2))
  fs.writeFileSync(resolve(__dirname, '../../results/attactions/F_Table.txt'), txt)
