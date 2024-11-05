exports.handler = async function (event, context) {
  const serverless = require('serverless-http')
  const generateConfig = require('../../generateConfig')
  await generateConfig()
  const app = await require('../../server').serveNcmApi({
    checkVersion: true,
  })
  const server = serverless(app)
  const result = await server(event, context)
  return result
}
