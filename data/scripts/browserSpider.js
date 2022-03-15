let data = {}

let interval = setInterval(() => {
  let domlist = document.querySelectorAll('.columns.is-mobile.is-multiline.card')
  domlist.forEach(el => {
    // console.log('each', Object.keys(data).length)
    const name = el.querySelector('h4.noMargin').textContent.split(' ').filter(c => c !== '').slice(-2, -1)[0]
    if (data[name]) { return }
    data[name] = { name }
    data[name].uid = el.querySelector('h4.noMargin').textContent.split(' ').filter(c => c !== '').slice(-1)[0]
    data[name].desc = el.querySelector('.column.is-12-mobile.is-6-tablet.is-6-desktop.is-6-widescreen.is-6-fullhd.content p')?.textContent || ''
    data[name].iconShip = el.querySelector('.column.is-12-mobile.is-6-tablet.is-6-desktop.is-6-widescreen.is-6-fullhd.content span.el-icon-ship')?.textContent || ''
    let listRight = el.querySelectorAll('.columns.is-gapless.noMargin.is-mobile')
    listRight.forEach(row => {
      let title = row.querySelector('.column.is-4').textContent
      // console.log(title)
      if (/关注/.test(title)) {
        data[name].fansCnt = +row.querySelector('.column.is-7')
          .textContent.split('').filter(c => c !== ',' && c !== ' ').join('') || 0
      } else if (/日增/.test(title)) {
        data[name].dayAdd = row.querySelector('.column.is-7')
          .textContent.split('').filter(c => c !== ' ').join('') || 'no_data'
      } else if (/直播/.test(title)) {
        data[name].liveTime = row.querySelector('.column.is-7')
          .textContent.split('').filter(c => c !== ' ').join('') || 'no_data'
      } else if (/人气/.test(title)) {
        data[name].popu = row.querySelector('.column.is-7')
          .textContent.split('').filter(c => c !== ',' && c !== ' ').join('') || 0
      }
      row.querySelector('.column.is-4').textContent.split('').filter(c => c !== ',' && c !== ' ').join('') || 0
    })
  })

  if (Object.keys(data).length > 1000) {
    clearInterval(interval)
    console.log(data)
    console.log(new Date().getTime())
  }

  scrollTo(0, scrollY + innerHeight - 200)
}, 350)
