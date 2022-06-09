const { join } = require('path')
const { DeploymentBuilder } = require('@layer0/core/deploy')

const appDir = process.cwd()
const builder = new DeploymentBuilder(appDir)

module.exports = async function build(options) {
  // Clear previous Layer0 Output
  builder.clearPreviousBuildOutput()
  // Build the Nuxt 3 project as is
  let command = 'npm run build'
  try {
    await builder.exec(command)
  } catch (e) {
    throw new FrameworkBuildError('Nuxt.js', command, e)
  }
  // Store dist on the S3
  builder.addStaticAsset(join(appDir, 'dist'))
  command = 'node prerenderPaths.js'
  try {
    await builder.exec(command)
  } catch (e) {
    throw new FrameworkBuildError('Nuxt.js', command, e)
  }
  await builder.build()
}
