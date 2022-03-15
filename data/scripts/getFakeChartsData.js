const group = new Array(500).fill('').map(() => ~~(Math.random() * 18) + 1)

require('fs').writeFileSync(require('path').resolve(__dirname, '../fake/charts/group.json'), JSON.stringify(group, null, 2))