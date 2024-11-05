module.exports.handler = async function (event, context) {
  const serverless = require('serverless-http')
  const generateConfig = require('../../generateConfig')
  await generateConfig()
  const app = await require('../../server').serveNcmApi({
    checkVersion: true,
  })
  // console.log('---------------------app-------------------', app)
  return serverless(app)
}
