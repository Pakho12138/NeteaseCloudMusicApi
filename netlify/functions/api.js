const serverless = require('serverless-http');
 const generateConfig = require('../../generateConfig')
async function start() {
  await generateConfig()
  return require('../../server').serveNcmApi({
    checkVersion: true,
  })
}
const app = start();

 module.exports.handler = serverless(app);