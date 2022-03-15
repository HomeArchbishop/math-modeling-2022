const fs = require('fs')
const { resolve } = require('path')

const fg1 = fs.readFileSync(resolve(__dirname, '../../fg/fg1.txt')).toString()
const fg10 = fs.readFileSync(resolve(__dirname, '../../fg/fg10.txt')).toString()
const fg50 = fs.readFileSync(resolve(__dirname, '../../fg/fg50.txt')).toString()
const fg100 = fs.readFileSync(resolve(__dirname, '../../fg/fg100.txt')).toString()
const fg1000 = fs.readFileSync(resolve(__dirname, '../../fg/fg1000.txt')).toString()

const getI = fg => {
  const QList = fg.split('\n').filter(line => line && line[0] === 't').map(line => +line.match(/(?<=q=?).+/)[0])
  let loopIndex = 0
  let qMax = 0
  QList.forEach((q, i) => {
    if (q > qMax) {
      qMax = q
      loopIndex = i
    }
  })
  return [loopIndex, QList[loopIndex - 1], qMax, QList[loopIndex + 1]]
}

txt = 'GN(x)\tQ最大时的循环次数N\tQ[N-1]\tQ[N]\tQ[N+1]\n'
  + '1\t' + getI(fg1).join('\t') + '\n'
  + '10\t' + getI(fg10).join('\t') + '\n'
  + '50\t' + getI(fg50).join('\t') + '\n'
  + '100\t' + getI(fg100).join('\t') + '\n'
  + '1000\t' + getI(fg1000).join('\t')

fs.writeFileSync(resolve(__dirname, '../../fg/table.txt'), txt)
