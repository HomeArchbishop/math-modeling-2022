// 爬取bilibili舰长数据

const axios = require('axios').default
const fs = require('fs')
const { resolve } = require('path')

const sliceIndex = 11

console.log(sliceIndex)

const data = require('../results/slice/' + `${sliceIndex}.json`)

const baseURL = 'https://api.live.bilibili.com/xlive/general-interface/v1/rank/getHeartRank'
const page_size = '30'

const errList = []

const captainData = {}

const nameList = Object.keys(data)

let nameIndex = 0

let isOccupied = false
const successNameList = []

let allInterval = setInterval(() => {
  if (isOccupied) { return }

  isOccupied = true

  const name = nameList[nameIndex]

  if (!name) {
    clearInterval(allInterval)
    return
  }

  const ruid = '' + data[name].uid

  console.log(ruid, nameIndex)

  let page = 1

  let interval = setInterval(() => {
    console.log(page)
    axios.request({
      url: baseURL,
      method: 'get',
      params: {
        ruid,
        page_size,
        page
      }
    })
    .catch(e => {
      errList.push({
        ruid,
        page,
        name
      })
      console.log(errList)
    })
    .then(res => {
      if (res.data.code !== 0) {
        errList.push({
          ruid,
          page,
          name
        })
        console.log(errList)
        return
      }
      const list = res.data.data.item
      if (!list.length) {
        clearInterval(interval)
        successNameList.push(name)
        isOccupied = false
        console.log('ok', ruid, name)
        return
      }
      if (!captainData[name]) {
        captainData[name] = { captainList: [], uid: ruid }
      }
      const nextList = list.map(obj => {
        return {
          rk: obj.user_rank,
          uid: obj.uid,
          name: obj.name,
          sc: obj.score,
          mn: obj.medal_name,
          lv: obj.level,
          gl: obj.guard_level,
        }
      })
      captainData[name].captainList.push(...nextList)
    })

    page++
  }, 1000)

  nameIndex++
}, 3000)

// save data
const saveInterval = setInterval(() => {
  if (successNameList.length === nameList.length) {
    // refer to all is done, then save it
    fs.writeFileSync(resolve(__dirname, `../results/captains/slice/${sliceIndex}.json`), JSON.stringify(captainData, null, 2))
    clearInterval(saveInterval)
  }
}, 3000)
