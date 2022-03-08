const top = Object.keys(require('../../results/top500.json'))

const captain = require('../../results/captains/captain-contact-list.json')

top.forEach(a => {
  if (!captain[a]) {
    console.log(a)
  }
})
