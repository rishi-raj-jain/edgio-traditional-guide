const fs = require('fs')
const glob = require('glob')

var getDirectories = function (src, callback) {
  glob(src + '/**/*', callback)
}

getDirectories('dist', function (err, res) {
  if (err) {
    console.log('Error', err)
  } else {
    let prerenderPaths = []
    res.forEach((i) => {
      prerenderPaths.push(i.replace('dist', ''))
    })
    prerenderPaths= prerenderPaths.filter((i) => i).map((i) => ({ path: i }))
    fs.writeFile('./publicPaths.js', `export const publicPaths= ${JSON.stringify(prerenderPaths)}`, function (err) {
      if (err) {
        console.error('Crap happens', err)
      }
    })
  }
})
