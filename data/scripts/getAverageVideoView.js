const axios = require('axios').default

const fs = require('fs')
const { resolve } = require('path')

const view = require('../results/counts/view.json')
const count = require('../results/counts/count.json')

const viewData = {}

Object.keys(view).forEach(name => {
  viewData[name] = {
    average: count[name].cnt ? view[name].archive.view / count[name].cnt : 0
  }
})

fs.writeFileSync(resolve(__dirname, '../results/counts/average-view.json'), JSON.stringify(viewData, null, 2))
