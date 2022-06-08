const { createDevServer } = require('@layer0/core/dev')

module.exports = function () {
  return createDevServer({
    label: 'Docus',
    command: () => 'npm run dev',
    ready: [/listening on/i],
  })
}
