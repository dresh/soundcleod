'use strict'

// eslint-disable-next-line import/no-extraneous-dependencies
const { notarize } = require('electron-notarize')

exports.default = async function notarizing(context) {
  const { electronPlatformName, appOutDir } = context
  if (electronPlatformName !== 'darwin') {
    return
  }

  const appName = context.packager.appInfo.productFilename

  console.log(`Notarizing with Apple, this might take long...`)
  return notarize({
    appBundleId: 'com.electron.soundcleod',
    appPath: `${appOutDir}/${appName}.app`,
    appleId: process.env.APPLEID,
    appleIdPassword: process.env.APPLEIDPASS
  })
}
