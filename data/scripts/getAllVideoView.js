const axios = require('axios').default

const fs = require('fs')
const { resolve } = require('path')

const baseURL = 'https://api.bilibili.com/x/space/upstat'

const errList = []

const data = require('../results/top500.json')

const nameList = Object.keys(data)
let nameIndex = 0

const viewData = {}

const interval = setInterval(() => {
  const name = nameList[nameIndex]

  if (!name) {
    clearInterval(interval)
    fs.writeFileSync(resolve(__dirname, '../results/counts/view.json'), JSON.stringify(viewData, null, 2))
    return
  }

  const mid = data[name].uid

  console.log(nameIndex, mid)

  axios.request({
    url: baseURL,
    params: {
      mid
    },
    headers: {
      cookie: 'rpdid=|(k|lJukJ~uu0J\'ulm)~uku|Y; LIVE_BUVID=AUTO8015987140170080; balh_server_inner=__custom__; balh_is_closed=; balh_server_custom=https://bili.tuturu.top; DedeUserID=432135659; DedeUserID__ckMd5=fa7a8951da8f5baa; _uuid=413F6DC4-7FF9-69ED-BBAE-A742BCF75CA553747infoc; buvid3=747AFC44-4B9D-4D2B-9C54-044A8D732D1B148798infoc; buvid_fp_plain=747AFC44-4B9D-4D2B-9C54-044A8D732D1B148798infoc; sid=hyzgzn58; fingerprint=b73e0d99531e046226f80b40756faa4f; SESSDATA=720f5413%2C1648875949%2C1cb77*a1; bili_jct=1082bee3a03074b02fae616ae5067339; fingerprint3=53556ef80983a6788b57485911d8ab39; fingerprint_s=70166300099b84eb159f8fcbd38d83b2; video_page_version=v_old_home; b_ut=5; blackside_state=0; UM_distinctid=17e61f7008b1eb-0537599c805207-34647600-13c680-17e61f7008cda; buvid4=7EA2393F-F975-AF0B-DAAD-16F8FBA7AC5E58383-022012822-Cmp6MCd3twravilOjLnZWA%3D%3D; buvid_fp=4c7926d18965cc2dca96b6efdcca36aa; CURRENT_BLACKGAP=1; bp_video_offset_432135659=628236604535263000; CURRENT_FNVAL=4048; bsource=share_source_copylink_web; CURRENT_QUALITY=0; innersign=0; i-wanna-go-back=2; PVID=1; b_lsid=1076F10F710_17F6439ABCB'
    }
  })
  .catch(e => {
    errList.push({
      mid,
      name
    })
    console.log(errList)
  })
  .then(res => {
    if (res.data?.code !== 0) {
      errList.push({
        mid,
        name
      })
      console.log(errList)
      return
    }
    viewData[name] = res.data.data
  })

  nameIndex++
}, 1000)
