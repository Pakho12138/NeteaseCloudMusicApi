const serverless = require('serverless-http')
const generateConfig = require('../../generateConfig')

async function start() {
  await generateConfig()
  const app = await require('../../server').serveNcmApi({
    checkVersion: true,
  })
  return serverless(app)
}
module.exports.handler = start()
